import{u as v,o as D,r as a,j as e}from"./main-955.js";import{_ as o,d as p}from"./bi.223.0.js";import"./bi.326.431.js";import{B as S}from"./bi.687.700.js";import{S as _}from"./bi.496.907.js";import{I as F,g as N}from"./bi.864.3.js";import y from"./bi.652.250.js";import{s as T,c as d}from"./bi.292.844.js";import{D as k}from"./bi.343.845.js";import"./bi.696.9.js";import"./bi.951.13.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.701.706.js";import"./bi.991.663.js";import"./bi.355.664.js";function Q({formFields:r,setFlow:u,flow:f,allIntegURL:g}){const x=v(),{formID:n}=D(),[h,b]=a.useState(!1),[s,c]=a.useState(1),[l,m]=a.useState({auth:!1,customFields:!1,accounts:!1,tags:!1}),[t,i]=a.useState({name:"Drip",type:"Drip",api_token:"",accounts:[],field_map:[{formField:"",dripField:""}],actions:{},tags:[],selectedAccountId:"",dripFormFields:T,selectedTags:"",selectedStatus:"",selectedRemoveTags:""}),j=I=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),I===3){if(!d(t)){p.error(o("Please map all required fields to continue","bit-integrations"));return}if(!(t!=null&&t.selectedAccountId)){p.error(o("Please select account to continue","bit-integrations"));return}t.name!==""&&t.field_map.length>0&&c(3)}};return e.jsxs("div",{children:[e.jsx("div",{className:"txt-center mt-2",children:e.jsx(_,{step:3,active:s})}),e.jsx(y,{formID:n,dripConf:t,setDripConf:i,step:s,setstep:c,loading:l,setLoading:m}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(k,{formID:n,formFields:r,dripConf:t,setDripConf:i,loading:l,setLoading:m}),e.jsxs("button",{onClick:()=>j(3),disabled:!(t!=null&&t.selectedAccountId)||!d(t)||t.field_map.length<1,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[o("Next","bit-integrations"),"  ",e.jsx(S,{className:"ml-1 rev-icn"})]})]}),e.jsx(F,{step:s,saveConfig:()=>N(f,u,g,t,x,"","",b),isLoading:h,dataConf:t,setDataConf:i,formFields:r})]})}export{Q as default};
