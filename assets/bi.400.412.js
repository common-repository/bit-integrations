import{u as h,o as j,r as s,j as e}from"./main-955.js";import"./bi.326.431.js";import{S as b}from"./bi.951.13.js";import{S as k}from"./bi.496.907.js";import{g as v}from"./bi.864.3.js";import T from"./bi.107.182.js";import{W as y}from"./bi.651.699.js";import{T as r,t as w}from"./bi.701.706.js";import"./bi.223.0.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.687.700.js";function q({formFields:m,setFlow:n,flow:c,allIntegURL:p}){const u=h(),{formID:d}=j(),[o,S]=s.useState(1),[l,a]=s.useState({show:!1}),[x,f]=s.useState(!1),{sureTriggersLinks:t}=w,[i,g]=s.useState({name:"SureTriggers Web Hooks",type:"SureTriggers",method:"POST",url:""});return e.jsxs("div",{children:[e.jsx(b,{snack:l,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(k,{step:2,active:o})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&1100,height:o===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:"SureTriggers",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:"SureTriggers",docLink:t==null?void 0:t.docLink}),e.jsx(T,{formID:d,formFields:m,webHooks:i,setWebHooks:g,step:o,setStep:S,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:o===2&&"100%",height:o===2&&"auto"},children:e.jsx(y,{step:o,saveConfig:()=>v(c,n,p,i,u,"","",f),isLoading:x})})]})}export{q as default};
