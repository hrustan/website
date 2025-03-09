(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const yt=!1,mt=(t,e)=>t===e,pt=Symbol("solid-track"),F={equals:mt};let rt=at;const v=1,D=2,lt={owned:null,cleanups:null,context:null,owner:null};var y=null;let K=null,bt=null,g=null,p=null,C=null,V=0;function k(t,e){const n=g,o=y,s=t.length===0,i=e===void 0?o:e,l=s?lt:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=s?t:()=>t(()=>O(()=>L(l)));y=l,g=null;try{return I(r,!0)}finally{g=n,y=o}}function M(t,e){e=e?Object.assign({},F,e):F;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},o=s=>(typeof s=="function"&&(s=s(n.value)),ut(n,s));return[ft.bind(n),o]}function E(t,e,n){const o=J(t,e,!1,v);P(o)}function wt(t,e,n){rt=$t;const o=J(t,e,!1,v);o.user=!0,C?C.push(o):P(o)}function xt(t,e,n){n=n?Object.assign({},F,n):F;const o=J(t,e,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,P(o),ft.bind(o)}function O(t){if(g===null)return t();const e=g;g=null;try{return t()}finally{g=e}}function At(t){wt(()=>O(t))}function ct(t){return y===null||(y.cleanups===null?y.cleanups=[t]:y.cleanups.push(t)),t}function ft(){if(this.sources&&this.state)if(this.state===v)P(this);else{const t=p;p=null,I(()=>U(this),!1),p=t}if(g){const t=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(t)):(g.sources=[this],g.sourceSlots=[t]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function ut(t,e,n){let o=t.value;return(!t.comparator||!t.comparator(o,e))&&(t.value=e,t.observers&&t.observers.length&&I(()=>{for(let s=0;s<t.observers.length;s+=1){const i=t.observers[s],l=K&&K.running;l&&K.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?p.push(i):C.push(i),i.observers&&ht(i)),l||(i.state=v)}if(p.length>1e6)throw p=[],new Error},!1)),e}function P(t){if(!t.fn)return;L(t);const e=V;_t(t,t.value,e)}function _t(t,e,n){let o;const s=y,i=g;g=y=t;try{o=t.fn(e)}catch(l){return t.pure&&(t.state=v,t.owned&&t.owned.forEach(L),t.owned=null),t.updatedAt=n+1,dt(l)}finally{g=i,y=s}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?ut(t,o):t.value=o,t.updatedAt=n)}function J(t,e,n,o=v,s){const i={fn:t,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:y,context:y?y.context:null,pure:n};return y===null||y!==lt&&(y.owned?y.owned.push(i):y.owned=[i]),i}function X(t){if(t.state===0)return;if(t.state===D)return U(t);if(t.suspense&&O(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<V);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===v)P(t);else if(t.state===D){const o=p;p=null,I(()=>U(t,e[0]),!1),p=o}}function I(t,e){if(p)return t();let n=!1;e||(p=[]),C?n=!0:C=[],V++;try{const o=t();return Ct(n),o}catch(o){n||(C=null),p=null,dt(o)}}function Ct(t){if(p&&(at(p),p=null),t)return;const e=C;C=null,e.length&&I(()=>rt(e),!1)}function at(t){for(let e=0;e<t.length;e++)X(t[e])}function $t(t){let e,n=0;for(e=0;e<t.length;e++){const o=t[e];o.user?t[n++]=o:X(o)}for(e=0;e<n;e++)X(t[e])}function U(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const o=t.sources[n];if(o.sources){const s=o.state;s===v?o!==e&&(!o.updatedAt||o.updatedAt<V)&&X(o):s===D&&U(o,e)}}}function ht(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=D,n.pure?p.push(n):C.push(n),n.observers&&ht(n))}}function L(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),o=t.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();o<s.length&&(i.sourceSlots[l]=o,s[o]=i,n.observerSlots[o]=l)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)L(t.tOwned[e]);delete t.tOwned}if(t.owned){for(e=t.owned.length-1;e>=0;e--)L(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function St(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function dt(t,e=y){throw St(t)}const vt=Symbol("fallback");function z(t){for(let e=0;e<t.length;e++)t[e]()}function Et(t,e,n={}){let o=[],s=[],i=[],l=0,r=e.length>1?[]:null;return ct(()=>z(i)),()=>{let f=t()||[],a=f.length,h,c;return f[pt],O(()=>{let w,x,A,S,T,u,d,m,b;if(a===0)l!==0&&(z(i),i=[],o=[],s=[],l=0,r&&(r=[])),n.fallback&&(o=[vt],s[0]=k(_=>(i[0]=_,n.fallback())),l=1);else if(l===0){for(s=new Array(a),c=0;c<a;c++)o[c]=f[c],s[c]=k($);l=a}else{for(A=new Array(a),S=new Array(a),r&&(T=new Array(a)),u=0,d=Math.min(l,a);u<d&&o[u]===f[u];u++);for(d=l-1,m=a-1;d>=u&&m>=u&&o[d]===f[m];d--,m--)A[m]=s[d],S[m]=i[d],r&&(T[m]=r[d]);for(w=new Map,x=new Array(m+1),c=m;c>=u;c--)b=f[c],h=w.get(b),x[c]=h===void 0?-1:h,w.set(b,c);for(h=u;h<=d;h++)b=o[h],c=w.get(b),c!==void 0&&c!==-1?(A[c]=s[h],S[c]=i[h],r&&(T[c]=r[h]),c=x[c],w.set(b,c)):i[h]();for(c=u;c<a;c++)c in A?(s[c]=A[c],i[c]=S[c],r&&(r[c]=T[c],r[c](c))):s[c]=k($);s=s.slice(0,l=a),o=f.slice(0)}return s});function $(w){if(i[c]=w,r){const[x,A]=M(c);return r[c]=A,e(f[c],x)}return e(f[c])}}}function Y(t,e){return O(()=>t(e||{}))}function Tt(t){const e="fallback"in t&&{fallback:()=>t.fallback};return xt(Et(()=>t.each,t.children,e||void 0))}function Rt(t,e,n){let o=n.length,s=e.length,i=o,l=0,r=0,f=e[s-1].nextSibling,a=null;for(;l<s||r<i;){if(e[l]===n[r]){l++,r++;continue}for(;e[s-1]===n[i-1];)s--,i--;if(s===l){const h=i<o?r?n[r-1].nextSibling:n[i-r]:f;for(;r<i;)t.insertBefore(n[r++],h)}else if(i===r)for(;l<s;)(!a||!a.has(e[l]))&&e[l].remove(),l++;else if(e[l]===n[i-1]&&n[r]===e[s-1]){const h=e[--s].nextSibling;t.insertBefore(n[r++],e[l++].nextSibling),t.insertBefore(n[--i],h),e[s]=n[i]}else{if(!a){a=new Map;let c=r;for(;c<i;)a.set(n[c],c++)}const h=a.get(e[l]);if(h!=null)if(r<h&&h<i){let c=l,$=1,w;for(;++c<s&&c<i&&!((w=a.get(e[c]))==null||w!==h+$);)$++;if($>h-r){const x=e[l];for(;r<h;)t.insertBefore(n[r++],x)}else t.replaceChild(n[r++],e[l++])}else l++;else e[l++].remove()}}}const tt="_$DX_DELEGATE";function Mt(t,e,n,o={}){let s;return k(i=>{s=i,e===document?t():B(e,t(),e.firstChild?null:void 0,n)},o.owner),()=>{s(),e.textContent=""}}function G(t,e,n,o){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=t,r.content.firstChild},l=()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function gt(t,e=window.document){const n=e[tt]||(e[tt]=new Set);for(let o=0,s=t.length;o<s;o++){const i=t[o];n.has(i)||(n.add(i),e.addEventListener(i,Nt))}}function Lt(t,e,n){t.removeAttribute(e)}function N(t,e){e==null?t.removeAttribute("class"):t.className=e}function et(t,e,n){if(!e)return n?Lt(t,"style"):e;const o=t.style;if(typeof e=="string")return o.cssText=e;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),e||(e={});let s,i;for(i in n)e[i]==null&&o.removeProperty(i),delete n[i];for(i in e)s=e[i],s!==n[i]&&(o.setProperty(i,s),n[i]=s);return n}function B(t,e,n,o){if(n!==void 0&&!o&&(o=[]),typeof e!="function")return q(t,e,o,n);E(s=>q(t,e(),s,n),o)}function Nt(t){let e=t.target;const n=`$$${t.type}`,o=t.target,s=t.currentTarget,i=f=>Object.defineProperty(t,"target",{configurable:!0,value:f}),l=()=>{const f=e[n];if(f&&!e.disabled){const a=e[`${n}Data`];if(a!==void 0?f.call(e,a,t):f.call(e,t),t.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(t.target)&&i(e.host),!0},r=()=>{for(;l()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return e||document}}),t.composedPath){const f=t.composedPath();i(f[0]);for(let a=0;a<f.length-2&&(e=f[a],!!l());a++){if(e._$host){e=e._$host,r();break}if(e.parentNode===s)break}}else r();i(o)}function q(t,e,n,o,s){for(;typeof n=="function";)n=n();if(e===n)return n;const i=typeof e,l=o!==void 0;if(t=l&&n[0]&&n[0].parentNode||t,i==="string"||i==="number"){if(i==="number"&&(e=e.toString(),e===n))return n;if(l){let r=n[0];r&&r.nodeType===3?r.data!==e&&(r.data=e):r=document.createTextNode(e),n=R(t,n,o,r)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||i==="boolean")n=R(t,n,o);else{if(i==="function")return E(()=>{let r=e();for(;typeof r=="function";)r=r();n=q(t,r,n,o)}),()=>n;if(Array.isArray(e)){const r=[],f=n&&Array.isArray(n);if(Q(r,e,n,s))return E(()=>n=q(t,r,n,o,!0)),()=>n;if(r.length===0){if(n=R(t,n,o),l)return n}else f?n.length===0?nt(t,r,o):Rt(t,n,r):(n&&R(t),nt(t,r));n=r}else if(e.nodeType){if(Array.isArray(n)){if(l)return n=R(t,n,o,e);R(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function Q(t,e,n,o){let s=!1;for(let i=0,l=e.length;i<l;i++){let r=e[i],f=n&&n[t.length],a;if(!(r==null||r===!0||r===!1))if((a=typeof r)=="object"&&r.nodeType)t.push(r);else if(Array.isArray(r))s=Q(t,r,f)||s;else if(a==="function")if(o){for(;typeof r=="function";)r=r();s=Q(t,Array.isArray(r)?r:[r],Array.isArray(f)?f:[f])||s}else t.push(r),s=!0;else{const h=String(r);f&&f.nodeType===3&&f.data===h?t.push(f):t.push(document.createTextNode(h))}}return s}function nt(t,e,n=null){for(let o=0,s=e.length;o<s;o++)t.insertBefore(e[o],n)}function R(t,e,n,o){if(n===void 0)return t.textContent="";const s=o||document.createTextNode("");if(e.length){let i=!1;for(let l=e.length-1;l>=0;l--){const r=e[l];if(s!==r){const f=r.parentNode===t;!i&&!l?f?t.replaceChild(s,r):t.insertBefore(s,n):f&&r.remove()}else i=!0}}else t.insertBefore(s,n);return[s]}const Bt=["front","back","right","left","top","bottom"],ot=["Harrison Rustan","Portfolio","Contact","About me","Education","Resume"],st=["rgba(70, 130, 180, 0.9)","rgba(255, 165, 0, 0.9)","rgba(34, 139, 34, 0.9)","rgba(255, 99, 71, 0.9)","rgba(123, 104, 238, 0.9)","rgba(255, 215, 0, 0.9)"],Ot="_cube_1nm2j_8",Pt="_face_1nm2j_15",It="_front_1nm2j_26",jt="_back_1nm2j_29",kt="_right_1nm2j_32",Ft="_left_1nm2j_35",Dt="_top_1nm2j_38",Xt="_bottom_1nm2j_41",W={cube:Ot,face:Pt,front:It,back:jt,right:kt,left:Ft,top:Dt,bottom:Xt};var Ut=G("<div>"),Yt=G("<button>");const qt=t=>{const e=()=>{const o=Math.floor(Math.random()*st.length);return st[o]},n=o=>{console.log(o)};return(()=>{var o=Ut();return B(o,Y(Tt,{each:Bt,children:(s,i)=>(()=>{var l=Yt();return l.$$click=()=>n(ot[i()]),B(l,()=>ot[i()]),E(r=>{var f=`${W.face} ${W[s]}`,a=`background: ${e()}`;return f!==r.e&&N(l,r.e=f),r.t=et(l,a,r.t),r},{e:void 0,t:void 0}),l})()})),E(s=>{var i=W.cube,l=`transform: rotateX(${t.rotation.x}deg) rotateY(${t.rotation.y}deg);`;return i!==s.e&&N(o,s.e=i),s.t=et(o,l,s.t),s},{e:void 0,t:void 0}),o})()};gt(["click"]);const Vt="_App_kmo2z_4",Gt="_flatCubeBody_kmo2z_19",it={App:Vt,flatCubeBody:Gt},Ht="_cubeBody_18yeq_1",Kt={cubeBody:Ht};var Wt=G("<div>");const Qt=t=>{const[e,n]=M({x:0,y:0}),[o,s]=M(!1),[i,l]=M({x:0,y:0}),[r,f]=M({x:0,y:0});let a;const h=u=>{s(!0),l({x:u.clientX,y:u.clientY})},c=u=>{if(!o())return;const d=u.clientX-i().x,m=u.clientY-i().y;f({x:m*.3,y:d*.3}),n(b=>{const _={x:b.x-m*.3,y:b.y+d*.3};return t.onRotationChange(_),_}),l({x:u.clientX,y:u.clientY})},$=u=>{s(!0);const d=u.touches[0];l({x:d.clientX,y:d.clientY})},w=u=>{if(!o())return;const d=u.touches[0],m=d.clientX-i().x,b=d.clientY-i().y;f({x:b*.3,y:m*.3}),n(_=>{const j={x:_.x-b*.3,y:_.y+m*.3};return t.onRotationChange(j),j}),l({x:d.clientX,y:d.clientY})},x=()=>{s(!1),a=requestAnimationFrame(S)},A=()=>{s(!1),a=requestAnimationFrame(S)},S=()=>{n(u=>{const d={x:u.x-r().x,y:u.y+r().y};return t.onRotationChange(d),d}),f(u=>({x:u.x*.85,y:u.y*.85})),(Math.abs(r().x)>.01||Math.abs(r().y)>.01)&&(a=requestAnimationFrame(S))},T=()=>{const u={x:-45,y:45},d=3e3,m=performance.now(),b=_=>{const j=_-m,H=Math.min(j/d,1),Z={x:H*u.x,y:H*u.y};n(Z),t.onRotationChange(Z),H<1&&requestAnimationFrame(b)};requestAnimationFrame(b)};return At(()=>{T()}),ct(()=>{cancelAnimationFrame(a)}),(()=>{var u=Wt();return u.$$touchend=A,u.$$touchmove=w,u.$$touchstart=$,u.addEventListener("mouseleave",x),u.$$mouseup=x,u.$$mousemove=c,u.$$mousedown=h,B(u,()=>t.children),E(()=>N(u,Kt.cubeBody)),u})()};gt(["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"]);var Jt=G("<div><div>Other section/component here. It'd be cool to have a flat representation of the cube here for easy navigation");const Zt=()=>{const[t,e]=M({x:0,y:0}),n=o=>{e(o)};return(()=>{var o=Jt(),s=o.firstChild;return B(o,Y(Qt,{onRotationChange:n,get children(){return Y(qt,{get rotation(){return{x:t().x,y:t().y}}})}}),s),E(i=>{var l=it.App,r=it.flatCubeBody;return l!==i.e&&N(o,i.e=l),r!==i.t&&N(s,i.t=r),i},{e:void 0,t:void 0}),o})()},zt=document.getElementById("root");Mt(()=>Y(Zt,{}),zt);
