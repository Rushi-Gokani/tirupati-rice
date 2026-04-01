import{c as o,r as l,j as e,A as h,m as p}from"./index-ClFVI-Rt.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],u=o("chevron-down",x);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],j=o("chevron-up",m),v=({text:t,maxChars:n=100,className:a="",buttonClassName:r=""})=>{const[s,c]=l.useState(!1);if(!(t.length>n))return e.jsx("p",{className:a,children:t});const d=s?t:`${t.substring(0,n)}...`;return e.jsxs("div",{className:"flex flex-col items-start w-full",children:[e.jsx("div",{className:a,children:e.jsx(h,{initial:!1,mode:"wait",children:e.jsx(p.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:d},s?"expanded":"collapsed")})}),e.jsx("button",{onClick:i=>{i.preventDefault(),i.stopPropagation(),c(!s)},className:`mt-2 flex items-center gap-1 text-xs font-bold text-[#005e2a] hover:text-[#004d22] transition-colors uppercase tracking-wider ${r}`,children:s?e.jsxs(e.Fragment,{children:["Read Less ",e.jsx(j,{size:14})]}):e.jsxs(e.Fragment,{children:["Read More ",e.jsx(u,{size:14})]})})]})};export{u as C,v as E};
