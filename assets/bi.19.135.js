import{u as b,l as I,e as l,r as o,i as _,j as e}from"./main-80.js";import{$ as w,g as M,h as v,d as y,_ as r,i as F,I as S,s as N}from"./bi.433.0.js";import{h as c,c as m}from"./bi.611.865.js";import{M as R}from"./bi.246.866.js";function P({allIntegURL:f}){const g=b();I();const[n,k]=l(w),[t,a]=l(M),[x,p]=o.useState(!1),[u,h]=o.useState({}),[j,s]=o.useState({show:!1}),d=_(v),C=()=>{if(!m(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:n,allIntegURL:f,conf:t,navigate:g,edit:1,setIsLoading:p,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(y,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>c(i,t,a),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx(F,{entity:n.triggered_entity,setSnackbar:s}),e.jsx(R,{formID:n.triggered_entity_id,formFields:d,handleInput:i=>c(i,t,a),moxiecrmConf:t,setMoxieCRMConf:a,loading:u,setLoading:h,setSnackbar:s}),e.jsx(S,{edit:!0,saveConfig:C,disabled:!m(t),isLoading:x,dataConf:t,setDataConf:a,formFields:d}),e.jsx("br",{})]})}export{P as default};
