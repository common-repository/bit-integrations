import{u as k,e as f,r as l,f as D,j as t}from"./main-955.js";import{$ as S,f as b,g as I,_ as s,d as a}from"./bi.223.0.js";import{S as j}from"./bi.951.13.js";import{S as R,I as y,s as C}from"./bi.864.3.js";import{D as N}from"./bi.674.897.js";import{h as p,T as n,c as g}from"./bi.167.898.js";import"./bi.326.431.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.991.663.js";import"./bi.355.664.js";function K({allIntegURL:u}){const E=k(),[r,v]=f(S),[e,o]=f(b),[x,w]=l.useState(!1),[_,c]=l.useState({auth:!1,euFields:!1,vendors:!1}),[T,i]=l.useState({show:!1}),m=D(I),h=()=>{if(!e.selectedTask){a.error(s("Please select a task!","bit-integrations"));return}if((e.selectedTask===n.UPDATE_VENDOR||e.selectedTask===n.WITHDRAW_REQUEST)&&!e.selectedVendor){a.error(s("Please select a vendor!","bit-integrations"));return}if(e.selectedTask!==n.DELETE_VENDOR&&!g(e)){a.error(s("Please map mandatory fields!","bit-integrations"));return}if(e.selectedTask===n.DELETE_VENDOR&&!e.selectedVendor&&!g(e)){a.error(s("Please select a topic or map fields!","bit-integrations"));return}if(e.selectedTask===n.WITHDRAW_REQUEST&&!e.selectedPaymentMethod){a.error(s("Please select a payment method!","bit-integrations"));return}C({flow:r,allIntegURL:u,conf:e,navigate:E,edit:1,setLoading:c,setSnackbar:i})};return t.jsxs("div",{style:{width:900},children:[t.jsx(j,{snack:T,setSnackbar:i}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:d=>p(d,e,o),name:"name",defaultValue:e.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(R,{entity:r.triggered_entity,setSnackbar:i}),t.jsx(N,{formID:r.triggered_entity_id,formFields:m,handleInput:d=>p(d,e,o),dokanConf:e,setDokanConf:o,loading:_,setLoading:c,setSnackbar:i}),t.jsx(y,{edit:!0,saveConfig:h,isLoading:x,dataConf:e,setDataConf:o,formFields:m}),t.jsx("br",{})]})}export{K as default};