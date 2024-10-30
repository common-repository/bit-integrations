var M=Object.defineProperty;var v=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=(t,l,a)=>l in t?M(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,p=(t,l)=>{for(var a in l||(l={}))A.call(l,a)&&y(t,a,l[a]);if(v)for(var a of v(l))R.call(l,a)&&y(t,a,l[a]);return t};import{r as $,j as e,L as w,i as I}from"./main-80.js";import{m as V,_ as i,e as q,n as _,H as T,j as P,k as E}from"./bi.433.0.js";import{g as h,r as u}from"./bi.6.844.js";const k=(t,l,a)=>{const c=p({},l);c.field_map.splice(t,0,{}),a(p({},c))},H=(t,l,a)=>{const c=p({},l);c.field_map.length>1&&c.field_map.splice(t,1),a(p({},c))},F=(t,l,a,c)=>{const s=p({},a);s.field_map[l][t.target.name]=t.target.value,t.target.value==="custom"&&(s.field_map[l].customValue=""),c(p({},s))},S=(t,l,a,c,s)=>{const d=p({},a);d.field_map[l][s]=t.target.value,c(p({},d))};function B({suiteDashConf:t,setSuiteDashConf:l,loading:a,setLoading:c}){var j,r;const[s,d]=$.useState({show:!1,action:()=>{}}),m=(n,o)=>{var N;const x=p({},t);o==="company"&&((N=n.target)!=null&&N.checked?(x.companies===void 0&&(x.companies=h(t,l,c)),x.actions.company=!0):(d({show:!1}),delete x.actions.company)),d({show:o}),l(p({},x))},b=()=>{d({show:!1})},g=(n,o)=>{l(x=>(x[o]=n,x))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[t.actionName==="contact"&&e.jsx(V,{checked:((j=t==null?void 0:t.selectedCompany)==null?void 0:j.length)||!1,onChange:n=>m(n,"company"),className:"wdt-200 mt-4 mr-2",value:"company",title:i("Add Company","bit - integrations"),subTitle:i("Add Company")}),e.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:s.show==="company",close:b,action:b,title:i("Company","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Company","bit-integrations")}),a.companies?e.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(_,{options:(r=t==null?void 0:t.companies)==null?void 0:r.map(n=>({label:n,value:n})),className:"msl-wrp-options",defaultValue:t.selectedCompany,onChange:n=>g(n,"selectedCompany"),singleSelect:!0}),e.jsx("button",{onClick:()=>h(t,l,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Companies","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}function G({field:t,index:l,conf:a,setConf:c,fieldValue:s,fieldLabel:d,className:m}){return e.jsx(T,{onChange:b=>S(b,l,a,c,s),label:i(d,"bit-integrations"),className:m,type:"text",value:t[s],placeholder:i(d,"bit-integrations")})}function O({i:t,formFields:l,field:a,suiteDashConf:c,setSuiteDashConf:s}){var r;const d=["owner","pipeline","stage","primaryContact","type","tags","lostReason","source","status","priority","currency","isActive","primaryCompany"],m=(c==null?void 0:c.suiteDashFields)&&(c==null?void 0:c.suiteDashFields.filter(n=>n.required===!0&&!d.includes(n.key)))||[],b=(c==null?void 0:c.suiteDashFields)&&(c==null?void 0:c.suiteDashFields.filter(n=>n.required===!1&&!d.includes(n.key)))||[],g=I(P),{isPro:j}=g;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:n=>F(n,t,c,s),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:l==null?void 0:l.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),j?"":`(${i("Pro","bit-integrations")})`),children:j&&((r=E)==null?void 0:r.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),a.formField==="custom"&&e.jsx(G,{field:a,index:t,conf:c,setConf:s,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<m.length,name:"suiteDashFormField",value:t<m.length?m[t].key||"":a.suiteDashFormField||"",onChange:n=>F(n,t,c,s),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t<m.length?e.jsx("option",{value:m[t].key,children:m[t].label},m[t].key):b.map(({key:n,label:o})=>e.jsx("option",{value:n,children:o},n))]})]}),t>=m.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>k(t,c,s),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>H(t,c,s),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function L({formFields:t,suiteDashConf:l,setSuiteDashConf:a,loading:c,setLoading:s,isLoading:d,setIsLoading:m,setSnackbar:b}){const g=r=>{const n=p({},l),{name:o}=r.target;r.target.value!==""?(n[o]=r.target.value,u(n,a,m,b)):(delete n[o],delete n.actionId),a(n)},j=(r,n)=>{a(o=>(o[n]=r,o))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:g,name:"actionName",value:l.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select an action","bit-integrations")}),e.jsx("option",{value:"contact","data-action_name":"contact",children:i("Create Contact","bit-integrations")})]}),d&&e.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.actionName==="contact"&&!d&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Role:","bit-integrations")}),e.jsx(_,{options:["Lead","Prospect","Client"].map(r=>({label:r,value:r})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedRole,onChange:r=>j(r,"selectedRole"),singleSelect:!0})]})]}),l.actionName&&!d&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>u(l,a,m,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh fields","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("SuiteDash Fields","bit-integrations")})})]}),l==null?void 0:l.field_map.map((r,n)=>e.jsx(O,{i:n,field:r,suiteDashConf:l,formFields:t,setSuiteDashConf:a,setSnackbar:b},`rp-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>k(l.field_map.length,l,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(B,{suiteDashConf:l,setSuiteDashConf:a,formFields:t,loading:c,setLoading:s})]})]})}export{L as S};
