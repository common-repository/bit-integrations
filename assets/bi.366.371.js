import{u as b,o as j,r as a,j as e}from"./main-955.js";import{_ as m}from"./bi.223.0.js";import"./bi.326.431.js";import{B as C}from"./bi.687.700.js";import{S as I}from"./bi.951.13.js";import{S}from"./bi.496.907.js";import{I as _,g as k}from"./bi.864.3.js";import K from"./bi.548.232.js";import{c as N}from"./bi.705.810.js";import{C as w}from"./bi.458.811.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.701.706.js";function H({formFields:c,setFlow:d,flow:f,allIntegURL:u}){const g=b(),{formID:p}=j(),[o,r]=a.useState(!1),[s,l]=a.useState(1),[x,i]=a.useState({show:!1}),[t,n]=a.useState({name:"Kit(ConvertKit)",type:"Kit(ConvertKit)",api_secret:"",field_map:[{formField:"",convertKitField:""}],actions:{}}),h=v=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v===3){if(!N(t)){i({show:!0,msg:m("Please map all required fields to continue.","bit-integrations")});return}if(!(t!=null&&t.formId)){i({show:!0,msg:m("Please select form to continue.","bit-integrations")});return}t.name!==""&&t.field_map.length>0&&l(3)}};return e.jsxs("div",{children:[e.jsx(I,{snack:x,setSnackbar:i}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(S,{step:3,active:s})}),e.jsx(K,{formID:p,convertKitConf:t,setConvertKitConf:n,step:s,setstep:l,isLoading:o,setIsLoading:r,setSnackbar:i}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:p,formFields:c,convertKitConf:t,setConvertKitConf:n,isLoading:o,setIsLoading:r,setSnackbar:i}),e.jsxs("button",{onClick:()=>h(3),disabled:!(t!=null&&t.formId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[m("Next","bit-integrations"),"  ",e.jsx(C,{className:"ml-1 rev-icn"})]})]}),e.jsx(_,{step:s,saveConfig:()=>k(f,d,u,t,g,"","",r),isLoading:o,dataConf:t,setDataConf:n,formFields:c})]})}export{H as default};