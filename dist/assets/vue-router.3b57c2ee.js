import{s as e,u as t,l as n,k as r,n as o,d as a,P as s,ab as c,O as i,e as l,f as u}from"./@vue.ab2bd211.js";
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const f="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,p=e=>f?Symbol(e):"_vr_"+e,h=p("rvlm"),d=p("rvd"),m=p("r"),g=p("rl"),v=p("rvl"),y="undefined"!=typeof window;const b=Object.assign;function w(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const E=()=>{},A=/\/$/;function R(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("?"),i=t.indexOf("#",c>-1?c:0);return c>-1&&(r=t.slice(0,c),a=t.slice(c+1,i>-1?i:t.length),o=e(a)),i>-1&&(r=r||t.slice(0,i),s=t.slice(i,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,s=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==s&&"."!==a){if(".."!==a)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function k(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function P(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!x(e[n],t[n]))return!1;return!0}function x(e,t){return Array.isArray(e)?C(e,t):Array.isArray(t)?C(t,e):e===t}function C(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var $,S,j,q;function L(e){if(!e)if(y){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(A,"")}(S=$||($={})).pop="pop",S.push="push",(q=j||(j={})).back="back",q.forward="forward",q.unknown="";const _=/^[^#]+#/;function B(e,t){return e.replace(_,"#")+t}const M=()=>({left:window.pageXOffset,top:window.pageYOffset});function G(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function I(e,t){return(history.state?history.state.position-t:-1)+e}const T=new Map;function U(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),k(n,"")}return k(n,e)+r+o}function D(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?M():null}}function F(e){const{history:t,location:n}=window,r={value:U(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),i=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:location.protocol+"//"+location.host+e+r;try{t[s?"replaceState":"pushState"](a,"",i),o.value=a}catch(l){n[s?"replace":"assign"](i)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=b({},o.value,t.state,{forward:e,scroll:M()});a(s.current,s,!0),a(e,b({},D(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,b({},t.state,D(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}function W(e){const t=F(e=L(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=U(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===i)return void(s=null);u=l?a.position-l.position:0}else r(c);o.forEach((e=>{e(n.value,i,{delta:u,type:$.pop,direction:u?u>0?j.forward:j.back:j.unknown})}))};function i(){const{history:e}=window;e.state&&e.replaceState(b({},e.state,{scroll:M()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",i),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=b({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:B.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function V(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),W(e)}function z(e){return"string"==typeof e||"symbol"==typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=p("nf");var Q,X;function Y(e,t){return b(new Error,{type:e,[H]:!0},t)}function N(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}(X=Q||(Q={}))[X.aborted=4]="aborted",X[X.cancelled=8]="cancelled",X[X.duplicated=16]="duplicated";const Z={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function ee(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function te(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=ee(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const ne={type:0,value:""},re=/[a-zA-Z0-9_]/;function oe(e,t,n){const r=function(e,t){const n=b({},Z,t),r=[];let o=n.start?"^":"";const a=[];for(const i of e){const e=i.length?[]:[90];n.strict&&!i.length&&(o+="/");for(let t=0;t<i.length;t++){const r=i[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(J,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;a.push({name:e,repeatable:n,optional:l});const f=u||"[^/]+?";if("[^/]+?"!==f){s+=10;try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=l&&i.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),o+=p,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const a of o)if(0===a.type)n+=a.value;else if(1===a.type){const{value:s,repeatable:c,optional:i}=a,l=s in t?t[s]:"";if(Array.isArray(l)&&!c)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!i)throw new Error(`Missing required param "${s}"`);o.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[ne]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;i<e.length;)if(c=e[i++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(l&&f(),s()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:re.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}(e.path),n),o=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function ae(e,t){const n=[],r=new Map;function o(e,n,r){const c=!r,i=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:se(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=le(t,e),u=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(b({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=oe(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),c&&e.name&&!ce(f)&&a(e.name)),"children"in i){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,s(f)}return p?()=>{a(p)}:E}function a(e){if(z(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){let t=0;for(;t<n.length&&te(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ue(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw Y(1,{location:e});s=o.record.name,c=b(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(c)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw Y(1,{location:e,currentLocation:t});s=o.record.name,c=b({},t.params,e.params),a=o.stringify(c)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:s,path:a,params:c,matched:i,meta:ie(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function se(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function ce(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ie(e){return e.reduce(((e,t)=>b(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ue(e,t){return t.children.some((t=>t===e||ue(e,t)))}const fe=/#/g,pe=/&/g,he=/\//g,de=/=/g,me=/\?/g,ge=/\+/g,ve=/%5B/g,ye=/%5D/g,be=/%5E/g,we=/%60/g,Ee=/%7B/g,Ae=/%7C/g,Re=/%7D/g,ke=/%20/g;function Oe(e){return encodeURI(""+e).replace(Ae,"|").replace(ve,"[").replace(ye,"]")}function Pe(e){return Oe(e).replace(ge,"%2B").replace(ke,"+").replace(fe,"%23").replace(pe,"%26").replace(we,"`").replace(Ee,"{").replace(Re,"}").replace(be,"^")}function xe(e){return null==e?"":function(e){return Oe(e).replace(fe,"%23").replace(me,"%3F")}(e).replace(he,"%2F")}function Ce(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function $e(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(ge," "),o=e.indexOf("="),a=Ce(o<0?e:e.slice(0,o)),s=o<0?null:Ce(e.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function Se(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n).replace(de,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&Pe(e))):[r&&Pe(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function qe(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Le(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,c)=>{const i=e=>{var i;!1===e?c(Y(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(i=e)||i&&"object"==typeof i?c(Y(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>c(e)))}))}function _e(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let c=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=c)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(c.__vccOpts||c)[t];a&&o.push(Le(a,n,r,s,e))}else{let a=c();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(c=o).__esModule||f&&"Module"===c[Symbol.toStringTag]?o.default:o;var c;s.components[e]=a;const i=(a.__vccOpts||a)[t];return i&&Le(i,n,r,s,e)()}))))}}var a;return o}function Be(e){const r=s(m),o=s(g),a=n((()=>r.resolve(t(e.to)))),c=n((()=>{const{matched:e}=a.value,{length:t}=e,n=e[t-1],r=o.matched;if(!n||!r.length)return-1;const s=r.findIndex(O.bind(null,n));if(s>-1)return s;const c=Ge(e[t-2]);return t>1&&Ge(n)===c&&r[r.length-1].path!==c?r.findIndex(O.bind(null,e[t-2])):s})),i=n((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(o.params,a.value.params))),l=n((()=>c.value>-1&&c.value===o.matched.length-1&&P(o.params,a.value.params)));return{route:a,href:n((()=>a.value.href)),isActive:i,isExactActive:l,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?r[t(e.replace)?"replace":"push"](t(e.to)).catch(E):Promise.resolve()}}}const Me=a({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Be,setup(e,{slots:t}){const o=r(Be(e)),{options:a}=s(m),i=n((()=>({[Ie(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Ie(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive})));return()=>{const n=t.default&&t.default(o);return e.custom?n:c("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:i.value},n)}}});function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ie=(e,t,n)=>null!=e?e:null!=t?t:n;function Te(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ue=a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const o=s(v),a=n((()=>e.route||o.value)),f=s(d,0),p=n((()=>a.value.matched[f]));i(d,f+1),i(h,p),i(v,a);const m=l();return u((()=>[m.value,p.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&O(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const n=a.value,o=p.value,s=o&&o.components[e.name],i=e.name;if(!s)return Te(r.default,{Component:s,route:n});const l=o.props[e.name],u=l?!0===l?n.params:"function"==typeof l?l(n):l:null,f=c(s,b({},u,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[i]=null)},ref:m}));return Te(r.default,{Component:f,route:n})||f}}});function De(a){const s=ae(a.routes,a),c=a.parseQuery||$e,i=a.stringifyQuery||Se,l=a.history,u=qe(),f=qe(),p=qe(),h=e(K);let d=K;y&&a.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const A=w.bind(null,(e=>""+e)),k=w.bind(null,xe),x=w.bind(null,Ce);function C(e,t){if(t=b({},t||h.value),"string"==typeof e){const n=R(c,e,t.path),r=s.resolve({path:n.path},t),o=l.createHref(n.fullPath);return b(n,r,{params:x(r.params),hash:Ce(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=b({},e,{path:R(c,e.path,t.path).path});else{const r=b({},e.params);for(const e in r)null==r[e]&&delete r[e];n=b({},e,{params:k(e.params)}),t.params=k(t.params)}const r=s.resolve(n,t),o=e.hash||"";r.params=A(x(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,b({},e,{hash:(u=o,Oe(u).replace(Ee,"{").replace(Re,"}").replace(be,"^")),path:r.path}));var u;const f=l.createHref(a);return b({fullPath:a,hash:o,query:i===Se?je(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function S(e){return"string"==typeof e?R(c,e,h.value.path):b({},e)}function j(e,t){if(d!==e)return Y(8,{from:t,to:e})}function q(e){return _(e)}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),b({query:e.query,hash:e.hash,params:e.params},r)}}function _(e,t){const n=d=C(e),r=h.value,o=e.state,a=e.force,s=!0===e.replace,c=L(n);if(c)return _(b(S(c),{state:o,force:a,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&O(t.matched[r],n.matched[o])&&P(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=Y(16,{to:l,from:r}),ee(r,r,!0,!1)),(u?Promise.resolve(u):U(l,r)).catch((e=>N(e)?N(e,2)?e:J(e):Z(e,l,r))).then((e=>{if(e){if(N(e,2))return _(b(S(e.to),{state:o,force:a,replace:s}),t||l)}else e=F(l,r,!0,s,o);return D(l,r,e),e}))}function B(e,t){const n=j(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>O(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>O(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=_e(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(Le(r,e,t))}));const s=B.bind(null,e,t);return n.push(s),Fe(n).then((()=>{n=[];for(const r of u.list())n.push(Le(r,e,t));return n.push(s),Fe(n)})).then((()=>{n=_e(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Le(r,e,t))}));return n.push(s),Fe(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Le(o,e,t));else n.push(Le(r.beforeEnter,e,t));return n.push(s),Fe(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=_e(a,"beforeRouteEnter",e,t),n.push(s),Fe(n)))).then((()=>{n=[];for(const r of f.list())n.push(Le(r,e,t));return n.push(s),Fe(n)})).catch((e=>N(e,8)?e:Promise.reject(e)))}function D(e,t,n){for(const r of p.list())r(e,t,n)}function F(e,t,n,r,o){const a=j(e,t);if(a)return a;const s=t===K,c=y?history.state:{};n&&(r||s?l.replace(e.fullPath,b({scroll:s&&c&&c.scroll},o)):l.push(e.fullPath,o)),h.value=e,ee(e,t,n,s),J()}let W;function V(){W||(W=l.listen(((e,t,n)=>{const r=C(e),o=L(r);if(o)return void _(b(o,{replace:!0}),r).catch(E);d=r;const a=h.value;var s,c;y&&(s=I(a.fullPath,n.delta),c=M(),T.set(s,c)),U(r,a).catch((e=>N(e,12)?e:N(e,2)?(_(e.to,r).then((e=>{N(e,20)&&!n.delta&&n.type===$.pop&&l.go(-1,!1)})).catch(E),Promise.reject()):(n.delta&&l.go(-n.delta,!1),Z(e,r,a)))).then((e=>{(e=e||F(r,a,!1))&&(n.delta?l.go(-n.delta,!1):n.type===$.pop&&N(e,20)&&l.go(-1,!1)),D(r,a,e)})).catch(E)})))}let H,Q=qe(),X=qe();function Z(e,t,n){J(e);const r=X.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function J(e){return H||(H=!e,V(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ee(e,t,n,r){const{scrollBehavior:s}=a;if(!y||!s)return Promise.resolve();const c=!n&&function(e){const t=T.get(e);return T.delete(e),t}(I(e.fullPath,0))||(r||!n)&&history.state&&history.state.scroll||null;return o().then((()=>s(e,t,c))).then((e=>e&&G(e))).catch((n=>Z(n,e,t)))}const te=e=>l.go(e);let ne;const re=new Set;return{currentRoute:h,addRoute:function(e,t){let n,r;return z(e)?(n=s.getRecordMatcher(e),r=t):r=e,s.addRoute(r,n)},removeRoute:function(e){const t=s.getRecordMatcher(e);t&&s.removeRoute(t)},hasRoute:function(e){return!!s.getRecordMatcher(e)},getRoutes:function(){return s.getRoutes().map((e=>e.record))},resolve:C,options:a,push:q,replace:function(e){return q(b(S(e),{replace:!0}))},go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:u.add,beforeResolve:f.add,afterEach:p.add,onError:X.add,isReady:function(){return H&&h.value!==K?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))},install(e){e.component("RouterLink",Me),e.component("RouterView",Ue),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(h)}),y&&!ne&&h.value===K&&(ne=!0,q(l.location).catch((e=>{})));const o={};for(const t in K)o[t]=n((()=>h.value[t]));e.provide(m,this),e.provide(g,r(o)),e.provide(v,h);const a=e.unmount;re.add(e),e.unmount=function(){re.delete(e),re.size<1&&(d=K,W&&W(),W=null,h.value=K,ne=!1,H=!1),a()}}}}function Fe(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function We(){return s(m)}function Ve(){return s(g)}export{V as a,We as b,De as c,Ve as u};
