import{u as j,o as b,e as c,r,f as I,j as t}from"./main-955.js";import{$ as _,f as w,g as S,_ as n,n as P}from"./bi.223.0.js";import{S as v}from"./bi.951.13.js";import"./bi.326.431.js";import{S as y,I as F,s as N}from"./bi.864.3.js";import{h as m,c as f}from"./bi.951.840.js";import{C as k}from"./bi.336.841.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";function H({allIntegURL:p}){const g=j();b();const[i,E]=c(_),[e,a]=c(w),[u,L]=r.useState(!1),[x,d]=r.useState({}),[h,s]=r.useState({show:!1}),l=I(S),C=()=>{if(!f(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){P.error(n("Please select a pipeline","bit-integrations"));return}N({flow:i,allIntegURL:p,conf:e,navigate:g,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>m(o,e,a),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx(y,{entity:i.triggered_entity,setSnackbar:s}),t.jsx(k,{formID:i.triggered_entity_id,formFields:l,handleInput:o=>m(o,e,a),clinchPadConf:e,setClinchPadConf:a,loading:x,setLoading:d,setSnackbar:s}),t.jsx(F,{edit:!0,saveConfig:C,disabled:!f(e),isLoading:u,dataConf:e,setDataConf:a,formFields:l}),t.jsx("br",{})]})}export{H as default};
