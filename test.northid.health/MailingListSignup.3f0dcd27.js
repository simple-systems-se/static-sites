import{R as d}from"./chunks/index.717f88cd.js";/* empty css                              */import{u as l}from"./chunks/useApi.0abc6ef7.js";import{j as e}from"./chunks/jsx-runtime.ad781e20.js";function c(){const{postData:a,data:i,error:m}=l("/mailing-list/signup"),[s,t]=d.useState({emailAddress:"",name:""}),n=r=>{r.preventDefault(),a({emailAddress:s.emailAddress,name:s.name})};return e.exports.jsx("div",{children:e.exports.jsx("div",{className:"text-slate-300",children:e.exports.jsx("form",{onSubmit:n,children:e.exports.jsxs("div",{children:[e.exports.jsx("h2",{className:"my-1 text-lg text-white",children:"Join the Mailing List"}),e.exports.jsxs("div",{className:"grid gap-2 sm:flex",children:[e.exports.jsx("div",{children:e.exports.jsx("div",{className:"sm:align-center grid gap-2 sm:flex sm:h-[42px]",children:e.exports.jsx("input",{type:"text",value:s.name,onChange:r=>t({...s,name:r.target.value}),className:"required name h-[42px] flex-1 rounded px-2",required:!0,placeholder:"Name"})})}),e.exports.jsx("div",{className:"mc-field-group",children:e.exports.jsx("div",{className:"sm:align-center grid gap-2 sm:flex sm:h-[42px]",children:e.exports.jsx("input",{type:"email",value:s.emailAddress,onChange:r=>t({...s,emailAddress:r.target.value}),className:"required email h-[42px] flex-1 rounded px-2",required:!0,placeholder:"Email Address"})})}),e.exports.jsx("input",{type:"submit",defaultValue:"Subscribe",name:"subscribe",className:"button text-brand h-[42px] rounded border-brand border-2 !py-0 px-2 sm:ml-2"})]}),i&&e.exports.jsx("div",{className:"p-2 my-2 text-green bg-green-200 rounded border-green-500",children:e.exports.jsx("p",{className:"text-green-700",children:"You're in! Look for a confirmation email in your inbox."})})]})})})})}export{c as default};
