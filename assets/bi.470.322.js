var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(a,s,e)=>s in a?I(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,g=(a,s)=>{for(var e in s||(s={}))S.call(s,e)&&x(a,e,s[e]);if(b)for(var e of b(s))k.call(s,e)&&x(a,e,s[e]);return a};import{u as w,l as C,i as N,r as l,j as t}from"./main-80.js";import{j as y,d as L,_ as p,I as M,s as P}from"./bi.433.0.js";import{S as R}from"./bi.293.894.js";import A from"./bi.467.186.js";import{h as E,c as T,b as q}from"./bi.342.731.js";import{B as D}from"./bi.533.732.js";import"./bi.29.687.js";import"./bi.717.703.js";import"./bi.895.650.js";import"./bi.194.651.js";function X({formFields:a,setFlow:s,flow:e,allIntegURL:h}){const j=w(),{formID:f}=C(),v=N(y),{siteURL:F}=v,[n,r]=l.useState(!1),[c,u]=l.useState(1),[_,o]=l.useState({show:!1}),[i,d]=l.useState({name:"Bit Form",type:"Bit Form",domainName:F,api_key:"",id:"",field_map:[{formField:"",BitFormMapField:""}],address_field:[],actions:{}}),B=()=>{var m;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(m=i.actions)!=null&&m.address&&!T(i)){o({show:!0,msg:p("Please map address required fields to continue.","bit-integrations")});return}if(!q(i)){o({show:!0,msg:p("Please map fields to continue.","bit-integrations")});return}i.listId!==""&&u(3)};return t.jsxs("div",{children:[t.jsx(L,{snack:_,setSnackbar:o}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(R,{step:3,active:c})}),t.jsx(A,{formID:f,bitFormConf:i,setBitFormConf:d,step:c,setstep:u,isLoading:n,setIsLoading:r,setSnackbar:o}),t.jsxs("div",{className:"btcd-stp-page",style:g({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(D,{formFields:a,handleInput:m=>E(m,i,d,f,r),bitFormConf:i,setBitFormConf:d,isLoading:n,setIsLoading:r,setSnackbar:o}),!i.id&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsxs("button",{onClick:()=>B(),disabled:i.field_map.length<2||n,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[p("Next","bit-integrations"),"  ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(M,{step:c,saveConfig:()=>P({flow:e,setFlow:s,allIntegURL:h,navigate:j,conf:i,setIsLoading:r,setSnackbar:o}),isLoading:n,dataConf:i,setDataConf:d,formFields:a})]})}export{X as default};
