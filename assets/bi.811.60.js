import{u,l as j,e as p,i as b,r as c,j as t}from"./main-80.js";import{g as I,$ as w,h as C,d as _,_ as m,i as v,I as N,s as S}from"./bi.433.0.js";import{h as l,c as y}from"./bi.892.743.js";import{W as A}from"./bi.590.744.js";import"./bi.131.690.js";/* empty css          */import"./bi.895.650.js";import"./bi.194.651.js";function M({allIntegURL:f}){const x=u(),{formID:g}=j(),[s,e]=p(I),[i,k]=p(w),r=b(C),[n,d]=c.useState(!1),[h,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>l(o,s,e),name:"name",value:s.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(v,{entity:i.triggered_entity,setSnackbar:a}),t.jsx(A,{formID:g,formFields:r,handleInput:o=>l(o,s,e),whatsAppConf:s,setWhatsAppConf:e,isLoading:n,setIsLoading:d,setSnackbar:a}),t.jsx(N,{edit:!0,saveConfig:()=>S({flow:i,allIntegURL:f,conf:s,navigate:x,edit:1,setIsLoading:d,setSnackbar:a}),disabled:y(s)||n,isLoading:n,dataConf:s,setDataConf:e,formFields:r}),t.jsx("br",{})]})}export{M as default};
