var _=Object.defineProperty,m=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var b=(t,s,e)=>s in t?_(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))S.call(s,e)&&b(t,e,s[e]);if(y)for(var e of y(s))w.call(s,e)&&b(t,e,s[e]);return t},r=(t,s)=>m(t,k(s));import{_ as l,b as o,c as n,A as F}from"./bi.433.0.js";const v=(t,s,e,u)=>{const i=a({},s),{name:c}=t.target;t.target.value!==""?i[c]=t.target.value:delete i[c],e(a({},i))},I=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.hubspotField||!e.formField==="custom"&&!e.customValue):[]).length>0),P=t=>{const s=t==null?void 0:t.hubSpotFields.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",hubspotField:e.key})):[{formField:"",hubspotField:""}]},O=(t,s,e,u,i)=>{if(!t.api_key){s({api_key:t.api_key?"":l("Access token can't be empty","bit-integrations")});return}s({}),i(r(a({},u),{auth:!0}));const c={api_key:t.api_key};o(c,"hubSpot_authorization").then(f=>{if(f&&f.success){e(!0),i(r(a({},u),{auth:!1})),n.success(l("Authorized Successfully","bit-integrations"));return}i(r(a({},u),{auth:!1})),n.error(l("Authorized failed, Please enter valid access token","bit-integrations"))})},M=(t,s,e,u,i)=>{e(r(a({},e),{pipelines:!0}));const c={api_key:t.api_key,type:u};o(c,"hubspot_pipeline").then(f=>{if(f.data){s(h=>F(h,p=>{p.default||(p.default={}),p.default.pipelines=f.data,p.actionName=u,A(p,s,e,u,i)})),e(r(a({},e),{pipelines:!1})),n.success(l("Pipelines fetched successfully","bit-integrations"));return}else e(r(a({},e),{pipelines:!1})),n.error(l("Pipelines fetching failed","bit-integrations"))})},N=(t,s,e)=>{e(r(a({},e),{owners:!0,hubSpotFields:!0}));const u={api_key:t.api_key};o(u,"hubspot_owners").then(i=>{if(i&&i.success){const c=a({},t);i.data&&(c.default||(c.default={}),c.default.owners=i.data),s(c),e(r(a({},e),{owners:!1,hubSpotFields:!0})),n.success(l("Owners fetched successfully","bit-integrations"));return}e(r(a({},e),{owners:!1,hubSpotFields:!0})),n.error(l("Owners fetching failed","bit-integrations"))})},g=(t,s,e)=>{e(r(a({},e),{contacts:!0,hubSpotFields:!0}));const u={api_key:t.api_key};o(u,"hubspot_contacts").then(i=>{if(i&&i.success){const c=a({},t);i.data&&(c.default||(c.default={}),c.default.contacts=i.data),s(c),e(r(a({},e),{contacts:!1,hubSpotFields:!0})),n.success(l("Contacts fetched successfully","bit-integrations"));return}e(r(a({},e),{contacts:!1,hubSpotFields:!0})),n.error(l("contacts fetching failed","bit-integrations"))})},x=(t,s,e)=>{e(r(a({},e),{companies:!0,hubSpotFields:!0}));const u={api_key:t.api_key};o(u,"hubspot_company").then(i=>{if(i&&i.success){const c=a({},t);i.data&&(c.default||(c.default={}),c.default.companies=i.data),s(c),e(r(a({},e),{companies:!1,hubSpotFields:!0})),n.success(l("Companies fetched successfully","bit-integrations"));return}e(r(a({},e),{companies:!1,hubSpotFields:!0})),n.error(l("Companies fetching failed","bit-integrations"))})},R=(t,s,e)=>{e(i=>r(a({},i),{industry:!0}));const u={api_key:t.api_key,type:"company"};o(u,"hubspot_industry").then(i=>{if(i&&i.success){const c=a({},t);i.data&&(c.industries=i.data),s(c),e(f=>r(a({},f),{industry:!1})),n.success(l("industry fetched successfully","bit-integrations"));return}e(c=>r(a({},c),{industry:!1})),n.error(l("industry fetching failed","bit-integrations"))})},A=(t,s,e,u,i,c=!1)=>{e(c?r(a({},i),{customFieldsRefresh:!0}):r(a({},e),{customFields:!0}));const f={api_key:t.api_key,type:u};o(f,"getFields").then(h=>{if(h&&h.success){h.data&&s(p=>F(p,d=>{d.hubSpotFields=h.data,d.actionName=u,d.field_map=P(d)})),e(r(a({},e),{customFields:!1})),e(r(a({},e),{hubSpotFields:!0})),n.success(l("Fields fetched successfully","bit-integrations"));return}e(r(a({},e),{customFields:!1})),n.error(l("Fields fetching failed","bit-integrations"))})};export{g as a,x as b,I as c,R as d,A as e,M as f,N as g,v as h,O as i};
