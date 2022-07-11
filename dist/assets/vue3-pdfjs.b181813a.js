import{p as t,a as e,b as n}from"./pdfjs-dist.32fff6d2.js";import{d as r,e as o,l as i,j as a,o as u,c,a as l}from"./@vue.ab2bd211.js";var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var p,d,h=function(t){return t&&t.Math==Math&&t},y=h("object"==typeof globalThis&&globalThis)||h("object"==typeof window&&window)||h("object"==typeof self&&self)||h("object"==typeof f&&f)||function(){return this}()||Function("return this")(),v=function(t){try{return!!t()}catch(e){return!0}},g=!v((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),b={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,w={f:m&&!b.call({1:2},1)?function(t){var e=m(this,t);return!!e&&e.enumerable}:b},S=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},E={}.toString,O=function(t){return E.call(t).slice(8,-1)},T="".split,x=v((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==O(t)?T.call(t,""):Object(t)}:Object,_=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},j=function(t){return x(_(t))},L=function(t){return"object"==typeof t?null!==t:"function"==typeof t},P=function(t){return"function"==typeof t?t:void 0},N=function(t,e){return arguments.length<2?P(y[t]):y[t]&&y[t][e]},A=N("navigator","userAgent")||"",C=y.process,I=y.Deno,k=C&&C.versions||I&&I.version,M=k&&k.v8;M?d=(p=M.split("."))[0]<4?1:p[0]+p[1]:A&&(!(p=A.match(/Edge\/(\d+)/))||p[1]>=74)&&(p=A.match(/Chrome\/(\d+)/))&&(d=p[1]);var F=d&&+d,R=!!Object.getOwnPropertySymbols&&!v((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&F&&F<41})),V=R&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,G=V?function(t){return"symbol"==typeof t}:function(t){var e=N("Symbol");return"function"==typeof e&&Object(t)instanceof e},D=function(t,e){try{Object.defineProperty(y,t,{value:e,configurable:!0,writable:!0})}catch(n){y[t]=e}return e},B=y["__core-js_shared__"]||D("__core-js_shared__",{}),W=s((function(t){(t.exports=function(t,e){return B[t]||(B[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),z=function(t){return Object(_(t))},H={}.hasOwnProperty,q=Object.hasOwn||function(t,e){return H.call(z(t),e)},X=0,Y=Math.random(),U=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++X+Y).toString(36)},K=W("wks"),$=y.Symbol,J=V?$:$&&$.withoutSetter||U,Q=function(t){return q(K,t)&&(R||"string"==typeof K[t])||(R&&q($,t)?K[t]=$[t]:K[t]=J("Symbol."+t)),K[t]},Z=Q("toPrimitive"),tt=function(t,e){if(!L(t)||G(t))return t;var n,r=t[Z];if(void 0!==r){if(void 0===e&&(e="default"),n=r.call(t,e),!L(n)||G(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,r;if("string"===e&&"function"==typeof(n=t.toString)&&!L(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!L(r=n.call(t)))return r;if("string"!==e&&"function"==typeof(n=t.toString)&&!L(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(t,e)},et=function(t){var e=tt(t,"string");return G(e)?e:String(e)},nt=y.document,rt=L(nt)&&L(nt.createElement),ot=function(t){return rt?nt.createElement(t):{}},it=!g&&!v((function(){return 7!=Object.defineProperty(ot("div"),"a",{get:function(){return 7}}).a})),at=Object.getOwnPropertyDescriptor,ut={f:g?at:function(t,e){if(t=j(t),e=et(e),it)try{return at(t,e)}catch(n){}if(q(t,e))return S(!w.f.call(t,e),t[e])}},ct=function(t){if(!L(t))throw TypeError(String(t)+" is not an object");return t},lt=Object.defineProperty,ft={f:g?lt:function(t,e,n){if(ct(t),e=et(e),ct(n),it)try{return lt(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},st=g?function(t,e,n){return ft.f(t,e,S(1,n))}:function(t,e,n){return t[e]=n,t},pt=Function.toString;"function"!=typeof B.inspectSource&&(B.inspectSource=function(t){return pt.call(t)});var dt,ht,yt,vt=B.inspectSource,gt=y.WeakMap,bt="function"==typeof gt&&/native code/.test(vt(gt)),mt=W("keys"),wt=function(t){return mt[t]||(mt[t]=U(t))},St={},Et=y.WeakMap;if(bt||B.state){var Ot=B.state||(B.state=new Et),Tt=Ot.get,xt=Ot.has,_t=Ot.set;dt=function(t,e){if(xt.call(Ot,t))throw new TypeError("Object already initialized");return e.facade=t,_t.call(Ot,t,e),e},ht=function(t){return Tt.call(Ot,t)||{}},yt=function(t){return xt.call(Ot,t)}}else{var jt=wt("state");St[jt]=!0,dt=function(t,e){if(q(t,jt))throw new TypeError("Object already initialized");return e.facade=t,st(t,jt,e),e},ht=function(t){return q(t,jt)?t[jt]:{}},yt=function(t){return q(t,jt)}}var Lt,Pt={set:dt,get:ht,has:yt,enforce:function(t){return yt(t)?ht(t):dt(t,{})},getterFor:function(t){return function(e){var n;if(!L(e)||(n=ht(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Nt=s((function(t){var e=Pt.get,n=Pt.enforce,r=String(String).split("String");(t.exports=function(t,e,o,i){var a,u=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||q(o,"name")||st(o,"name",e),(a=n(o)).source||(a.source=r.join("string"==typeof e?e:""))),t!==y?(u?!l&&t[e]&&(c=!0):delete t[e],c?t[e]=o:st(t,e,o)):c?t[e]=o:D(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||vt(this)}))})),At=Math.ceil,Ct=Math.floor,It=function(t){return isNaN(t=+t)?0:(t>0?Ct:At)(t)},kt=Math.min,Mt=function(t){return t>0?kt(It(t),9007199254740991):0},Ft=Math.max,Rt=Math.min,Vt=function(t){return function(e,n,r){var o,i=j(e),a=Mt(i.length),u=function(t,e){var n=It(t);return n<0?Ft(n+e,0):Rt(n,e)}(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},Gt={includes:Vt(!0),indexOf:Vt(!1)}.indexOf,Dt=function(t,e){var n,r=j(t),o=0,i=[];for(n in r)!q(St,n)&&q(r,n)&&i.push(n);for(;e.length>o;)q(r,n=e[o++])&&(~Gt(i,n)||i.push(n));return i},Bt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Wt=Bt.concat("length","prototype"),zt={f:Object.getOwnPropertyNames||function(t){return Dt(t,Wt)}},Ht={f:Object.getOwnPropertySymbols},qt=N("Reflect","ownKeys")||function(t){var e=zt.f(ct(t)),n=Ht.f;return n?e.concat(n(t)):e},Xt=function(t,e){for(var n=qt(e),r=ft.f,o=ut.f,i=0;i<n.length;i++){var a=n[i];q(t,a)||r(t,a,o(e,a))}},Yt=/#|\.prototype\./,Ut=function(t,e){var n=$t[Kt(t)];return n==Qt||n!=Jt&&("function"==typeof e?v(e):!!e)},Kt=Ut.normalize=function(t){return String(t).replace(Yt,".").toLowerCase()},$t=Ut.data={},Jt=Ut.NATIVE="N",Qt=Ut.POLYFILL="P",Zt=Ut,te=ut.f,ee=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,l=t.stat;if(n=c?y:l?y[u]||D(u,{}):(y[u]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=te(n,r))&&a.value:n[r],!Zt(c?r:u+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Xt(i,o)}(t.sham||o&&o.sham)&&st(i,"sham",!0),Nt(n,r,i,t)}},ne=Object.keys||function(t){return Dt(t,Bt)},re=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(r){}return function(n,r){return ct(n),function(t){if(!L(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),oe=function(t,e,n){var r,o;return re&&"function"==typeof(r=e.constructor)&&r!==n&&L(o=r.prototype)&&o!==n.prototype&&re(t,o),t},ie=g?Object.defineProperties:function(t,e){ct(t);for(var n,r=ne(e),o=r.length,i=0;o>i;)ft.f(t,n=r[i++],e[n]);return t},ae=N("document","documentElement"),ue=wt("IE_PROTO"),ce=function(){},le=function(t){return"<script>"+t+"<\/script>"},fe=function(t){t.write(le("")),t.close();var e=t.parentWindow.Object;return t=null,e},se=function(){try{Lt=new ActiveXObject("htmlfile")}catch(r){}var t,e;se="undefined"!=typeof document?document.domain&&Lt?fe(Lt):((e=ot("iframe")).style.display="none",ae.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(le("document.F=Object")),t.close(),t.F):fe(Lt);for(var n=Bt.length;n--;)delete se.prototype[Bt[n]];return se()};St[ue]=!0;var pe=Object.create||function(t,e){var n;return null!==t?(ce.prototype=ct(t),n=new ce,ce.prototype=null,n[ue]=t):n=se(),void 0===e?n:ie(n,e)},de=function(t){if(G(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)},he="[\t\n\v\f\r                　\u2028\u2029\ufeff]",ye=RegExp("^"+he+he+"*"),ve=RegExp(he+he+"*$"),ge=function(t){return function(e){var n=de(_(e));return 1&t&&(n=n.replace(ye,"")),2&t&&(n=n.replace(ve,"")),n}},be={start:ge(1),end:ge(2),trim:ge(3)},me=zt.f,we=ut.f,Se=ft.f,Ee=be.trim,Oe=y.Number,Te=Oe.prototype,xe="Number"==O(pe(Te)),_e=function(t){if(G(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,i,a,u,c,l=tt(t,"number");if("string"==typeof l&&l.length>2)if(43===(e=(l=Ee(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(a=(i=l.slice(2)).length,u=0;u<a;u++)if((c=i.charCodeAt(u))<48||c>o)return NaN;return parseInt(i,r)}return+l};if(Zt("Number",!Oe(" 0o1")||!Oe("0b1")||Oe("+0x1"))){for(var je,Le=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof Le&&(xe?v((function(){Te.valueOf.call(n)})):"Number"!=O(n))?oe(new Oe(_e(e)),n,Le):_e(e)},Pe=g?me(Oe):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),Ne=0;Pe.length>Ne;Ne++)q(Oe,je=Pe[Ne])&&!q(Le,je)&&Se(Le,je,we(Oe,je));Le.prototype=Te,Te.constructor=Le,Nt(y,"Number",Le)}var Ae=be.trim,Ce=y.parseFloat,Ie=1/Ce("\t\n\v\f\r                　\u2028\u2029\ufeff-0")!=-1/0?function(t){var e=Ae(de(t)),n=Ce(e);return 0===n&&"-"==e.charAt(0)?-0:n}:Ce;ee({global:!0,forced:parseFloat!=Ie},{parseFloat:Ie});var ke=[].slice,Me=function(t){return function(e,n){var r=arguments.length>2,o=r?ke.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};function Fe(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function Re(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}ee({global:!0,bind:!0,forced:/MSIE .\./.test(A)},{setTimeout:Me(y.setTimeout),setInterval:Me(y.setInterval)});var Ve=function(n){return t.exports.GlobalWorkerOptions.workerSrc=e,t.exports.getDocument(n)},Ge=r({name:"vue-pdf",props:{src:{type:[String,Object],required:!0},page:{type:Number,default:1},scale:{type:Number,default:null},enableTextSelection:{type:Boolean,default:!0},enableAnnotations:{type:Boolean,default:!0}},setup:function(r,u){var c=this,l=o(!1),f=o(null),s=o(null),p=o(null),d=o(0),h=o(null),y=i((function(){return r.page||1})),v=function(t){return Fe(c,void 0,void 0,(function(){var e,n,o,i,a,u,c,p,d,h=this;return Re(this,(function(y){switch(y.label){case 0:return l.value=!0,e=f.value,n=s.value,(o=document.createElement("div")).classList.add("vue-pdf__wrapper"),o.id="vue-pdf-page-"+r.page,i=document.createElement("canvas"),o.appendChild(i),a=document.createElement("div"),r.enableAnnotations&&(a.classList.add("vue-pdf__wrapper-annotation-layer"),o.appendChild(a)),u=document.createElement("div"),r.enableTextSelection&&(u.classList.add("textLayer","vue-pdf__wrapper-text-layer"),o.appendChild(u)),null==e||e.appendChild(o),c=t.getViewport({scale:1}),p=i.getContext("2d"),[4,g(e,c,t,i,p,u,a)];case 1:return y.sent(),r.scale?(n.style.display="inline-block",e.style.display="inline-block"):(d=b((function(){return Fe(h,void 0,void 0,(function(){return Re(this,(function(n){switch(n.label){case 0:return[4,g(e,c,t,i,p,u,a)];case 1:return[2,n.sent()]}}))}))})),window.addEventListener("resize",d)),[2]}}))}))},g=function(e,o,i,a,f,s,p){return Fe(c,void 0,void 0,(function(){var c,d,y,v,g,b,m;return Re(this,(function(w){switch(w.label){case 0:return s.innerHTML="",p.innerHTML="",c=window.getComputedStyle(e),d=parseFloat(c.width),y=r.scale?r.scale:d/o.width,v=i.getViewport({scale:y}),g=window.devicePixelRatio||1,b=f.webkitBackingStorePixelRatio||f.mozBackingStorePixelRatio||f.msBackingStorePixelRatio||f.oBackingStorePixelRatio||f.backingStorePixelRatio||1,m=g/b,g!==b?(a.width=r.scale?v.width*m:d*m,a.height=v.height*m,a.style.width=r.scale?"":"100%",a.style.height=v.height+"px"):(a.width=r.scale?v.width:d,a.height=v.height,a.style.width="",a.style.height=""),[4,f.scale(m,m)];case 1:return w.sent(),f&&i.render({canvasContext:f,viewport:v}).promise.then((function(){r.enableTextSelection&&i.getTextContent().then((function(t){h.value||(h.value=new n.exports.EventBus);var e=new n.exports.TextLayerBuilder({textLayerDiv:s,pageIndex:i._pageIndex,eventBus:h.value,viewport:v,enhanceTextSelection:!0});e.setTextContent(t),u.emit("textContent",t),e.render()})),r.enableAnnotations&&i.getAnnotations().then((function(e){p.style.cssText="left: 0; top: 0; height: "+v.height+"px; width: "+(r.scale?v.width:d)+"px;",t.exports.AnnotationLayer.render({viewport:v.clone({dontFlip:!0}),div:p,annotations:e,page:i,linkService:"",downloadManager:"",renderInteractiveForms:!1})})),l.value=!1})),[2]}}))}))},b=function(t,e){var n;return void 0===e&&(e=300),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){t.apply(c,r)}),e)}};return a((function(){l.value=!0,t.exports.GlobalWorkerOptions.workerSrc=e,Ve(r.src).promise.then((function(t){u.emit("pdfLoaded",t),p.value=t,d.value=t.numPages,u.emit("totalPages",d.value),y.value<=d.value&&t.getPage(y.value).then((function(t){return v(t)}))}))})),{props:r,pdfWrapperRef:f,parentWrapperRef:s}}}),De={class:"vue-pdf-main",ref:"parentWrapperRef"},Be={class:"vue-pdf",ref:"pdfWrapperRef"};!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".vue-pdf__wrapper{position:relative}.vue-pdf__wrapper-text-layer br{display:none}.vue-pdf__wrapper-annotation-layer{position:absolute}.vue-pdf__wrapper-annotation-layer .linkAnnotation{position:absolute;z-index:1}.vue-pdf__wrapper-annotation-layer .linkAnnotation a{width:100%;height:100%;display:inline-block}"),Ge.render=function(t,e,n,r,o,i){return u(),c("div",De,[l("div",Be,null,512)],512)};var We,ze,He=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},qe=Array.isArray||function(t){return"Array"==O(t)},Xe=Q("species"),Ye=function(t,e){return new(function(t){var e;return qe(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!qe(e.prototype)?L(e)&&null===(e=e[Xe])&&(e=void 0):e=void 0),void 0===e?Array:e}(t))(0===e?0:e)},Ue=[].push,Ke=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,a=7==t,u=5==t||i;return function(c,l,f,s){for(var p,d,h=z(c),y=x(h),v=He(l,f,3),g=Mt(y.length),b=0,m=s||Ye,w=e?m(c,g):n||a?m(c,0):void 0;g>b;b++)if((u||b in y)&&(d=v(p=y[b],b,h),t))if(e)w[b]=d;else if(d)switch(t){case 3:return!0;case 5:return p;case 6:return b;case 2:Ue.call(w,p)}else switch(t){case 4:return!1;case 7:Ue.call(w,p)}return i?-1:r||o?o:w}},$e={forEach:Ke(0),map:Ke(1),filter:Ke(2),some:Ke(3),every:Ke(4),find:Ke(5),findIndex:Ke(6),filterReject:Ke(7)}.forEach,Je=!!(ze=[]["forEach"])&&v((function(){ze.call(null,We||function(){throw 1},1)}))?[].forEach:function(t){return $e(this,t,arguments.length>1?arguments[1]:void 0)};ee({target:"Array",proto:!0,forced:[].forEach!=Je},{forEach:Je});var Qe=ot("span").classList,Ze=Qe&&Qe.constructor&&Qe.constructor.prototype,tn=Ze===Object.prototype?void 0:Ze,en=function(t){if(t&&t.forEach!==Je)try{st(t,"forEach",Je)}catch(e){t.forEach=Je}};for(var nn in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0})en(y[nn]&&y[nn].prototype);en(tn);var rn=w.f,on=function(t){return function(e){for(var n,r=j(e),o=ne(r),i=o.length,a=0,u=[];i>a;)n=o[a++],g&&!rn.call(r,n)||u.push(t?[n,r[n]]:r[n]);return u}},an={entries:on(!0),values:on(!1)}.entries;ee({target:"Object",stat:!0},{entries:function(t){return an(t)}});var un=Object.freeze({__proto__:null,VuePdf:Ge,createLoadingTask:Ve}),cn=function(t){Object.entries(un).forEach((function(e){var n=e[0],r=e[1];t.component(n,r)}))};export{cn as i,Ge as s};
