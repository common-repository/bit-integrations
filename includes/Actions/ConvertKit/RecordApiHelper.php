<?php

/**
 * Convert Kit Record Api
 */

namespace BitCode\FI\Actions\ConvertKit;

use BitCode\FI\Log\LogHandler;
use BitCode\FI\Core\Util\Common;
use BitCode\FI\Core\Util\HttpHelper;

/**
 * Provide functionality for Record insert,update, exist
 */
class RecordApiHelper
{
    private $_defaultHeader;

    private $_integrationID;

    private $_apiEndpoint;

    public function __construct($api_secret, $integId)
    {
        // wp_send_json_success($tokenDetails);
        $this->_defaultHeader = $api_secret;
        $this->_apiEndpoint = 'https://api.convertkit.com/v3';
        $this->_integrationID = $integId;
    }

    // for adding a subscriber
    public function storeOrModifyRecord($method, $formId, $data)
    {
        $queries = $this->httpBuildQuery($data);
        $insertRecordEndpoint = "{$this->_apiEndpoint}/forms/{$formId}/{$method}?{$queries}";

        return HttpHelper::post($insertRecordEndpoint, null);
    }

    // for updating subscribers data through email id.
    public function updateRecord($id, $data)
    {
        $queries = $this->httpBuildQuery($data);
        $updateRecordEndpoint = "{$this->_apiEndpoint}/subscribers/{$id}?" . $queries;

        return HttpHelper::request($updateRecordEndpoint, 'PUT', null);
    }

    // add tag to a subscriber
    public function addTagToSubscriber($email, $tags)
    {
        $queries = http_build_query([
            'api_secret' => $this->_defaultHeader,
            'email'      => $email,
        ]);

        foreach ($tags as $tagId) {
            $searchEndPoint = "{$this->_apiEndpoint}/tags/{$tagId}/subscribe?{$queries}";

            HttpHelper::post($searchEndPoint, null);
        }
    }

    public function execute($fieldValues, $fieldMap, $actions, $formId, $tags)
    {
        $fieldData = [];
        $customFields = [];

        foreach ($fieldMap as $fieldKey => $fieldPair) {
            if (!empty($fieldPair->convertKitField)) {
                if ($fieldPair->formField === 'custom' && isset($fieldPair->customValue) && !is_numeric($fieldPair->convertKitField)) {
                    $fieldData[$fieldPair->convertKitField] = Common::replaceFieldWithValue($fieldPair->customValue, $fieldValues);
                } elseif (is_numeric($fieldPair->convertKitField) && $fieldPair->formField === 'custom' && isset($fieldPair->customValue)) {
                    $customFields[] = ['field' => (int) $fieldPair->convertKitField, 'value' => Common::replaceFieldWithValue($fieldPair->customValue, $fieldValues)];
                } elseif (is_numeric($fieldPair->convertKitField)) {
                    $customFields[] = ['field' => (int) $fieldPair->convertKitField, 'value' => $fieldValues[$fieldPair->formField]];
                } else {
                    $fieldData[$fieldPair->convertKitField] = $fieldValues[$fieldPair->formField];
                }
            }
        }

        if (!empty($customFields)) {
            $fieldData['fieldValues'] = $customFields;
        }

        $convertKit = (object) $fieldData;
        $existSubscriber = $this->existSubscriber($convertKit->email);

        if (empty($existSubscriber)) {
            $recordApiResponse = $this->storeOrModifyRecord('subscribe', $formId, $convertKit);

            if (isset($tags) && (\count($tags)) > 0 && $recordApiResponse) {
                $this->addTagToSubscriber($convertKit->email, $tags);
            }
            $type = 'insert';
        } else {
            if ($actions->update == 'true') {
                $this->updateRecord($existSubscriber->id, $convertKit);
                $type = 'update';
            } else {
                LogHandler::save($this->_integrationID, ['type' => 'record', 'type_name' => 'insert'], 'error', __('Email address already exists in the system', 'bit-integrations'));

                return;
            }
        }

        if (isset($existSubscriber->error)) {
            LogHandler::save($this->_integrationID, ['type' => 'record', 'type_name' => 'insert'], 'error', $existSubscriber->error);
        } elseif ($recordApiResponse && isset($recordApiResponse->error)) {
            LogHandler::save($this->_integrationID, ['type' => 'record', 'type_name' => $type], 'error', $recordApiResponse->error);
        } else {
            LogHandler::save($this->_integrationID, ['type' => 'record', 'type_name' => $type], 'success', $recordApiResponse);
        }

        return $recordApiResponse;
    }

    private function httpBuildQuery($data)
    {
        $query = [
            'api_secret' => $this->_defaultHeader,
            'email'      => $data->email,
            'first_name' => $data->firstName,
        ];

        foreach ($data as $key => $value) {
            $key = strtolower(preg_replace('/(?<!^)[A-Z]/', '_$0', $key));
            $array_keys = array_keys($query);
            if (!(\in_array($key, $array_keys))) {
                $query['fields'][$key] = $value;
            }
        }

        return http_build_query($query);
    }

    private function existSubscriber($email, $page = 1)
    {
        $queries = http_build_query([
            'api_secret' => $this->_defaultHeader,
            'page'       => $page,
            'status'     => 'all',
        ]);

        $response = HttpHelper::get("{$this->_apiEndpoint}/subscribers?{$queries}", null);

        if (is_wp_error($response) || empty($response->subscribers)) {
            return false;
        }

        foreach ($response->subscribers as $subscriber) {
            if ($subscriber->email_address === $email) {
                return $subscriber;
            }
        }

        if ($response->total_pages > $response->page) {
            return $this->existSubscriber($email, $page + 1);
        }
    }
}
