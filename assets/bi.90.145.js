import{o as l,r,e as i,f as x,j as s}from"./main-955.js";import{$ as u,g as j,f as k}from"./bi.223.0.js";import{S as b}from"./bi.951.13.js";import{f as w,E as S,s as h}from"./bi.864.3.js";import"./bi.326.431.js";import E from"./bi.107.182.js";import{W}from"./bi.651.699.js";import"./bi.300.11.js";import"./bi.696.9.js";import"./bi.283.14.js";import"./bi.687.700.js";function A({allIntegURL:a}){const{formID:n}=l(),[m,o]=r.useState({show:!1}),[f,c]=r.useState(!1),[e,d]=i(u),g=x(j),[t,p]=i(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(b,{snack:m,setSnackbar:o}),e.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(S,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(E,{formID:n,formFields:g,webHooks:t,setWebHooks:p,setSnackbar:o})}),s.jsx(W,{edit:!0,saveConfig:()=>h({flow:e,setFlow:d,allIntegURL:a,conf:t,edit:1,setIsLoading:c,setSnackbar:o}),isLoading:f}),s.jsx("br",{})]})}export{A as default};