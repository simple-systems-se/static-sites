import{r as o}from "./index.717f88cd.js";const d="https://api.northid.health",f={credentials:"include"},S= c=>{const[l,u]=o.exports.useState(null),[i,n]=o.exports.useState(!1),[p,s]=o.exports.useState(null),a=async e=>{s(null),n(!0);try{const t=await fetch(`${d}${c}`,{...f,...e}),r=await t.json();t.ok?u(r):s(r.ErrMsg)}catch(t){s(t)}finally{n(!1)}};return{data:l,isLoading:i,error:p,fetchData:()=>a(),postData: e=>a({method:"POST",body:JSON.stringify(e)}),uploadFile: e=>{const t=new FormData;return t.append("upload",e),a({method:"POST",body:t})}}};export{S as u};
