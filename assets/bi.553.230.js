var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(s,e,i)=>e in s?L(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,c=(s,e)=>{for(var i in e||(e={}))_.call(e,i)&&j(s,i,e[i]);if(g)for(var i of g(e))T.call(e,i)&&j(s,i,e[i]);return s};import{r as k,j as t}from"./main-955.js";import{_ as n}from"./bi.223.0.js";import{x as z}from"./bi.326.431.js";import{a as S}from"./bi.842.807.js";import{T as y,t as w}from"./bi.701.706.js";import"./bi.696.9.js";function G({formID:s,sureCartConf:e,setSureCartConf:i,step:d,setStep:N,isLoading:m,setIsLoading:v,setSnackbar:E,redirectLocation:I,isInfo:r}){const[o,f]=k.useState(!1),[p,b]=k.useState({api_key:""}),{sureCart:a}=w,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),N(2)},h=l=>{const x=c({},e),u=c({},p);u[l.target.name]="",x[l.target.name]=l.target.value,b(u),i(x)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(y,{title:"SureCart",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(y,{title:"SureCart",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("App api key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"api_key",value:e.api_key,type:"text",placeholder:n("Api key...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:p.api_key}),t.jsxs("small",{className:"d-blk mt-5",children:[n("To get Api key , Please Visit  ","bit-integrations"),t.jsx("a",{className:"btcd-link",href:"https://app.surecart.com/developer",target:"_blank",rel:"noreferrer",children:n("SureCart","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>S(e,i,b,f,v),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||m,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),m&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
