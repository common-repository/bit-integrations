import{u as _,e as f,r,i as v,j as t}from"./main-80.js";import{$ as C,g as j,h as T,d as b,_ as s,i as I,I as S,c as d,s as w}from"./bi.433.0.js";import{T as N}from"./bi.561.891.js";import{h as m,T as k,c as y}from"./bi.103.892.js";import"./bi.895.650.js";import"./bi.194.651.js";function V({allIntegURL:g}){const p=_(),[i,F]=f(C),[e,a]=f(j),[u,L]=r.useState(!1),[h,l]=r.useState({auth:!1,events:!1}),[x,n]=r.useState({show:!1}),c=v(T),E=()=>{if(!e.selectedTask){d.error(s("Please select a task!","bit-integrations"));return}if(e.selectedTask===k.NEW_ATTENDEE&&!e.selectedEvent){d.error(s("Please select a event!","bit-integrations"));return}if(!y(e)){d.error(s("Please map mandatory fields!","bit-integrations"));return}w({flow:i,allIntegURL:g,conf:e,navigate:p,edit:1,setLoading:l,setSnackbar:n})};return t.jsxs("div",{style:{width:900},children:[t.jsx(b,{snack:x,setSnackbar:n}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,a),name:"name",defaultValue:e.name||"",type:"text",placeholder:s("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(I,{entity:i.triggered_entity,setSnackbar:n}),t.jsx(N,{formID:i.triggered_entity_id,formFields:c,handleInput:o=>m(o,e,a),theEventsCalendarConf:e,setTheEventsCalendarConf:a,loading:h,setLoading:l,setSnackbar:n}),t.jsx(S,{edit:!0,saveConfig:E,isLoading:u,dataConf:e,setDataConf:a,formFields:c}),t.jsx("br",{})]})}export{V as default};
