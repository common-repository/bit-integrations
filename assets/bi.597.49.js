import{o as x,r as i,e as r,f as g,j as o}from"./main-955.js";import{$ as j,g as k,f as b}from"./bi.223.0.js";import{S as u}from"./bi.951.13.js";import{f as w,E as h,s as E}from"./bi.864.3.js";import"./bi.326.431.js";import S from"./bi.107.182.js";import{W}from"./bi.651.699.js";import"./bi.300.11.js";import"./bi.696.9.js";import"./bi.283.14.js";import"./bi.687.700.js";function A({allIntegURL:n}){const{formID:a}=x(),[m,s]=i.useState({show:!1}),[f,c]=i.useState(!1),[t,d]=r(j),p=g(k),[e,l]=r(b);return o.jsxs("div",{style:{width:900},children:[o.jsx(u,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(h,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(S,{formID:a,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(W,{edit:!0,saveConfig:()=>E({flow:t,setFlow:d,allIntegURL:n,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:f}),o.jsx("br",{})]})}export{A as default};
