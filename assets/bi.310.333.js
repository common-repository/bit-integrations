import{u as v,o as j,r as a,j as t}from"./main-955.js";import"./bi.326.431.js";import{B as k}from"./bi.687.700.js";import{_ as g}from"./bi.223.0.js";import{S as y}from"./bi.951.13.js";import{S as I}from"./bi.496.907.js";import b from"./bi.494.197.js";import{I as C,s as _}from"./bi.864.3.js";import{h as A,c as h}from"./bi.563.739.js";import{Z as N}from"./bi.233.738.js";import"./bi.696.9.js";import"./bi.701.706.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.991.663.js";import"./bi.355.664.js";const Z=i=>{const r={},c=window.location.href.replace(`${window.opener.location.href}`,"").split("&");c&&c.forEach(d=>{const o=d.split("=");o[1]&&(r[o[0]]=o[1])}),localStorage.setItem(`__${i}`,JSON.stringify(r)),window.close()};function K({formFields:i,setFlow:r,flow:f,allIntegURL:c}){const d=v(),{formID:o}=j(),[l,m]=a.useState(!1),[n,u]=a.useState(1),[x,s]=a.useState({show:!1}),[e,p]=a.useState({name:"Zoom",type:"Zoom",clientId:"",clientSecret:"",zoomId:"",field_map:[{formField:"",zoomField:""}],zoomFields:[],allActions:[{value:"Create Attendee",key:1},{value:"Delete Attendee",key:2},{value:"Create User",key:3},{value:"Delete User",key:4}],selectedActions:null,actions:{}});a.useEffect(()=>{window.opener&&Z("zoom")},[]);const w=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(e)){s({show:!0,msg:g("Please map fields to continue.","bit-integrations")});return}e.field_map.length>0&&u(3)};return t.jsxs("div",{children:[t.jsx(y,{snack:x,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(I,{step:3,active:n})}),t.jsx(b,{formID:o,zoomConf:e,setZoomConf:p,step:n,setStep:u,setSnackbar:s,isLoading:l,setIsLoading:m}),t.jsxs("div",{className:"btcd-stp-page",style:{width:n===2&&900,height:n===2&&"100%"},children:[t.jsx(N,{formID:o,formFields:i,handleInput:S=>A(S,e,p,o,m,s),zoomConf:e,setZoomConf:p,isLoading:l,setIsLoading:m,setSnackbar:s}),t.jsxs("button",{onClick:()=>w(),disabled:e.field_map.length<2||l||!e.id||!h(e)||e.selectedActions==null,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[g("Next","bit-integrations"),t.jsx(k,{className:"ml-1 rev-icn"})]})]}),t.jsx(C,{step:n,saveConfig:()=>_({flow:f,setFlow:r,allIntegURL:c,navigate:d,conf:e,setIsLoading:m,setSnackbar:s}),isLoading:l,dataConf:e,setDataConf:p,formFields:i})]})}export{K as default};