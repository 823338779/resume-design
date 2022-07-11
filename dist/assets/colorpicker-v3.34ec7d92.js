import{d as e,e as t,k as l,f as n,l as a,m as o,p as r,o as s,c as u,a as i,q as c,F as d,t as g,u as f,v,x as h,y as p,z as b,A as m,B as y,C}from"./@vue.ab2bd211.js";var k=Object.defineProperty,x=Object.defineProperties,$=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,F=(e,t,l)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,O=(e,t)=>{for(var l in t||(t={}))I.call(t,l)&&F(e,l,t[l]);if(w)for(var l of w(t))A.call(t,l)&&F(e,l,t[l]);return e};const M="undefined"!=typeof window,j=[],S="@@clickContext";let P,N=0;function _(e,t,l){return function(n={},a={}){l&&n.target&&a.target&&!e.contains(n.target)&&!e.contains(a.target)&&e!==n.target&&(t.expression&&e[S].methodName&&l.context[e[S].methodName]?l.context[e[S].methodName]():e[S].bindingFn&&e[S].bindingFn())}}M&&(document.addEventListener("mousedown",(e=>P=e)),document.addEventListener("mouseup",(e=>{j.forEach((t=>t[S].documentHandler(e,P)))})));var z={mounted(e,t,l){j.push(e);const n=N++;e[S]={id:n,documentHandler:_(e,t,l),methodName:t.expression,bindingFn:t.value}},updated(e,t,l){e[S].documentHandler=_(e,t,l),e[S].methodName=t.expression,e[S].bindingFn=t.value},unmounted(e){let t=j.length;for(let l=0;l<t;l++)if(j[l][S].id===e[S].id){j.splice(l,1);break}delete e[S]}},V=(e,t)=>{const l=e.__vccOpts||e;for(const[n,a]of t)l[n]=a;return l};const E=e=>(y("data-v-87d63fa8"),e=e(),C(),e),B={class:"panel-header"},R={class:"color-view-bg"},H={class:"panel-main"},G=E((()=>i("h3",null,"主题颜色",-1))),L={class:"theme-color"},U=["onMouseover","onClick"],q={class:"standard-color"},D=["onMouseover","onClick"],J=E((()=>i("h3",null,"标准颜色",-1))),K={class:"theme-color"},Q=["onMouseover","onClick"],T=E((()=>i("h3",null,"透明度",-1))),W=e({name:"colorPicker",directives:{clickoutside:z}});var X,Y,Z=V(e((X=O({},W),Y={props:{hex:{type:[String,void 0]},modelValue:{type:String},rgba:{type:String},defaultColor:{type:String,default:"#000000"},btnStyle:{type:[Object]},opacity:{type:[Number,String],default:()=>1},showOpacity:{type:Boolean,default:()=>!0},standardColor:{type:Array,default:()=>["#c21401","#ff1e02","#ffc12a","#ffff3a","#90cf5b","#00af57","#00afee","#0071be","#00215f","#72349d"]},themeColor:{type:Array,default:()=>["#000000","#ffffff","#eeece1","#1e497b","#4e81bb","#e2534d","#9aba60","#8165a0","#47acc5","#f9974c"]}},emits:["input","change","finish","update:hex","update:rgba","close","update:modelValue"],setup(e,{emit:y}){const C=e,k=t(!1),x=t(""),$=t(null),w=t(Number(C.opacity)),I=t(C.standardColor),A=l({visible:!1,html5Color:C.hex,tColor:C.themeColor,colorConfig:[["#7f7f7f","#f2f2f2"],["#0d0d0d","#808080"],["#1c1a10","#ddd8c3"],["#0e243d","#c6d9f0"],["#233f5e","#dae5f0"],["#632623","#f2dbdb"],["#4d602c","#eaf1de"],["#3f3150","#e6e0ec"],["#1e5867","#d9eef3"],["#99490f","#fee9da"]]}),F=t(_(""!==C.hex&&C.hex?C.hex:C.defaultColor,w.value));C.rgba&&C.rgba.length&&(F.value=C.rgba),n(x,(()=>{x.value?F.value=x.value:F.value=j.value})),n((()=>C.hex),((e,t)=>{(/^#?[0-9a-fA-F]{3}$/.test(e)||/^#?[0-9a-fA-F]{4}$/.test(e)||/^#?[0-9a-fA-F]{5}$/.test(e)||/^#?[0-9a-fA-F]{6}$/.test(e)||/^#?[0-9a-fA-F]{8}$/.test(e))&&e.trim().length<=9&&6!=e.trim().length&&8!=e.trim().length&&(j.value=_(e,1),F.value=_(e,1)),0!==e.length&&""!=e||(j.value="",F.value="")})),n((()=>C.rgba),((e,t)=>{(function(e){let t;/^rgb\(/.test(e)?t="^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$":/^rgba\(/.test(e)&&(t="^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$");const l=new RegExp(t);return!!e.match(l)})(e)&&(F.value=e,j.value=e),0!==e.length&&""!=e||(j.value="",F.value="")}));const M=t(""!==C.hex&&C.hex?C.hex:C.defaultColor),j=t(_(""!==C.hex&&C.hex?C.hex:C.defaultColor,w.value));C.rgba&&C.rgba.length&&(j.value=C.rgba);const S=a((()=>{const e=[];for(let t of A.colorConfig)e.push(W(t[1],t[0],5));return e})),P=e=>{e=(e=>{if(4!==e.length)return e;e="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]})(e);const t=[];for(let l=1;l<7;l+=2)t.push(parseInt("0x"+e.slice(l,l+2)));return t};function N(e){if(/^#?[0-9a-fA-F]{3}$/.test(e)){let t=e.substring(e.length-1,e.length),l=e.substring(e.length-2,e.length-1),n=e.substring(e.length-3,e.length-2);return N(`${n+n}${l+l}${t+t}`)}if(/^#?[0-9a-fA-F]{4}$/.test(e)){let t=e.substring(e.length-1,e.length),l=e.substring(e.length-2,e.length-1),n=e.substring(e.length-3,e.length-2),a=e.substring(e.length-4,e.length-3);return N(`${a+a}${n+n}${l+l}${t+t}`)}if(/^#?[0-9a-fA-F]{6}$/.test(e)){let t=parseInt("0x"+e.substring(e.length-2,e.length)),l=parseInt("0x"+e.substring(e.length-4,e.length-2));return{r:parseInt("0x"+e.substring(e.length-6,e.length-4)),g:l,b:t,a:1}}if(/^#?[0-9a-fA-F]{8}$/.test(e)){let t=parseInt("0x"+e.substring(e.length-2,e.length));t/=255;let l=parseInt("0x"+e.substring(e.length-4,e.length-2)),n=parseInt("0x"+e.substring(e.length-6,e.length-4));return{r:parseInt("0x"+e.substring(e.length-8,e.length-6)),g:n,b:l,a:t}}}function _(e,t){const{r:l,g:n,b:a,a:o}=N(e);let r=o;return 1===o&&1===t?r=1:1!==o&&1===t?r=o:1===o&&1!==t&&(r=t),`rgba(${l},${n},${a},${r})`}const z=e=>{M.value=e,j.value=_(e,w.value),F.value=_(e,w.value),y("input",e),y("update:hex",e),y("update:rgba",_(e,w.value)),y("change",{hex:e,rgba:_(e,w.value)})},V=(e,t,l)=>{const n=(e<<16|t<<8|l).toString(16);return"#"+new Array(Math.abs(n.length-7)).join("0")+n},E=()=>{k.value=!k.value},W=(e,t,l)=>{const n=P(e),a=P(t),o=(a[0]-n[0])/l,r=(a[1]-n[1])/l,s=(a[2]-n[2])/l,u=[];for(let i=0;i<l;i++)u.push(V(parseInt(o*i+n[0]),parseInt(r*i+n[1]),parseInt(s*i+n[2])));return u},X=()=>{k.value=!1,y("close",{hex:M.value,rgba:_(M.value,w.value)})},Y=e=>{x.value=_(e,w.value)},Z=()=>{$.value.click()},ee=()=>{z(C.defaultColor)},te=e=>{z($.value.value)},le=()=>{z(M.value)},ne=()=>{k.value=!1,y("finish",{hex:M.value,rgba:_(M.value,w.value)})};return(t,l)=>{const n=o("clickoutside");return r((s(),u("div",{class:"zs-color-picker",ref:"colorPicker",onClick:l[7]||(l[7]=e=>e.stopPropagation())},[i("div",{class:"zs-color-picker-btn",style:c(O({},e.btnStyle)),onClick:E},[i("div",{class:"zs-color-picker-btn-color",style:c({backgroundColor:j.value})},null,4)],4),i("div",{class:m(["zs-color-picker-panel",k.value?"zs-color-picker-panel__visible":""])},[i("div",B,[i("div",R,[i("div",{class:"color-view",style:c(`background-color: ${F.value}`)},null,4)]),i("div",{class:"default-color",onMouseover:l[0]||(l[0]=t=>x.value=e.defaultColor),onMouseout:l[1]||(l[1]=e=>x.value=null),onClick:ee},"默认颜色",32)]),i("div",H,[G,i("ul",L,[(s(!0),u(d,null,g(f(A).tColor,((e,t)=>(s(),u("li",{key:t,style:c({backgroundColor:e}),onMouseover:t=>Y(e),onMouseout:l[2]||(l[2]=e=>x.value=null),onClick:t=>z(e)},null,44,U)))),128))]),i("ul",q,[(s(!0),u(d,null,g(f(S),((e,t)=>(s(),u("li",{key:t},[i("ul",null,[(s(!0),u(d,null,g(e,((e,t)=>(s(),u("li",{key:t,style:c({backgroundColor:e}),onMouseover:t=>Y(e),onMouseout:l[3]||(l[3]=e=>x.value=null),onClick:t=>z(e)},null,44,D)))),128))])])))),128))]),J,i("ul",K,[(s(!0),u(d,null,g(I.value,((e,t)=>(s(),u("li",{key:t,style:c({backgroundColor:e}),onMouseover:t=>Y(e),onMouseout:l[4]||(l[4]=e=>x.value=null),onClick:t=>z(e)},null,44,Q)))),128))]),e.showOpacity?(s(),u(d,{key:0},[T,r(i("input",{type:"range",max:"1",min:"0",step:"0.0001","onUpdate:modelValue":l[5]||(l[5]=e=>w.value=e),class:"gradient",onInput:le},null,544),[[v,w.value]]),h(" "+p(w.value),1)],64)):b("",!0),i("div",{class:"bottom-btn"},[i("h3",{onClick:Z,style:{cursor:"pointer"}},"更多颜色"),i("div",{class:"finsh",onClick:ne},"完成")]),r(i("input",{class:"color-input",type:"color",ref_key:"html5ColorRef",ref:$,"onUpdate:modelValue":l[6]||(l[6]=e=>f(A).html5Color=e),onChange:te,onInput:te},null,544),[[v,f(A).html5Color]])])],2)])),[[n,X]])}}},x(X,$(Y)))),[["__scopeId","data-v-87d63fa8"]]);Z.install=e=>e.component(Z.name,Z),"undefined"!=typeof window&&window.Vue&&install(window.Vue);export{Z as C};
