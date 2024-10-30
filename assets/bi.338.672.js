var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(a,t,i)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,f=(a,t)=>{for(var i in t||(t={}))D.call(t,i)&&_(a,i,t[i]);if(m)for(var i of m(t))S.call(t,i)&&_(a,i,t[i]);return a};import{_ as c,b as u,z as I,p as R}from"./bi.433.0.js";const z=(a,t,i,d,o,e,r,s,h)=>{let g=f({},t);if(r){const n=f({},s);n[a.target.name]="",h(f({},n))}switch(g[a.target.name]=a.target.value,a.target.name){case"spreadsheetId":g=$(g,d,i,o,e);break;case"worksheetName":g=F(g,d,i,o,e);break}i(f({},g))},$=(a,t,i,d,o)=>{var r,s,h,g,n,p,l,k,w;const e=I(a);return e.worksheetName="",e.headerRow="A1",e.field_map=[{formField:"",googleSheetField:""}],(s=(r=e==null?void 0:e.default)==null?void 0:r.worksheets)!=null&&s[a.spreadsheetId]?Object.keys((g=(h=e==null?void 0:e.default)==null?void 0:h.worksheets)==null?void 0:g[a.spreadsheetId]).length===1&&(e.worksheetName=(p=(n=e==null?void 0:e.default)==null?void 0:n.worksheets)==null?void 0:p[a.spreadsheetId][0].properties.title,(w=(k=(l=e==null?void 0:e.default)==null?void 0:l.worksheets)==null?void 0:k.headers)!=null&&w[e.worksheetName]||b(t,e,i,d,o)):W(t,e,i,d,o),e},F=(a,t,i,d,o)=>{var r,s,h;const e=f({},a);return e.headerRow="A1",e.field_map=[{formField:"",googleSheetField:""}],(h=(s=(r=e==null?void 0:e.default)==null?void 0:r.worksheets)==null?void 0:s.headers)!=null&&h[a.worksheetName]||b(t,e,i,d,o),e},H=(a,t,i,d,o)=>{d(!0);const e={formID:a,id:t.id,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};u(e,"gsheet_refresh_spreadsheets").then(r=>{if(r&&r.success){const s=f({},t);s.default||(s.default={}),r.data.spreadsheets&&(s.default.spreadsheets=r.data.spreadsheets),r.data.tokenDetails&&(s.tokenDetails=r.data.tokenDetails),o({show:!0,msg:c("Spreadsheet refreshed","bit-integrations")}),i(f({},s))}else r&&r.data&&r.data.data||!r.success&&typeof r.data=="string"?o({show:!0,msg:R(c("Spreadsheet refresh failed Cause: %s. please try again","bit-integrations"),r.data.data||r.data)}):o({show:!0,msg:c("Spreadsheet refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},W=(a,t,i,d,o)=>{const{spreadsheetId:e}=t;if(!e)return;d(!0);const r={formID:a,spreadsheetId:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};u(r,"gsheet_refresh_worksheets").then(s=>{if(s&&s.success){const h=f({},t);s.data.worksheets&&(h.default.worksheets||(h.default.worksheets={}),h.default.worksheets[e]=s.data.worksheets),s.data.tokenDetails&&(h.tokenDetails=s.data.tokenDetails),o({show:!0,msg:c("Worksheets refreshed","bit-integrations")}),i(f({},h))}else o({show:!0,msg:c("Worksheets refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},b=(a,t,i,d,o)=>{const{spreadsheetId:e,worksheetName:r,header:s,headerRow:h}=t;if(!e&&!r&&!s&&!h)return;d(!0);const g={formID:a,spreadsheetId:e,worksheetName:r,header:s,headerRow:h,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};u(g,"gsheet_refresh_worksheet_headers").then(n=>{var p;if(n&&n.success){const l=f({},t);((p=n.data.worksheet_headers)==null?void 0:p.length)>0?(l.default.headers||(l.default.headers={}),l.default.headers[e]||(l.default.headers[e]={}),l.default.headers[e][r]||(l.default.headers[e][r]={}),l.default.headers[e][r][h]=n.data.worksheet_headers,n.data.tokenDetails&&(l.tokenDetails=n.data.tokenDetails),o({show:!0,msg:c("Worksheet Headers refreshed","bit-integrations")})):o({show:!0,msg:c("No Worksheet headers found. Try changing the header row number or try again","bit-integrations")}),n.data.tokenDetails&&(l.tokenDetails=n.data.tokenDetails),i(f({},l))}else o({show:!0,msg:c("Worksheet Headers refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},q=(a,t,i,d,o,e)=>{if(!a.clientId||!a.clientSecret){i({clientId:a.clientId?"":c("Client Id can't be empty","bit-integrations"),clientSecret:a.clientSecret?"":c("Secret key can't be empty","bit-integrations")});return}o(!0);const s=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/drive&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}&client_id=${a.clientId}`,h=window.open(s,"googleSheet","width=400,height=609,toolbar=off"),g=setInterval(()=>{if(h.closed){clearInterval(g);let n={},p=!1;const l=localStorage.getItem("__googleSheet");if(l&&(p=!0,n=JSON.parse(l),localStorage.removeItem("__googleSheet")),!n.code||n.error||!n||!p){const k=n.error?`Cause: ${n.error}`:"";e({show:!0,msg:`${c("Authorization Failed","bit-integrations")} ${k}. ${c("please try again","bit-integrations")}`}),o(!1)}else{const k=f({},a);k.accountServer=n["accounts-server"],v(n,k,t,d,o,e)}}},500)},v=(a,t,i,d,o,e)=>{const r=f({},a);r.clientId=t.clientId,r.clientSecret=t.clientSecret,r.redirectURI=`${btcbi.api.base}/redirect`,u(r,"gsheet_generate_token").then(s=>s).then(s=>{if(s&&s.success){const h=f({},t);h.tokenDetails=s.data,i(h),d(!0),e({show:!0,msg:c("Authorized Successfully","bit-integrations")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?e({show:!0,msg:`${c("Authorization failed Cause:","bit-integrations")}${s.data.data||s.data}. ${c("please try again","bit-integrations")}`}):e({show:!0,msg:c("Authorization failed. please try again","bit-integrations")});o(!1)})},E=a=>!((a.field_map?a.field_map.filter(i=>!i.formField&&!i.googleSheetField):[]).length>0);export{W as a,b,q as c,E as d,z as h,H as r};
