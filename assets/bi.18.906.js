var b=Object.defineProperty;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(e,s,t)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,m=(e,s)=>{for(var t in s||(s={}))x.call(s,t)&&i(e,t,s[t]);if(c)for(var t of c(s))u.call(s,t)&&i(e,t,s[t]);return e};import{j as r}from"./main-955.js";import{_ as n}from"./bi.223.0.js";import{x as p,$ as h}from"./bi.326.431.js";function k({onclick:e,nextPage:s,auth:t,loading:l}){return r.jsxs("div",{className:"w-6 d-flx flx-between ",children:[r.jsxs("button",{onClick:e,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:t||l,children:[t?n("Authorized ✔"):n("Authorize"),l&&r.jsx(p,{size:"20",clr:"#022217",className:"ml-2"})]}),r.jsx("br",{}),r.jsxs("button",{onClick:s,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:!t,children:[n("Next"),r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})}function v({error:e}){return e?r.jsx("div",{className:"mt-1 mb-2 error-msg",children:e}):""}function g({url:e,info:s}){return r.jsxs("small",{className:"d-blk mt-1",children:[n(`${s||""}`),r.jsx("a",{className:"btcd-link",href:e,target:"_blank",rel:"noreferrer",children:n("here.")})]})}function w({label:e,name:s,placeholder:t,onchange:l,value:d,disabled:o,copytext:a}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"my-1",children:r.jsx("b",{children:n(`${e||""}`)})}),a?r.jsx(h,{value:`${a}`,toastShow:!0,className:"field-key-cpy w-6 ml-0"}):r.jsx("input",{className:"btcd-paper-inp w-6 my-1 mx-0",onChange:l,name:s,value:d,type:"text",placeholder:n(`${t||""}`),disabled:o})]})}function _(e){const{style:s,step:t,stepNo:l}=e;return r.jsx("div",{className:"btcd-stp-page mt-2",style:m({},t===l&&s),children:e.children})}export{k as A,v as E,g as G,w as I,_ as S};
