import{b as M,V as I,u as S,d as E,c as b}from"./kxchZIF5.js";import{f as O}from"./abNHIEwu.js";import{s as K,X as U,x as z,y as B,Z as N,L as j,z as V,r as F,T as H,P as W,M as q,aq as X,h as Z,j as $,W as G,a1 as k,g as J,D as A,b as P,a0 as h,ar as Q,as as y}from"./BfbmnXGr.js";import{z as Y,w as _}from"./Bs76Wral.js";const ee=K({id:String,submenu:Boolean,...U(M({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:I}}),["absolute"])},"VMenu"),se=z()({name:"VMenu",props:ee(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const s=B(a,"modelValue"),{scopeId:D}=S(),{isRtl:f}=N(),v=j(),m=V(()=>a.id||`v-menu-${v}`),o=F(),n=H(E,null),d=W(new Set);q(E,{register(){d.value.add(v)},unregister(){d.value.delete(v)},closeParents(e){setTimeout(()=>{var t;!d.value.size&&!a.persistent&&(e==null||(t=o.value)!=null&&t.contentEl&&!X(e,o.value.contentEl))&&(s.value=!1,n==null||n.closeParents())},40)}}),Z(()=>{n==null||n.unregister(),document.removeEventListener("focusin",g)}),$(()=>s.value=!1);async function g(e){var r,u,i;const t=e.relatedTarget,l=e.target;await G(),s.value&&t!==l&&((r=o.value)!=null&&r.contentEl)&&((u=o.value)!=null&&u.globalTop)&&![document,o.value.contentEl].includes(l)&&!o.value.contentEl.contains(l)&&((i=k(o.value.contentEl)[0])==null||i.focus())}J(s,e=>{e?(n==null||n.register(),h&&document.addEventListener("focusin",g,{once:!0})):(n==null||n.unregister(),h&&document.removeEventListener("focusin",g))},{immediate:!0});function x(e){n==null||n.closeParents(e)}function C(e){var t,l,r,u,i;if(!a.disabled)if(e.key==="Tab"||e.key==="Enter"&&!a.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),Q(k((t=o.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(s.value=!1,(r=(l=o.value)==null?void 0:l.activatorEl)==null||r.focus())}else a.submenu&&e.key===(f.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(i=(u=o.value)==null?void 0:u.activatorEl)==null||i.focus())}function w(e){var l;if(a.disabled)return;const t=(l=o.value)==null?void 0:l.contentEl;t&&s.value?e.key==="ArrowDown"?(e.preventDefault(),e.stopImmediatePropagation(),y(t,"next")):e.key==="ArrowUp"?(e.preventDefault(),e.stopImmediatePropagation(),y(t,"prev")):a.submenu&&(e.key===(f.value?"ArrowRight":"ArrowLeft")?s.value=!1:e.key===(f.value?"ArrowLeft":"ArrowRight")&&(e.preventDefault(),y(t,"first"))):(a.submenu?e.key===(f.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(e.key))&&(s.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>w(e))))}const T=V(()=>A({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":m.value,onKeydown:w},a.activatorProps));return Y(()=>{const e=b.filterProps(a);return P(b,A({ref:o,id:m.value,class:["v-menu",a.class],style:a.style},e,{modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,absolute:!0,activatorProps:T.value,location:a.location??(a.submenu?"end":"bottom"),"onClick:outside":x,onKeydown:C},D),{activator:c.activator,default:function(){for(var t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];return P(_,{root:"VMenu"},{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,...l)]}})}})}),O({id:m,ΨopenChildren:d},o)}});export{se as V};
