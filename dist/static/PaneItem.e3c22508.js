import{a5 as u,aU as k,aV as _,am as D,aW as E,ad as O,aX as R,z as o,aY as T,B as r,aZ as j,V as M,a_ as F,a$ as L,b0 as W,b1 as B}from"./main.52b4df71.js";function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},i.apply(this,arguments)}const U=(n,e)=>({title:u.createElement("em",null,"No schema found for type ",u.createElement("code",null,e)),subtitle:u.createElement("em",null,"Document: ",u.createElement("code",null,n)),media:_});function V(n){const{layout:e,value:t}=n;return u.createElement(k,i({},U(t._id,t._type),{layout:e}))}function w(n,e,t){return n===!1?!1:n||e&&e.icon||t||!1}function X(n){const{icon:e,id:t,layout:s="default",pressed:m,schemaType:a,selected:l,title:d,value:c}=n,C=D(),f=E(),{ChildLink:p}=O(),h=R(t),v=Boolean(a&&a.name&&C.get(a.name)),[y,P]=o.exports.useState(!1),g=o.exports.useMemo(()=>c&&T(c)?!a||!v?r(V,{value:c}):r(j,{documentPreviewStore:f,icon:w(e,a,W),layout:s,schemaType:a,value:c,presence:h}):r(k,{status:r(M,{muted:!0,children:r(F,{})}),icon:w(e,a,B),layout:s,title:d}),[f,v,e,s,a,d,c,h]),b=o.exports.useMemo(()=>o.exports.forwardRef(function(I,S){return r(p,{...I,childId:t,ref:S})}),[p,t]),x=o.exports.useCallback(()=>P(!0),[]);return o.exports.useEffect(()=>P(!1),[l]),o.exports.useMemo(()=>r(L,{__unstable_focusRing:!0,as:b,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:x,pressed:m,selected:l||y,tone:"inherit",children:g}),[y,x,b,m,g,l])}export{X as P};