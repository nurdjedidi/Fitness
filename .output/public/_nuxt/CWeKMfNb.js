import{U as H,E as F,R as q,ao as h,$ as ye,r as P,y as T,L as Z,G as v,h as me,aa as Ye,B as C,Y as Ze,aL as ge,K as et,an as tt,aS as nt,O as j,z as _,b as c,S as Se,V as at,ai as G,A as be,g as lt,C as he,aT as it,T as st,F as oe,N as ee,X as rt,aU as O,a1 as pe,H as ut,a6 as ot}from"./CnE-bfcQ.js";import{m as E,d as R,u as $,l as te,M as ct,n as dt,q as vt,e as ke,r as Ce,s as we,f as Ie,g as Ae,N as ft,w as Ve,R as yt,Q as mt,i as Pe,x as gt,y as Le,z as Oe,j as Be,k as Me,D as St,J as ce,V as de,C as bt,h as ht}from"./UCIaZ9sb.js";import{V as pt}from"./CgUJ9hsA.js";const ne=Symbol.for("vuetify:list");function je(){const e=H(ne,{hasPrepend:F(!1),updateHasPrepend:()=>null}),l={hasPrepend:F(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return q(ne,l),e}function Te(){return H(ne,null)}const le=e=>{const l={activate:t=>{let{id:n,value:i,activated:a}=t;return n=h(n),e&&!i&&a.size===1&&a.has(n)||(i?a.add(n):a.delete(n)),a},in:(t,n,i)=>{let a=new Set;if(t!=null)for(const s of ye(t))a=l.activate({id:s,value:!0,activated:new Set(a),children:n,parents:i});return a},out:t=>Array.from(t)};return l},xe=e=>{const l=le(e);return{activate:n=>{let{activated:i,id:a,...s}=n;a=h(a);const u=i.has(a)?new Set([a]):new Set;return l.activate({...s,id:a,activated:u})},in:(n,i,a)=>{let s=new Set;if(n!=null){const u=ye(n);u.length&&(s=l.in(u.slice(0,1),i,a))}return s},out:(n,i,a)=>l.out(n,i,a)}},kt=e=>{const l=le(e);return{activate:n=>{let{id:i,activated:a,children:s,...u}=n;return i=h(i),s.has(i)?a:l.activate({id:i,activated:a,children:s,...u})},in:l.in,out:l.out}},Ct=e=>{const l=xe(e);return{activate:n=>{let{id:i,activated:a,children:s,...u}=n;return i=h(i),s.has(i)?a:l.activate({id:i,activated:a,children:s,...u})},in:l.in,out:l.out}},wt={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){const a=new Set;a.add(l);let s=i.get(l);for(;s!=null;)a.add(s),s=i.get(s);return a}else return n.delete(l),n},select:()=>null},Fe={open:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(t){let a=i.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=i.get(a);return n}else n.delete(l);return n},select:()=>null},It={open:Fe.open,select:e=>{let{id:l,value:t,opened:n,parents:i}=e;if(!t)return n;const a=[];let s=i.get(l);for(;s!=null;)a.push(s),s=i.get(s);return new Set(a)}},ie=e=>{const l={select:t=>{let{id:n,value:i,selected:a}=t;if(n=h(n),e&&!i){const s=Array.from(a.entries()).reduce((u,b)=>{let[f,g]=b;return g==="on"&&u.push(f),u},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,i?"on":"off"),a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:t=>{const n=[];for(const[i,a]of t.entries())a==="on"&&n.push(i);return n}};return l},_e=e=>{const l=ie(e);return{select:n=>{let{selected:i,id:a,...s}=n;a=h(a);const u=i.has(a)?new Map([[a,i.get(a)]]):new Map;return l.select({...s,id:a,selected:u})},in:(n,i,a)=>{let s=new Map;return n!=null&&n.length&&(s=l.in(n.slice(0,1),i,a)),s},out:(n,i,a)=>l.out(n,i,a)}},At=e=>{const l=ie(e);return{select:n=>{let{id:i,selected:a,children:s,...u}=n;return i=h(i),s.has(i)?a:l.select({id:i,selected:a,children:s,...u})},in:l.in,out:l.out}},Vt=e=>{const l=_e(e);return{select:n=>{let{id:i,selected:a,children:s,...u}=n;return i=h(i),s.has(i)?a:l.select({id:i,selected:a,children:s,...u})},in:l.in,out:l.out}},Pt=e=>{const l={select:t=>{let{id:n,value:i,selected:a,children:s,parents:u}=t;n=h(n);const b=new Map(a),f=[n];for(;f.length;){const y=f.shift();a.set(h(y),i?"on":"off"),s.has(y)&&f.push(...s.get(y))}let g=h(u.get(n));for(;g;){const y=s.get(g),p=y.every(r=>a.get(h(r))==="on"),S=y.every(r=>!a.has(h(r))||a.get(h(r))==="off");a.set(g,p?"on":S?"off":"indeterminate"),g=h(u.get(g))}return e&&!i&&Array.from(a.entries()).reduce((p,S)=>{let[r,o]=S;return o==="on"&&p.push(r),p},[]).length===0?b:a},in:(t,n,i)=>{let a=new Map;for(const s of t||[])a=l.select({id:s,value:!0,selected:new Map(a),children:n,parents:i});return a},out:(t,n)=>{const i=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&i.push(a);return i}};return l},N=Symbol.for("vuetify:nested"),De={id:F(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:P(!1),selectable:P(!1),opened:P(new Set),activated:P(new Set),selected:P(new Map),selectedValues:P([]),getPath:()=>[]}},Lt=T({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Ot=e=>{let l=!1;const t=P(new Map),n=P(new Map),i=Z(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return kt(e.mandatory);case"single-leaf":return Ct(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":default:return xe(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Vt(e.mandatory);case"leaf":return At(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":return _e(e.mandatory);case"classic":default:return Pt(e.mandatory)}}),u=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return It;case"single":return wt;case"multiple":default:return Fe}}),b=Z(e,"activated",e.activated,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value)),f=Z(e,"selected",e.selected,r=>s.value.in(r,t.value,n.value),r=>s.value.out(r,t.value,n.value));me(()=>{l=!0});function g(r){const o=[];let d=r;for(;d!=null;)o.unshift(d),d=n.value.get(d);return o}const y=Ye("nested"),p=new Set,S={id:F(),root:{opened:i,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:b,selected:f,selectedValues:v(()=>{const r=[];for(const[o,d]of f.value.entries())d==="on"&&r.push(o);return r}),register:(r,o,d)=>{if(p.has(r)){g(r).map(String).join(" -> "),g(o).concat(r).map(String).join(" -> ");return}else p.add(r);o&&r!==o&&n.value.set(r,o),d&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{if(l)return;p.delete(r),t.value.delete(r);const o=n.value.get(r);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(k=>k!==r))}n.value.delete(r)},open:(r,o,d)=>{y.emit("click:open",{id:r,value:o,path:g(r),event:d});const k=u.value.open({id:r,value:o,opened:new Set(i.value),children:t.value,parents:n.value,event:d});k&&(i.value=k)},openOnSelect:(r,o,d)=>{const k=u.value.select({id:r,value:o,selected:new Map(f.value),opened:new Set(i.value),children:t.value,parents:n.value,event:d});k&&(i.value=k)},select:(r,o,d)=>{y.emit("click:select",{id:r,value:o,path:g(r),event:d});const k=s.value.select({id:r,value:o,selected:new Map(f.value),children:t.value,parents:n.value,event:d});k&&(f.value=k),S.root.openOnSelect(r,o,d)},activate:(r,o,d)=>{if(!e.activatable)return S.root.select(r,!0,d);y.emit("click:activate",{id:r,value:o,path:g(r),event:d});const k=a.value.activate({id:r,value:o,activated:new Set(b.value),children:t.value,parents:n.value,event:d});k&&(b.value=k)},children:t,parents:n,getPath:g}};return q(N,S),S.root},Ge=(e,l)=>{const t=H(N,De),n=Symbol(Ze()),i=v(()=>e.value!==void 0?e.value:n),a={...t,id:i,open:(s,u)=>t.root.open(i.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(i.value,s,u),isOpen:v(()=>t.root.opened.value.has(i.value)),parent:v(()=>t.root.parents.value.get(i.value)),activate:(s,u)=>t.root.activate(i.value,s,u),isActivated:v(()=>t.root.activated.value.has(h(i.value))),select:(s,u)=>t.root.select(i.value,s,u),isSelected:v(()=>t.root.selected.value.get(h(i.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(h(i.value))==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return ge(()=>{!t.isGroupActivator&&t.root.register(i.value,t.id.value,l)}),me(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&q(N,a),a},Bt=()=>{const e=H(N,De);q(N,{...e,isGroupActivator:!0})};function Mt(){const e=F(!1);return et(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:tt(e)}}const jt=nt({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Bt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Tt=T({activeColor:String,baseColor:String,color:String,collapseIcon:{type:j,default:"$collapse"},expandIcon:{type:j,default:"$expand"},prependIcon:j,appendIcon:j,fluid:Boolean,subgroup:Boolean,title:String,value:null,...E(),...R()},"VListGroup"),ve=_()({name:"VListGroup",props:Tt(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:i,id:a}=Ge(C(e,"value"),!0),s=v(()=>`v-list-group--id-${String(a.value)}`),u=Te(),{isBooted:b}=Mt();function f(S){S.stopPropagation(),i(!n.value,S)}const g=v(()=>({onClick:f,class:"v-list-group__header",id:s.value})),y=v(()=>n.value?e.collapseIcon:e.expandIcon),p=v(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return $(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&c(te,{defaults:p.value},{default:()=>[c(jt,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),c(ct,{transition:{component:dt},disabled:!b.value},{default:()=>{var S;return[Se(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(S=t.default)==null?void 0:S.call(t)]),[[at,n.value]])]}})]})),{isOpen:n}}}),xt=T({opacity:[Number,String],...E(),...R()},"VListItemSubtitle"),Ft=_()({name:"VListItemSubtitle",props:xt(),setup(e,l){let{slots:t}=l;return $(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),_t=vt("v-list-item-title"),Dt=T({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:j,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:G(),onClickOnce:G(),...ke(),...E(),...Ce(),...we(),...Ie(),...Ae(),...ft(),...R(),...be(),...Ve({variant:"text"})},"VListItem"),fe=_()({name:"VListItem",directives:{Ripple:yt},props:Dt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:i}=l;const a=mt(e,t),s=v(()=>e.value===void 0?a.href.value:e.value),{activate:u,isActivated:b,select:f,isOpen:g,isSelected:y,isIndeterminate:p,isGroupActivator:S,root:r,parent:o,openOnSelect:d,id:k}=Ge(s,!1),I=Te(),L=v(()=>{var m;return e.active!==!1&&(e.active||((m=a.isActive)==null?void 0:m.value)||(r.activatable.value?b.value:y.value))}),D=v(()=>e.link!==!1&&a.isLink.value),B=v(()=>!!I&&(r.selectable.value||r.activatable.value||e.value!=null)),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||B.value)),z=v(()=>e.rounded||e.nav),X=v(()=>e.color??e.activeColor),J=v(()=>({color:L.value?X.value??e.baseColor:e.baseColor,variant:e.variant}));lt(()=>{var m;return(m=a.isActive)==null?void 0:m.value},m=>{m&&U()}),ge(()=>{var m;(m=a.isActive)!=null&&m.value&&U()});function U(){o.value!=null&&r.open(o.value,!0),d(!0)}const{themeClasses:Q}=he(e),{borderClasses:M}=Pe(e),{colorClasses:w,colorStyles:x,variantClasses:$e}=gt(J),{densityClasses:Ue}=Le(e),{dimensionStyles:Ke}=Oe(e),{elevationClasses:He}=Be(e),{roundedClasses:qe}=Me(z),ze=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),W=v(()=>({isActive:L.value,select:f,isOpen:g.value,isSelected:y.value,isIndeterminate:p.value}));function Xe(m){var K;i("click",m),A.value&&((K=a.navigate)==null||K.call(a,m),!S&&(r.activatable.value?u(!b.value,m):(r.selectable.value||e.value!=null)&&f(!y.value,m)))}function Je(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.target.dispatchEvent(new MouseEvent("click",m)))}return $(()=>{const m=D.value?"a":e.tag,K=n.title||e.title!=null,Qe=n.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),We=!!(se||n.append),re=!!(e.prependAvatar||e.prependIcon),Y=!!(re||n.prepend);return I==null||I.updateHasPrepend(Y),e.activeColor&&it("active-color",["color","base-color"]),Se(c(m,ee({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},Q.value,M.value,w.value,Ue.value,He.value,ze.value,qe.value,$e.value,e.class],style:[x.value,Ke.value,e.style],tabindex:A.value?I?-2:0:void 0,"aria-selected":B.value?r.activatable.value?b.value:r.selectable.value?y.value:L.value:void 0,onClick:Xe,onKeydown:A.value&&!D.value&&Je},a.linkProps),{default:()=>{var ue;return[St(A.value||L.value,"v-list-item"),Y&&c("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?c(te,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=n.prepend)==null?void 0:V.call(n,W.value)]}}):c(oe,null,[e.prependAvatar&&c(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(de,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[K&&c(_t,{key:"title"},{default:()=>{var V;return[((V=n.title)==null?void 0:V.call(n,{title:e.title}))??e.title]}}),Qe&&c(Ft,{key:"subtitle"},{default:()=>{var V;return[((V=n.subtitle)==null?void 0:V.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=n.default)==null?void 0:ue.call(n,W.value)]),We&&c("div",{key:"append",class:"v-list-item__append"},[n.append?c(te,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=n.append)==null?void 0:V.call(n,W.value)]}}):c(oe,null,[e.appendIcon&&c(de,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[st("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:b,isGroupActivator:S,isSelected:y,list:I,select:f,root:r,id:k}}}),Gt=T({color:String,inset:Boolean,sticky:Boolean,title:String,...E(),...R()},"VListSubheader"),Nt=_()({name:"VListSubheader",props:Gt(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:i}=bt(C(e,"color"));return $(()=>{const a=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var s;return[a&&c("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Et=T({items:Array,returnObject:Boolean},"VListChildren"),Ne=_()({name:"VListChildren",props:Et(),setup(e,l){let{slots:t}=l;return je(),()=>{var n,i;return((n=t.default)==null?void 0:n.call(t))??((i=e.items)==null?void 0:i.map(a=>{var p,S;let{children:s,props:u,type:b,raw:f}=a;if(b==="divider")return((p=t.divider)==null?void 0:p.call(t,{props:u}))??c(pt,u,null);if(b==="subheader")return((S=t.subheader)==null?void 0:S.call(t,{props:u}))??c(Nt,u,null);const g={subtitle:t.subtitle?r=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...r,item:f})}:void 0,prepend:t.prepend?r=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...r,item:f})}:void 0,append:t.append?r=>{var o;return(o=t.append)==null?void 0:o.call(t,{...r,item:f})}:void 0,title:t.title?r=>{var o;return(o=t.title)==null?void 0:o.call(t,{...r,item:f})}:void 0},y=ve.filterProps(u);return s?c(ve,ee({value:u==null?void 0:u.value},y),{activator:r=>{let{props:o}=r;const d={...u,...o,value:e.returnObject?f:u.value};return t.header?t.header({props:d}):c(fe,d,g)},default:()=>c(Ne,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):c(fe,ee(u,{value:e.returnObject?f:u.value}),g)}))}}}),Rt=T({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:rt}},"list-items");function ae(e,l){const t=O(l,e.itemTitle,l),n=O(l,e.itemValue,t),i=O(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?pe(l,["children"]):l:void 0:O(l,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(i)?Ee(e,i):void 0,raw:l}}function Ee(e,l){const t=[];for(const n of l)t.push(ae(e,n));return t}function Jt(e){const l=v(()=>Ee(e,e.items)),t=v(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?ae(e,s):l.value.find(u=>e.valueComparator(s,u.value))||ae(e,s))}function i(a){return e.returnObject?a.map(s=>{let{raw:u}=s;return u}):a.map(s=>{let{value:u}=s;return u})}return{items:l,transformIn:n,transformOut:i}}function $t(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ut(e,l){const t=O(l,e.itemType,"item"),n=$t(l)?l:O(l,e.itemTitle),i=O(l,e.itemValue,void 0),a=O(l,e.itemChildren),s=e.itemProps===!0?pe(l,["children"]):O(l,e.itemProps),u={title:n,value:i,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?Re(e,a):void 0,raw:l}}function Re(e,l){const t=[];for(const n of l)t.push(Ut(e,n));return t}function Kt(e){return{items:v(()=>Re(e,e.items))}}const Ht=T({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:j,collapseIcon:j,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":G(),"onClick:select":G(),"onUpdate:opened":G(),...Lt({selectStrategy:"single-leaf",openStrategy:"list"}),...ke(),...E(),...Ce(),...we(),...Ie(),itemType:{type:String,default:"type"},...Rt(),...Ae(),...R(),...be(),...Ve({variant:"text"})},"VList"),Qt=_()({name:"VList",props:Ht(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Kt(e),{themeClasses:i}=he(e),{backgroundColorClasses:a,backgroundColorStyles:s}=ht(C(e,"bgColor")),{borderClasses:u}=Pe(e),{densityClasses:b}=Le(e),{dimensionStyles:f}=Oe(e),{elevationClasses:g}=Be(e),{roundedClasses:y}=Me(e),{children:p,open:S,parents:r,select:o,getPath:d}=Ot(e),k=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=C(e,"activeColor"),L=C(e,"baseColor"),D=C(e,"color");je(),ut({VListGroup:{activeColor:I,baseColor:L,color:D,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:I,baseColor:L,color:D,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const B=F(!1),A=P();function z(w){B.value=!0}function X(w){B.value=!1}function J(w){var x;!B.value&&!(w.relatedTarget&&((x=A.value)!=null&&x.contains(w.relatedTarget)))&&M()}function U(w){const x=w.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(x.tagName))){if(w.key==="ArrowDown")M("next");else if(w.key==="ArrowUp")M("prev");else if(w.key==="Home")M("first");else if(w.key==="End")M("last");else return;w.preventDefault()}}function Q(w){B.value=!0}function M(w){if(A.value)return ot(A.value,w)}return $(()=>c(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},i.value,a.value,u.value,b.value,g.value,k.value,y.value,e.class],style:[s.value,f.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:z,onFocusout:X,onFocus:J,onKeydown:U,onMousedown:Q},{default:()=>[c(Ne,{items:n.value,returnObject:e.returnObject},t)]})),{open:S,select:o,focus:M,children:p,parents:r,getPath:d}}});export{Qt as V,fe as a,_t as b,Ft as c,Nt as d,Jt as e,Rt as m,Mt as u};
