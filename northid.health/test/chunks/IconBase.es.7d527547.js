import{r as i,R as u}from "./index.717f88cd.js";const j=i.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var E=Object.defineProperty,a=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e, o, r)=>o in e?E(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,m=(e, o)=>{for(var r in o||(o={}))w.call(o,r)&&g(e,r,o[r]);if(a)for(var r of a(o))v.call(o,r)&&g(e,r,o[r]);return e},p=(e, o)=>{var r={};for(var l in e)w.call(e,l)&&o.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&a)for(var l of a(e))o.indexOf(l)<0&&v.call(e,l)&&(r[l]=e[l]);return r};const P=i.exports.forwardRef((e, o)=>{const r=e,{alt:l,color:n,size:t,weight:c,mirrored:d,children:h,weights:x}=r,b=p(r,["alt","color","size","weight","mirrored","children","weights"]),s=i.exports.useContext(j),{color:y="currentColor",size:f,weight:O="regular",mirrored:z=!1}=s,C=p(s,["color","size","weight","mirrored"]);return u.createElement("svg",m(m({ref:o,xmlns:"http://www.w3.org/2000/svg",width:t??f,height:t??f,fill:n??y,viewBox:"0 0 256 256",transform:d||z?"scale(-1, 1)":void 0},C),b),!!l&&u.createElement("title",null,l),h,x.get(c??O))});P.displayName="IconBase";export{P};
