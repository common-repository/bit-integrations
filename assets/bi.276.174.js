var C=Object.defineProperty;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(n,t,s)=>t in n?C(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,h=(n,t)=>{for(var s in t||(t={}))S.call(t,s)&&y(n,s,t[s]);if(N)for(var s of N(t))I.call(t,s)&&y(n,s,t[s]);return n};import{r as A,f as _,j as e}from"./main-955.js";import{e as D,_ as i}from"./bi.223.0.js";import{B as $}from"./bi.687.700.js";import{$ as T,x as k}from"./bi.326.431.js";import{k as P}from"./bi.864.3.js";import{r as B}from"./bi.370.681.js";import{T as w,t as U}from"./bi.701.706.js";import"./bi.696.9.js";import"./bi.951.13.js";import"./bi.300.11.js";import"./bi.283.14.js";function Y({formID:n,marketingHubConf:t,setMarketingHubConf:s,step:p,setstep:E,isLoading:x,setIsLoading:j,setSnackbar:r,redirectLocation:z,isInfo:l}){const[d,L]=A.useState(!1),[o,u]=A.useState({dataCenter:"",clientId:"",clientSecret:""}),b=_(D),Z="ZohoMarketingHub.lead.READ,ZohoMarketingHub.lead.CREATE,ZohoMarketingHub.lead.UPDATE",{zohoMarketingHub:a}=U,R=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),E(2),B(n,t,s,j,r)},c=m=>{const g=h({},t),v=h({},o);v[m.target.name]="",g[m.target.name]=m.target.value,u(v),s(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:p===1&&900,height:p===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(w,{title:"Zoho Marketing Automation (Zoho Marketing Hub)",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(w,{title:"Zoho Marketing Automation (Zoho Marketing Hub)",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Data Center:","bit-integrations")})}),e.jsxs("select",{onChange:c,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:l,children:[e.jsx("option",{value:"",children:i("--Select a data center--","bit-integrations")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:o.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Homepage URL:","bit-integrations")})}),e.jsx(T,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(T,{value:z||`${b.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:r,readOnly:l}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:i("Zoho API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:i("client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:o.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:i("client Secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red"},children:o.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>P("zohoMarkatingHub","zmarketingHub",Z,t,s,u,L,j,r,b),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||x,children:[d?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),x&&e.jsx(k,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:R,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[i("Next","bit-integrations"),e.jsx($,{className:"ml-1 rev-icn"})]})]})]})}export{Y as default};
