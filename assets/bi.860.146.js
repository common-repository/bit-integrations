import{u as k,e as m,r as l,i as D,j as t}from"./main-80.js";import{$ as b,g as I,h as j,d as S,_ as s,i as R,I as y,c as a,s as C}from"./bi.433.0.js";import{D as N}from"./bi.433.885.js";import{h as g,T as n,c as p}from"./bi.881.886.js";import"./bi.895.650.js";import"./bi.194.651.js";function W({allIntegURL:u}){const E=k(),[r,v]=m(b),[e,i]=m(I),[x,w]=l.useState(!1),[_,c]=l.useState({auth:!1,euFields:!1,vendors:!1}),[T,o]=l.useState({show:!1}),f=D(j),h=()=>{if(!e.selectedTask){a.error(s("Please select a task!","bit-integrations"));return}if((e.selectedTask===n.UPDATE_VENDOR||e.selectedTask===n.WITHDRAW_REQUEST)&&!e.selectedVendor){a.error(s("Please select a vendor!","bit-integrations"));return}if(e.selectedTask!==n.DELETE_VENDOR&&!p(e)){a.error(s("Please map mandatory fields!","bit-integrations"));return}if(e.selectedTask===n.DELETE_VENDOR&&!e.selectedVendor&&!p(e)){a.error(s("Please select a topic or map fields!","bit-integrations"));return}if(e.selectedTask===n.WITHDRAW_REQUEST&&!e.selectedPaymentMethod){a.error(s("Please select a payment method!","bit-integrations"));return}C({flow:r,allIntegURL:u,conf:e,navigate:E,edit:1,setLoading:c,setSnackbar:o})};return t.jsxs("div",{style:{width:900},children:[t.jsx(S,{snack:T,setSnackbar:o}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:d=>g(d,e,i),name:"name",defaultValue:e.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(R,{entity:r.triggered_entity,setSnackbar:o}),t.jsx(N,{formID:r.triggered_entity_id,formFields:f,handleInput:d=>g(d,e,i),dokanConf:e,setDokanConf:i,loading:_,setLoading:c,setSnackbar:o}),t.jsx(y,{edit:!0,saveConfig:h,isLoading:x,dataConf:e,setDataConf:i,formFields:f}),t.jsx("br",{})]})}export{W as default};
