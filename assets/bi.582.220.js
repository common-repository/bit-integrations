var D=Object.defineProperty;var N=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(a,i,s)=>i in a?D(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,b=(a,i)=>{for(var s in i||(i={}))K.call(i,s)&&_(a,s,i[s]);if(N)for(var s of N(i))L.call(i,s)&&_(a,s,i[s]);return a};import{r as x,j as e}from"./main-80.js";import{B as E}from"./bi.29.687.js";import{_ as t,L as k,N as P,b as B}from"./bi.433.0.js";import{r as F}from"./bi.396.802.js";import{T as f,t as I}from"./bi.717.703.js";function H({formID:a,directIqConf:i,setDirectIqConf:s,step:g,setstep:A,setSnackbar:j,isInfo:l,isLoading:o,setIsLoading:u}){const{directIq:n}=I,[d,v]=x.useState(!1),[m,y]=x.useState({name:"",client_secret:""}),[S,z]=x.useState(!1),w=()=>{const r=b({},i);if(!r.name||!r.client_secret){y({name:r.name?"":t("Integration name can't be empty","bit-integrations"),client_id:r.client_id?"":t("Access Client Id can't be empty","bit-integrations"),client_secret:r.client_secret?"":t("Access Client Secret Key can't be empty","bit-integrations")});return}u("auth");const h={client_id:r.client_id,client_secret:r.client_secret};B(h,"directIq_authorize").then(c=>{c!=null&&c.success&&(v(!0),j({show:!0,msg:t("Authorized Successfully","bit-integrations")})),z(!0),u(!1)})},p=r=>{const h=b({},i),c=b({},m);c[r.target.name]="",h[r.target.name]=r.target.value,y(c),s(h)},C=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(i,s,u,j),A(2)},T=`
            <h4>${t("Get client id and client secret key","bit-integrations")}</h4>
            <ul>
                <li>${t("First go to your DirectIq dashboard.","bit-integrations")}</li>
                <li>${t('Click "Integrations", Then click "API Keys"',"bit-integrations")}</li>
            </ul>`;return e.jsxs("div",{className:"btcd-stp-page",style:{width:g===1&&900,height:g===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(f,{title:"DirectIQ",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(f,{title:"DirectIQ",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3 wdt-200",children:e.jsx("b",{children:t("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:i.name,type:"text",placeholder:t("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.name}),e.jsx("div",{className:"mt-3 wdt-200",children:e.jsx("b",{children:t("Access Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"client_id",value:i.client_id,type:"text",placeholder:t("Access client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.client_id}),e.jsx("div",{className:"mt-3 wdt-250",children:e.jsx("b",{children:t("Access Client Secret Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"client_secret",value:i.client_secret,type:"text",placeholder:t("Access Client Secret Key...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.client_secret}),e.jsxs("small",{className:"d-blk mt-3",children:[t("To Get Client Id and Client Secret Key, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://app.directiq.com/integrations/apikeys",target:"_blank",rel:"noreferrer",children:t("DirectIQ API Token","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),o==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),"Checking Client Secret Key!!!"]}),S&&!d&&!o&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, Client Secret key is invalid"]}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:w,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||o,children:[d?t("Authorized ✔","bit-integrations"):t("Authorize","bit-integrations"),o&&e.jsx(k,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>C(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[t("Next","bit-integrations"),e.jsx(E,{className:"ml-1 rev-icn"})]})]}),e.jsx(P,{note:T})]})}export{H as default};
