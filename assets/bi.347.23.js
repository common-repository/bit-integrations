import{u as j,o as I,e as c,r as p,f as w,j as e}from"./main-955.js";import{f as C,$ as _,g as k,_ as r}from"./bi.223.0.js";import{S}from"./bi.951.13.js";import"./bi.326.431.js";import{S as v,I as y,s as N}from"./bi.864.3.js";import{h as f,c as F}from"./bi.370.681.js";import{Z as M}from"./bi.940.682.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.991.663.js";import"./bi.355.664.js";function G({allIntegURL:g}){const u=j(),{id:E,formID:n}=I(),[t,a]=c(C),[m,x]=c(_),[d,o]=p.useState(!1),[h,s]=p.useState({show:!1}),l=w(k),b=()=>{if(!F(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:m,setFlow:x,allIntegURL:g,conf:t,navigate:u,edit:1,setIsLoading:o,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:h,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>f(i,n,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(v,{entity:m.triggered_entity,setSnackbar:s}),e.jsx(M,{formID:n,formFields:l,handleInput:i=>f(i,n,t,a,o,s),marketingHubConf:t,setMarketingHubConf:a,isLoading:d,setIsLoading:o,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:b,disabled:t.list===""||t.table===""||t.field_map.length<1,isLoading:d,dataConf:t,setDataConf:a,formFields:l})]})}export{G as default};