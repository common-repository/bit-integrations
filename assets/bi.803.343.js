var M=Object.defineProperty;var j=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var v=(o,s,a)=>s in o?M(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,N=(o,s)=>{for(var a in s||(s={}))R.call(s,a)&&v(o,a,s[a]);if(j)for(var a of j(s))T.call(s,a)&&v(o,a,s[a]);return o};import{r as m,j as t,u as z,o as _,f as F}from"./main-955.js";import{x as B,v as E}from"./bi.326.431.js";import{_ as e,s as G,c as P,e as q}from"./bi.223.0.js";import{S as U}from"./bi.951.13.js";import{S as H}from"./bi.496.907.js";import{I as O,s as $}from"./bi.864.3.js";import{L as J,h as K,c as Q}from"./bi.557.758.js";import{B as V}from"./bi.687.700.js";import{T as S,t as W}from"./bi.701.706.js";import"./bi.696.9.js";import"./bi.300.11.js";import"./bi.283.14.js";import"./bi.282.27.js";import"./bi.12.703.js";/* empty css          */import"./bi.991.663.js";import"./bi.355.664.js";function X({formID:o,learnDashConf:s,setLearnDashConf:a,step:u,setStep:k,isLoading:b,setIsLoading:d,setSnackbar:x}){const[l,y]=m.useState(!1),[c,p]=m.useState(!1),{learnDash:i}=W,h=()=>{d("auth"),P({},"learnDash_authorize").then(n=>{n!=null&&n.success&&(y(!0),x({show:!0,msg:e("Connected with LearnDash Successfully","bit-integrations")})),d(!1),p(!0)})},L=n=>{const g=E(s);g[n.target.name]=n.target.value,a(g)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(S,{title:"LearnDash",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(S,{title:"LearnDash",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:L,name:"name",value:s.name,type:"text",placeholder:e("Integration Name...","bit-integrations")}),b==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(B,{size:25,clr:"#022217",className:"mr-2"}),"Checking if LearnDash is active!!!"]}),c&&!l&&!b&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),G(e("%s plugin must be activated to integrate with Bit Integrations","bit-integrations"),"LearnDash")]}),!l&&t.jsx("button",{onClick:h,className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",children:e("Connect","bit-integrations")}),l&&t.jsxs("button",{onClick:()=>k(2),className:"btn btcd-btn-lg purple sh-sm flx mt-5",type:"button",disabled:!l,children:[e("Next","bit-integrations"),t.jsx(V,{className:"ml-1 rev-icn"})]})]})}function ge({formFields:o,setFlow:s,flow:a,allIntegURL:u,isInfo:k,edit:b}){const d=z(),{formID:x}=_(),l=F(q),{siteURL:y}=l,[c,p]=m.useState(!1),[i,h]=m.useState(1),[L,n]=m.useState({show:!1}),g=[{key:"1",label:e("Create Group","bit-integrations")},{key:"2",label:e("Add the user to a group pro","bit-integrations")},{key:"3",label:e("Enroll the user in a course","bit-integrations")},{key:"4",label:e("Make the user the leader of group","bit-integrations")},{key:"5",label:e("Mark a course complete for the user","bit-integrations")},{key:"6",label:e("Mark a lesson complete for the user","bit-integrations")},{key:"7",label:e("Mark a lesson not complete for the user pro","bit-integrations")},{key:"8",label:e("Mark a topic complete for the user","bit-integrations")},{key:"9",label:e("Mark a topic not complete for the user pro","bit-integrations")},{key:"10",label:e("Remove the Leader from a group and its children pro","bit-integrations")},{key:"11",label:e("Remove the user from a group pro","bit-integrations")},{key:"12",label:e("Remove the user from a group and its children pro","bit-integrations")},{key:"13",label:e("Reset the users attempts for a quiz pro","bit-integrations")},{key:"14",label:e("Reset the users progress in a course pro","bit-integrations")},{key:"16",label:e("Send an email to the users group leaders","bit-integrations")},{key:"17",label:e("Unenroll the user from a course pro","bit-integrations")}],w=[{key:"1",label:e("Do not add group leader role","bit-integrations")},{key:"2",label:e("Add the role to their exiting role","bit-integrations")},{key:"3",label:e("Replace their existing role(s) with the Group Leader role","bit-integrations")}],A=[{key:"1",label:e("Do nothing","bit-integrations")},{key:"2",label:e("Add the role to their exiting role","bit-integrations")},{key:"3",label:e("Replace their existing role(s) with the Group Leader role","bit-integrations")}],C=[{key:"title",label:"Title",required:!0}],[r,f]=m.useState({name:"LearnDash",type:"LearnDash",mainAction:"",courseId:"",domainName:y,field_map:[{formField:"",learnDeshFormField:""}],allActions:g,groupUserRole:w,groupOfLeader4:A,createGroupFields:C,actions:{}}),I=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),r.mainAction==="1"&&!Q(r)){n({show:!0,msg:e("Please map fields to continue.","bit-integrations")});return}r.mainAction!==""&&h(3)};return t.jsxs("div",{children:[t.jsx(U,{snack:L,setSnackbar:n}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(H,{step:3,active:i})}),t.jsx(X,{formID:x,learnDashConf:r,setLearnDashConf:f,step:i,setStep:h,isLoading:c,setIsLoading:p,setSnackbar:n}),t.jsxs("div",{className:"btcd-stp-page",style:N({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(J,{formFields:o,handleInput:D=>K(D,r,f),learnDashConf:r,setLearnDashConf:f,isLoading:c,setIsLoading:p,setSnackbar:n,allIntegURL:u,isInfo:k,edit:b}),r.mainAction!=="16"&&t.jsxs("button",{onClick:()=>I(),disabled:!r.mainAction||c,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations")," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.mainAction!=="16"&&t.jsx(O,{step:i,saveConfig:()=>$({flow:a,setFlow:s,allIntegURL:u,navigate:d,conf:r,setIsLoading:p,setSnackbar:n}),isLoading:c,dataConf:r,setDataConf:f,formFields:o})]})}export{ge as default};
