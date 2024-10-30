var B=Object.defineProperty;var q=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var P=(l,e,c)=>e in l?B(l,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[e]=c,y=(l,e)=>{for(var c in e||(e={}))E.call(e,c)&&P(l,c,e[c]);if(q)for(var c of q(e))G.call(e,c)&&P(l,c,e[c]);return l};import{i as T,j as t,L as k}from"./main-80.js";import{j as U,m as H,_ as i,p as O,q as M,k as J,l as K,o as z,r as Q}from"./bi.433.0.js";import{b as W,r as X,d as Y,e as Z}from"./bi.455.812.js";import{T as I}from"./bi.895.650.js";function L({freshSalesConf:l,setFreshSalesConf:e}){var m;const c=T(U),{isPro:n}=c,d=(s,o)=>{const r=y({},l);o==="upsert"&&(s.target.checked?r.actions[o]=!0:delete r.actions[o]),e(y({},r))};return t.jsx(t.Fragment,{children:t.jsx("div",{className:"pos-rel d-flx w-8",children:l.moduleData.module!=="Product"&&t.jsx(H,{onChange:s=>d(s,"upsert"),checked:((m=l==null?void 0:l.actions)==null?void 0:m.upsert)||!1,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",isInfo:!n,title:`${i("Upsert Record","bit-integrations")} ${n?"":`(${i("Pro","bit-integrations")})`}`,subTitle:n?i("A record gets updated based on the unique identifier value, else a new record will be created","bit-integrations"):O(i("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.1.1",i("Upsert Record","bit-integrations"))})})})}function C({i:l,formFields:e,uploadFields:c,field:n,freshSalesConf:d,setFreshSalesConf:m}){var p,j,g,v,N,w,h;const s=d.moduleData.module,o=((g=(j=(p=d.default.modules)==null?void 0:p[s])==null?void 0:j.fields)==null?void 0:g.filter(a=>a.required===!0))||[],r=((w=(N=(v=d.default.modules)==null?void 0:v[s])==null?void 0:N.fields)==null?void 0:w.filter(a=>a.required===!1))||[],D=T(U),{isPro:x}=D;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:a=>M(a,l,d,m,c),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:e.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`))}),t.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),x?"":`(${i("Pro","bit-integrations")})`),children:x&&((h=J)==null?void 0:h.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`)))})]}),n.formField==="custom"&&t.jsx(I,{onChange:a=>K(a,l,d,m),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:e}),t.jsxs("select",{className:"btcd-paper-inp",disabled:l<o.length,name:"freshSalesFormField",value:l<o?o[l].label||"":n.freshSalesFormField||"",onChange:a=>M(a,l,d,m,c),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),l<o.length?t.jsx("option",{value:o[l].key,children:o[l].label},o[l].key):r.map(({key:a,label:F})=>t.jsx("option",{value:a,children:F},a))]})]}),t.jsx("div",{className:"flx integ-fld-wrp",children:l>=o.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>z(l,d,m,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>Q(l,d,m,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function S({formFields:l,freshSalesConf:e,setFreshSalesConf:c,handleInput:n,isLoading:d,setIsLoading:m,setSnackbar:s}){var o,r,D,x,p,j,g,v,N,w,h,a,F,_,$,V,R,A;return t.jsxs(t.Fragment,{children:[d&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.moduleData.module!==""&&((o=e.default.modules[e.moduleData.module])==null?void 0:o.required)&&!["Account","Product","Deal"].includes(e.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Account View:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"account_view_id",value:((r=e.moduleData)==null?void 0:r.account_view_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select Account View","bit-integrations")}),((D=e==null?void 0:e.default)==null?void 0:D.accountViews)&&e.default.accountViews.map((u,b)=>t.jsx("option",{value:u.value,children:u.label},`pipedrive-m-${b+20}`))]}),t.jsx("button",{onClick:()=>W(e,c,m,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh views","bit-integrations")}'`},type:"button",disabled:d,children:"↻"}),t.jsx("br",{}),t.jsx("br",{})]}),e.moduleData.module!==""&&((x=e.default.modules[e.moduleData.module])==null?void 0:x.required)&&!["Account","Product","Deal"].includes(e.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Account:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"account_id",value:((p=e.moduleData)==null?void 0:p.account_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select Account","bit-integrations")}),((j=e==null?void 0:e.default)==null?void 0:j.accounts)&&e.default.accounts.map((u,b)=>t.jsx("option",{value:u.value,children:u.label},`pipedrive-m-${b+20}`))]}),t.jsx("button",{onClick:()=>X(e,c,m,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Accounts","bit-integrations")}'`},type:"button",disabled:d,children:"↻"}),t.jsx("br",{}),t.jsx("br",{})]}),e.moduleData.module!==""&&((g=e.default.modules[e.moduleData.module])==null?void 0:g.required)&&!["Account","Product","Contact"].includes(e.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Contact View:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"contact_view_id",value:((v=e.moduleData)==null?void 0:v.contact_view_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select Contact View","bit-integrations")}),((N=e==null?void 0:e.default)==null?void 0:N.contactViews)&&e.default.contactViews.map((u,b)=>t.jsx("option",{value:u.value,children:u.label},`pipedrive-m-${b+20}`))]}),t.jsx("button",{onClick:()=>Y(e,c,m,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh views","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),e.moduleData.module!==""&&((w=e.default.modules[e.moduleData.module])==null?void 0:w.required)&&!["Account","Product","Contact"].includes(e.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Contact:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"contact_id",value:((h=e.moduleData)==null?void 0:h.contact_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select Contact","bit-integrations")}),((a=e==null?void 0:e.default)==null?void 0:a.contacts)&&e.default.contacts.map((u,b)=>t.jsx("option",{value:u.value,children:u.label},`pipedrive-m-${b+20}`))]}),t.jsx("button",{onClick:()=>Z(e,c,m,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Contacts","bit-integrations")}'`},type:"button",disabled:d,children:"↻"}),t.jsx("br",{}),t.jsx("br",{})]}),e.moduleData.module&&(($=(_=(F=e.default)==null?void 0:F.modules)==null?void 0:_[e.moduleData.module])==null?void 0:$.fields)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("FreshSales Fields","bit-integrations")})})]}),e.field_map.map((u,b)=>t.jsx(C,{i:b,field:u,freshSalesConf:e,formFields:l,setFreshSalesConf:c,setSnackbar:s},`pipedrive-m-${b+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>z(e.field_map.length,e,c,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(L,{freshSalesConf:e,setFreshSalesConf:c,isLoading:d,setIsLoading:m,setSnackbar:s})]}),e.moduleData.module&&!((A=(R=(V=e.default)==null?void 0:V.modules)==null?void 0:R[e.moduleData.module])!=null&&A.fields)&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}function ct({formID:l,formFields:e,handleInput:c,freshSalesConf:n,setFreshSalesConf:d,isLoading:m,setIsLoading:s,setSnackbar:o}){return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Module:","bit-integrations")}),t.jsxs("select",{onChange:c,name:"module",value:n.moduleData.module,className:"btcd-paper-inp w-5",disabled:m,children:[t.jsx("option",{value:"",children:i("Select Module","bit-integrations")}),Object.keys(n.default.modules).map(r=>t.jsx("option",{value:r,children:r},r))]}),t.jsx("br",{}),t.jsxs("div",{children:[n.moduleData.module!=="Account"&&t.jsx("div",{className:"btcd-hr"}),t.jsx(S,{formFields:e,freshSalesConf:n,setFreshSalesConf:d,handleInput:c,isLoading:m,setIsLoading:s,setSnackbar:o})]}),t.jsx("br",{})]})}export{ct as F};
