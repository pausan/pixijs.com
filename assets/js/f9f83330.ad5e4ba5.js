"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2956],{23464:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(35166),s=n(67294),r=n(94184),i=n.n(r);const l="select_LFtK",o="label_iJQG",c="labelText_vfPa";var u=n(85893);const d=e=>e.map((e=>{let{value:t,label:n}=e;return(0,u.jsx)("option",{value:t,children:n},t)}));function p(e){let{className:t,label:n,labelClassName:a,selectedId:r,options:p,onValueChange:x,...h}=e;const m=(0,s.useCallback)((e=>{x(e.target.value)}),[x]),v=(e=>e.length>0&&Array.isArray(e[0].options))(p),f=(0,u.jsxs)("select",{className:i()(l,t),...h,value:r,onChange:m,children:[v&&(g=p,g.map((e=>{let{label:t,options:n}=e;return(0,u.jsx)("optgroup",{label:t,children:d(n)},t)}))),!v&&d(p)]});var g;return n?(0,u.jsxs)("label",{className:i()(o,a),children:[(0,u.jsx)("span",{className:c,children:n}),f]}):f}var x=n(53874),h=n(22124),m=n(16550);function v(e,t,n){const a=(0,m.k6)(),r=(0,s.useMemo)((()=>n(function(e){const t=new URLSearchParams(e);return Array.from(t.entries()).reduce(((e,t)=>{let[n,a]=t;return{...e,[n]:a}}),{})}(a.location.search))),[n,a.location.search]),i=(0,s.useRef)("function"==typeof e?e(r):e),l=(0,s.useMemo)((()=>({...i.current,...r})),[r]);return[l,function(e,n,s){void 0===n&&(n=!0),void 0===s&&(s=!1);const r="function"==typeof e?e(l):{...l,...e},o=Object.entries(r).reduce(((e,t)=>{let[n,a]=t;return a===i.current[n]?e:{...e,[n]:a}}),{}),c=new URLSearchParams(Object.entries(t(o))),u={pathname:location.pathname,search:c.toString()};s?n?a.push(u):a.replace(u):n?history.pushState(u,"",`${u.pathname}?${c.toString()}`):history.replaceState(u,"",`${u.pathname}?${c.toString()}`)}]}const f=(0,h.qhW)(h.kKJ,(function(e){const t=JSON.stringify(e);return btoa(t)})),g=(0,h.qhW)(h.kKJ,(function(e){try{return JSON.parse(atob(e))}catch{return}})),b=(0,h.rO9)({state:f}),y=(0,h.rO9)({state:g}),_="wrapper_GThw",j="nav_LVun",C="select_VJqz";var k=n(91262);function N(e){let{pixiVersion:t}=e;const[n,s]=(e=>{let{defaultExampleId:t}=e;return v((e=>{const{state:n,exampleId:a}=e;return{state:n??void 0,exampleId:n?"custom":a??t}}),b,y)})({defaultExampleId:x.L8,defaultPixiVersion:t.version}),{state:r,exampleId:i}=n,{indexCode:l,extraFiles:o,activeFile:c,usesWebWorkerLibrary:d,exampleOptions:h,handleOptionSelected:m,handleEditorCodeChanged:f}=(0,x.AQ)({urlState:r,selectedOptionId:i,setURLState:s,pixiVersion:t});return(0,u.jsx)("div",{className:_,children:(0,u.jsx)(k.Z,{children:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:j,children:(0,u.jsx)(p,{label:"Example:",labelClassName:C,selectedId:i,options:h,onValueChange:m})}),(0,u.jsx)(a.Z,{code:l,extraFiles:o,activeFile:c,pixiVersion:t.version,isPixiDevVersion:t.dev,isPixiWebWorkerVersion:d,onCodeChanged:f,mode:"fullscreen"})]})})})}},70686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),r=n(23464),i=n(67221);const l={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null},o=void 0,c={unversionedId:"playground/index",id:"version-7.x/playground/index",title:"index",description:"",source:"@site/versioned_docs/version-7.x/playground/index.md",sourceDirName:"playground",slug:"/playground/",permalink:"/7.x/playground/",draft:!1,editUrl:null,tags:[],version:"7.x",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null}},u={},d=[],p={toc:d};function x(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{pixiVersion:i,mdxType:"Playground"}))}x.isMDXComponent=!0},67221:e=>{e.exports=JSON.parse('{"versionLabel":"v7.x","version":"7.4.2","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v7.4.2","build":"https://pixijs.download/v7.4.2/pixi.min.js","docs":"https://pixijs.download/v7.4.2/docs/index.html","npm":"7.4.2","prerelease":false,"latest":false}')}}]);