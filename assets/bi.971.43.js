import{u as h,l as j,e as l,r as m,i as _,j as t}from"./main-80.js";import{$ as b,g as I,h as w,d as C,_ as r,i as v,I as y,s as F}from"./bi.433.0.js";import{h as f,c as M}from"./bi.805.711.js";import{M as N}from"./bi.660.712.js";import"./bi.895.650.js";import"./bi.194.651.js";function P({allIntegURL:p}){const g=h();j();const[n,S]=l(b),[e,a]=l(I),[d,i]=m.useState(!1),[u,s]=m.useState({show:!1}),c=_(w),x=()=>{if(!M(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}F({flow:n,allIntegURL:p,conf:e,navigate:g,edit:1,setIsLoading:i,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,a),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(v,{entity:n.triggered_entity,setSnackbar:s}),t.jsx(N,{formID:n.triggered_entity_id,formFields:c,handleInput:o=>f(o,e,a,i,s),mauticConf:e,setMauticConf:a,isLoading:d,setIsLoading:i,setSnackbar:s}),t.jsx(y,{edit:!0,saveConfig:x,disabled:e.field_map.length<1,isLoading:d,dataConf:e,setDataConf:a,formFields:c}),t.jsx("br",{})]})}export{P as default};
