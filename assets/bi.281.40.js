import{u as j,o as h,e as n,f as w,r as i,j as t}from"./main-955.js";import{f as I,$ as _,g as S,_ as r}from"./bi.223.0.js";import{S as v}from"./bi.951.13.js";import"./bi.326.431.js";import{S as C,I as N,s as y}from"./bi.864.3.js";import{h as D}from"./bi.629.711.js";import{D as E}from"./bi.632.712.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";function z({allIntegURL:m}){const d=j(),{id:p}=h(),[s,o]=n(I),[a,c]=n(_),l=w(S),[f,x]=i.useState(!1),[g,e]=i.useState({show:!1}),b=()=>{y({flow:a,setFlow:c,allIntegURL:m,conf:s,navigate:d,edit:1,setIsLoading:x,setSnackbar:e})};return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:g,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>D(u,s,o),name:"name",value:s.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(C,{entity:a.triggered_entity,setSnackbar:e}),t.jsx(E,{flowID:p,formFields:l,dropboxConf:s,setDropboxConf:o}),t.jsx(N,{edit:!0,saveConfig:b,disabled:s.field_map.length<1,isLoading:f}),t.jsx("br",{})]})}export{z as default};
