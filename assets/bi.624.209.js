var T=Object.defineProperty;var g=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var j=(r,t,s)=>t in r?T(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,p=(r,t)=>{for(var s in t||(t={}))f.call(t,s)&&j(r,s,t[s]);if(g)for(var s of g(t))w.call(t,s)&&j(r,s,t[s]);return r};import{r as y,j as e}from"./main-955.js";import{_ as n}from"./bi.223.0.js";import{x as z}from"./bi.326.431.js";import{b as I}from"./bi.653.766.js";import{T as N,t as K}from"./bi.701.706.js";import"./bi.696.9.js";function Y({formID:r,kirimEmailConf:t,setKirimEmailConf:s,step:b,setstep:k,isLoading:m,setIsLoading:v,setSnackbar:A,redirectLocation:S,isInfo:i}){const[o,L]=y.useState(!1),[l,u]=y.useState({api_key:""}),{kirimEmail:a}=K,_=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2)},c=d=>{const h=p({},t),x=p({},l);x[d.target.name]="",h[d.target.name]=d.target.value,u(x),s(h)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(N,{title:"Kirim Email",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(N,{title:"Kirim Email",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:i}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Your username:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"userName",value:t.userName,type:"text",placeholder:n("username...","bit-integrations"),disabled:i}),e.jsx("div",{style:{color:"red"},children:l.userName}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("App api key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"api_key",value:t.api_key,type:"text",placeholder:n("Api key...","bit-integrations"),disabled:i}),e.jsx("div",{style:{color:"red"},children:l.api_key}),e.jsxs("small",{className:"d-blk mt-5",children:[n("To get Api key , Please Visit  ","bit-integrations"),e.jsx("a",{className:"btcd-link",href:"https://aplikasi.kirim.email/",target:"_blank",rel:"noreferrer",children:n("Kirim Email","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!i&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>I(t,s,u,L,v,A),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||m,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),m&&e.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:_,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{Y as default};
