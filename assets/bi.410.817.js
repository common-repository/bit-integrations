var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(r,i,e)=>i in r?w(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e,o=(r,i)=>{for(var e in i||(i={}))I.call(i,e)&&_(r,e,i[e]);if(y)for(var e of y(i))L.call(i,e)&&_(r,e,i[e]);return r};import{f as M,j as t,L as R}from"./main-955.js";import{e as S,_ as s}from"./bi.223.0.js";import{a as k,M as q,b as O}from"./bi.864.3.js";import{r as T,a as $}from"./bi.353.816.js";import{T as B}from"./bi.300.11.js";import{a6 as E}from"./bi.326.431.js";function G({i:r,formFields:i,field:e,sendPulseConf:l,setSendPulseConf:d}){var g,v,N,F;const n=e.required,j=((g=l==null?void 0:l.default)==null?void 0:g.fields)&&Object.values((v=l==null?void 0:l.default)==null?void 0:v.fields).filter(a=>!a.required),u=M(S),{isPro:x}=u,m=a=>{const c=o({},l);c.field_map.splice(a,0,{}),d(c)},p=a=>{const c=o({},l);c.field_map.length>1&&c.field_map.splice(a,1),d(c)},h=(a,c)=>{const b=o({},l);b.field_map[c][a.target.name]=a.target.value,a.target.value==="custom"&&(b.field_map[c].customValue=""),d(b)},V=(a,c)=>{const b=o({},l);b.field_map[c].customValue=a.target.value,d(b)};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>h(a,r),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),t.jsx("optgroup",{label:s("List Fields","bit-integrations"),children:i==null?void 0:i.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),t.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`${s("General Smart Codes","bit-integrations")} ${x?"":`(${s("Pro","bit-integrations")})`}`,children:x&&((N=k)==null?void 0:N.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.formField==="custom"&&t.jsx(q,{onChange:a=>V(a,r),label:s("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:s("Custom Value","bit-integrations")}),t.jsxs("select",{className:"btcd-paper-inp",name:"sendPulseField",value:e.sendPulseField||"",onChange:a=>h(a,r),disabled:n,children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),n?((F=l==null?void 0:l.default)==null?void 0:F.fields)&&Object.values(l.default.fields).map(a=>t.jsx("option",{value:a.fieldValue,children:a.fieldName},`${a.fieldValue}`)):j&&j.map(a=>t.jsx("option",{value:a.fieldValue,children:a.fieldName},`${a.fieldValue}`))]})]}),!n&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>m(r),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),t.jsx("button",{onClick:()=>p(r),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(B,{})})]})]})}function U({formFields:r,sendPulseConf:i,setSendPulseConf:e,isLoading:l,setIsLoading:d,setSnackbar:n}){var u,x;const j=m=>{const p=m.target.value,h=o({},i);p&&(h.listId=p),$(h,e,d,n)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:s("List:","bit-integrations")}),t.jsxs("select",{value:i==null?void 0:i.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:j,children:[t.jsx("option",{value:"",children:s("Select List","bit-integrations")}),((u=i==null?void 0:i.default)==null?void 0:u.sendPulseLists)&&Object.keys(i.default.sendPulseLists).map(m=>t.jsx("option",{value:i.default.sendPulseLists[m].listId,children:i.default.sendPulseLists[m].listName},`${m+1}`))]}),t.jsx("button",{onClick:()=>T(i,e,d,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh SendPulse list"'},type:"button",disabled:l,children:"↻"}),t.jsx("br",{}),t.jsx("br",{}),l&&t.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:s("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>$(i,e,d,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh SendPulse Field","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),((i==null?void 0:i.listId)||((x=i==null?void 0:i.default)==null?void 0:x.fields))&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("List Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("SendPulse Fields","bit-integrations")})})]}),i.field_map.map((m,p)=>t.jsx(G,{i:p,field:m,sendPulseConf:i,formFields:r,setSendPulseConf:e},`SendPulse-m-${p+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>O(i.field_map.length,i,e),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(E,{note:s("Custom Fields are available exclusively in Bit Integration Pro starting from version 2.2.0.","bit-integrations")})]})]})}export{U as S};