var M=Object.defineProperty;var k=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var T=(s,a,t)=>a in s?M(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,c=(s,a)=>{for(var t in a||(a={}))f.call(a,t)&&T(s,t,a[t]);if(k)for(var t of k(a))q.call(a,t)&&T(s,t,a[t]);return s};import{r as v,j as e,L as u,i as L}from"./main-80.js";import{m as _,_ as n,e as S,n as R,j as E,k as P,l as U}from"./bi.433.0.js";import{g as V,a as $,b as B}from"./bi.805.711.js";import{T as G}from"./bi.895.650.js";const O=(s,a,t)=>{const l=c({},a);l.field_map.splice(s,0,{}),t(c({},l))},H=(s,a,t)=>{const l=c({},a);l.field_map.length>1&&l.field_map.splice(s,1),t(c({},l))},I=(s,a,t,l)=>{const r=c({},t);r.field_map[a][s.target.name]=s.target.value,s.target.value==="custom"&&(r.field_map[a].customValue=""),l(c({},r))};function z({mauticConf:s,setMauticConf:a,formFields:t}){var i,N,y,F,A;const[l,r]=v.useState(!1),[o,p]=v.useState({show:!1,action:()=>{}}),[w,b]=v.useState({show:!1}),x=(d,g)=>{const j=c({},s);g==="tag"?V(s,a,r,b):g==="owner"&&$(s,a,r,b),p({show:g}),a(c({},j))},h=()=>{p({show:!1})},m=(d,g)=>{const j=c({},s);g==="tag"?j.tag=d?d.split(","):[]:g==="owner"&&(j.owner=d),a(c({},j))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(_,{checked:((i=s==null?void 0:s.tag)==null?void 0:i.length)>0||!1,onChange:d=>x(d,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:n("Add Tag","bit-integrations"),subTitle:n("Add tag to mautic contact","bit-integrations")}),e.jsx(_,{checked:(s==null?void 0:s.owner)||!1,onChange:d=>x(d,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:n("Add Contact Owner","bit-integrations"),subTitle:n("Add a Owner to mautic contact","bit-integrations")}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="tag",close:h,action:h,title:n("Tag Records","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:n("Add a tag to contacts","bit-integrations")}),l?e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(R,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.tag,options:(y=(N=s.default)==null?void 0:N.tags)==null?void 0:y.map(d=>({label:d.tagName,value:d.tagName.toString()})),onChange:d=>m(d,"tag"),customValue:!0}),e.jsx("button",{onClick:()=>V(s,a,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh CRM Tags","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="owner",close:h,action:h,title:n("Contact Owner","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:n("Add a owner to contacts","bit-integrations")}),l?e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(R,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.owner,options:(A=(F=s==null?void 0:s.default)==null?void 0:F.users)==null?void 0:A.map(d=>({label:d.label,value:d.id.toString()})),onChange:d=>m(d,"owner"),singleSelect:!0,selectOnClose:!0}),e.jsx("button",{onClick:()=>$(s,a,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Contact Owner","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]})]})]})}function D({i:s,formFields:a,field:t,mauticConf:l,setMauticConf:r}){var x,h,m;const o=((x=l==null?void 0:l.default)==null?void 0:x.fields)&&l.default.fields.filter(i=>i.required===!0)||[],p=((h=l==null?void 0:l.default)==null?void 0:h.fields)&&l.default.fields.filter(i=>i.required===!1)||[],w=L(E),{isPro:b}=w;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:i=>I(i,s,l,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:a==null?void 0:a.map(i=>i.type!=="file"&&e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),b?"":`(${n("Pro","bit-integrations")})`),children:b&&((m=P)==null?void 0:m.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),t.formField==="custom"&&e.jsx(G,{onChange:i=>U(i,s,l,r),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:a}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<o.length,name:"mauticField",value:s<o.length?o[s].fieldAlias||"":t.mauticField||"",onChange:i=>I(i,s,l,r),children:[e.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),s<o.length?e.jsx("option",{value:o[s].fieldAlias,children:o[s].fieldName},o[s].fieldAlias):p.map(({fieldAlias:i,fieldName:N})=>e.jsx("option",{value:i,children:N},i))]})]}),e.jsx("button",{onClick:()=>O(s,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>H(s,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function Y({formFields:s,handleInput:a,mauticConf:t,setMauticConf:l,isLoading:r,setIsLoading:o,setSnackbar:p,a:w}){var b;return e.jsxs(e.Fragment,{children:[r&&e.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),!r&&((b=t==null?void 0:t.default)==null?void 0:b.fields)&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>B(t,l,o,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh Mautic Fields","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Mautic Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((x,h)=>e.jsx(D,{i:h,field:x,mauticConf:t,formFields:s,setMauticConf:l,setSnackbar:p},`rp-m-${h+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>O(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(z,{mauticConf:t,setMauticConf:l,formFields:s})]})]})}export{Y as M};
