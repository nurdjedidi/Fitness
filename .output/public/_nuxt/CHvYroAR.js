import{m as P,x as J,C as K,u as O,d as Q,H as $,I as G,e as X,h as Y,M as b}from"./C83YROqa.js";import{m as T,Q as Z,R as p,S as ee,p as D,b as a,x as z,q as te,T as ae,v as S,r as ne,g as I,U as re,V as le,O as ie,h as se,K as j,L as ue,J as oe,F as ce,z as de,W as ge}from"./D7vvNHkL.js";function ye(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",u=arguments.length>2?arguments[2]:void 0;return T()({name:u??Z(p(e.replace(/__/g,"-"))),props:{tag:{type:String,default:o},...P()},setup(n,g){let{slots:c}=g;return()=>{var y;return ee(n.tag,{class:[e,n.class],style:n.style},(y=c.default)==null?void 0:y.call(c))}}})}function ve(e){return{aspectStyles:z(()=>{const o=Number(e.aspectRatio);return o?{paddingBottom:String(1/o*100)+"%"}:void 0})}}const E=D({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...P(),...J()},"VResponsive"),x=T()({name:"VResponsive",props:E(),setup(e,o){let{slots:u}=o;const{aspectStyles:n}=ve(e),{dimensionStyles:g}=K(e);return O(()=>{var c;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[a("div",{class:"v-responsive__sizer",style:n.value},null),(c=u.additional)==null?void 0:c.call(u),u.default&&a("div",{class:["v-responsive__content",e.contentClass]},[u.default()])])}),{}}}),me=D({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...E(),...P(),...Q(),...$()},"VImg"),_e=T()({name:"VImg",directives:{intersect:G},props:me(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:u,slots:n}=o;const{backgroundColorClasses:g,backgroundColorStyles:c}=X(te(e,"color")),{roundedClasses:y}=Y(e),_=ae("VImg"),V=S(""),i=ne(),l=S(e.eager?"loading":"idle"),v=S(),h=S(),s=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=z(()=>s.value.aspect||v.value/h.value||0);I(()=>e.src,()=>{R(l.value!=="idle")}),I(m,(t,r)=>{!t&&r&&i.value&&f(i.value)}),re(()=>R());function R(t){if(!(e.eager&&t)&&!(le&&!t&&!e.eager)){if(l.value="loading",s.value.lazySrc){const r=new Image;r.src=s.value.lazySrc,f(r,null)}s.value.src&&ie(()=>{var r;u("loadstart",((r=i.value)==null?void 0:r.currentSrc)||s.value.src),setTimeout(()=>{var d;if(!_.isUnmounted)if((d=i.value)!=null&&d.complete){if(i.value.naturalWidth||w(),l.value==="error")return;m.value||f(i.value,null),l.value==="loading"&&k()}else m.value||f(i.value),B()})})}}function k(){var t;_.isUnmounted||(B(),f(i.value),l.value="loaded",u("load",((t=i.value)==null?void 0:t.currentSrc)||s.value.src))}function w(){var t;_.isUnmounted||(l.value="error",u("error",((t=i.value)==null?void 0:t.currentSrc)||s.value.src))}function B(){const t=i.value;t&&(V.value=t.currentSrc||t.src)}let C=-1;se(()=>{clearTimeout(C)});function f(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{if(clearTimeout(C),_.isUnmounted)return;const{naturalHeight:N,naturalWidth:W}=t;N||W?(v.value=W,h.value=N):!t.complete&&l.value==="loading"&&r!=null?C=window.setTimeout(d,r):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,h.value=1)};d()}const U=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),H=()=>{var d;if(!s.value.src||l.value==="idle")return null;const t=a("img",{class:["v-img__img",U.value],style:{objectPosition:e.position},src:s.value.src,srcset:s.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:k,onError:w},null),r=(d=n.sources)==null?void 0:d.call(n);return a(b,{transition:e.transition,appear:!0},{default:()=>[j(r?a("picture",{class:"v-img__picture"},[r,t]):t,[[ge,l.value==="loaded"]])]})},M=()=>a(b,{transition:e.transition},{default:()=>[s.value.lazySrc&&l.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",U.value],style:{objectPosition:e.position},src:s.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),q=()=>n.placeholder?a(b,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!n.error)&&a("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,A=()=>n.error?a(b,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&a("div",{class:"v-img__error"},[n.error()])]}):null,L=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,F=S(!1);{const t=I(m,r=>{r&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{F.value=!0})}),t())})}return O(()=>{const t=x.filterProps(e);return j(a(x,ce({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!F.value},g.value,y.value,e.class],style:[{width:de(e.width==="auto"?v.value:e.width)},c.value,e.style]},t,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(oe,null,[a(H,null,null),a(M,null,null),a(L,null,null),a(q,null,null),a(A,null,null)]),default:n.default}),[[ue("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:V,image:i,state:l,naturalWidth:v,naturalHeight:h}}});export{_e as V,ye as c};
