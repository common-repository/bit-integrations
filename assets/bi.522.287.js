import{u as j,l as b,r as o,j as e}from"./main-80.js";import{d as S,F as k}from"./bi.433.0.js";import{S as v}from"./bi.293.894.js";import w from"./bi.342.168.js";import{W as T}from"./bi.64.686.js";import{T as r,t as y}from"./bi.717.703.js";import"./bi.29.687.js";function E({formFields:c,setFlow:n,flow:u,allIntegURL:m}){const p=j(),{formID:l}=b(),[s,d]=o.useState(1),[f,a]=o.useState({show:!1}),[x,h]=o.useState(!1),{zohoFlowLinks:t}=y,[i,g]=o.useState({name:"Zoho Flow Web Hooks",type:"Zoho Flow",method:"POST",url:"",apiConsole:"https://flow.zoho.com/#/workspace/default/flows/create"});return e.jsxs("div",{children:[e.jsx(S,{snack:f,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(r,{title:"Zoho Flow",youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(r,{title:"Zoho Flow",docLink:t==null?void 0:t.docLink}),e.jsx(w,{formID:l,formFields:c,webHooks:i,setWebHooks:g,step:s,setStep:d,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:e.jsx(T,{step:s,saveConfig:()=>k(u,n,m,i,p,"","",h),isLoading:x})})]})}export{E as default};
