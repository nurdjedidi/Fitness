import{u as q,m as G,r as b,n as m,o as n,w as e,b as t,a as p,c as y,p as C,F as h,d as i,q as T,s as u,t as o,v as F}from"./CnE-bfcQ.js";import{_ as O}from"./DlAUqK2U.js";import{V as w,a as k,b as H}from"./SYp7mbB9.js";import{V as P,a as j,b as S,c as z,d as g,e as B}from"./z_Twlic2.js";import{V as v,a as E,b as L,c as M}from"./UCIaZ9sb.js";import{V as Y}from"./C8Si939t.js";import{V as $}from"./BQoeLcGX.js";import{V as I}from"./DQCcqo34.js";import{V as J}from"./CgUJ9hsA.js";import"./DWGaNmQL.js";const K={class:"d-flex align-center justify-center fill-height"},Q={class:"text-h6 font-weight-bold"},W={__name:"goals",setup(X){const N=q(),l=G(),c=b(!1),f=b(!1),U=b([{title:"Perte de poids",subtitle:"Programme Nutrition & Sport",description:"Un programme complet pour perdre du poids en suivant un plan alimentaire équilibré et des exercices adaptés.",price:9.99,icon:"mdi-scale-bathroom",image:"/images/weight-loss.jpg",features:["Plan alimentaire","Exercices guidés","Suivi des calories","Conseils nutritionnels"]},{title:"Prise de masse",subtitle:"Entraînement Intensif",description:"Programme dédié à la prise de masse musculaire. Inclut des exercices ciblés et des conseils nutritionnels.",price:19.99,icon:"mdi-weight-lifter",image:"/images/muscle-gain.jpg",features:["Programme musculation","Plan protéiné","Exercices avancés","Suivi progression"]},{title:"Bien-être",subtitle:"Alimentation & Hydratation",description:"Programme axé sur le bien-être général. Recettes riches en nutriments, plans d'hydratation et conseils bien-être.",price:29.99,icon:"mdi-sprout",image:"/images/wellness.jpg",features:["Recettes healthy","Méditation","Yoga","Conseils lifestyle"]}]),A=async V=>{f.value=!0;try{typeof l.goals!="object"&&(l.goals={goal:""}),l.goals.goal=V.title,!l.goals.goal||l.goals.goal.trim()===""?await l.addUserGoals():await l.updateUserGoals(),c.value=!0}catch(a){console.error("Erreur:",a.message)}finally{f.value=!1}},D=()=>{c.value=!1,N.push("/overview")};return(V,a)=>(n(),m(H,{fluid:"",class:"goals-page pa-6"},{default:e(()=>[t(k,{class:"mb-6"},{default:e(()=>[t(w,{cols:"12"},{default:e(()=>a[1]||(a[1]=[p("div",{class:"text-h4 font-weight-bold mb-2"},"Choisissez Votre Objectif",-1),p("div",{class:"text-subtitle-1 text-medium-emphasis"},"Sélectionnez le programme qui correspond le mieux à vos objectifs de fitness",-1)])),_:1})]),_:1}),t(k,null,{default:e(()=>[(n(!0),y(h,null,C(U.value,(s,R)=>(n(),m(w,{key:R,cols:"12",sm:"6",md:"4"},{default:e(()=>{var _;return[t(P,{class:T(["h-100 goal-card",{"selected-goal":((_=u(l).goals)==null?void 0:_.goal)===s.title}]),elevation:"3"},{default:e(()=>[t(L,{src:s.image,height:"200",cover:"",class:"goal-image"},{placeholder:e(()=>[p("div",K,[t(M,{indeterminate:"",color:"primary"})])]),_:2},1032,["src"]),t(j,null,{prepend:e(()=>[t(v,{icon:s.icon,color:"primary",size:"32"},null,8,["icon"])]),default:e(()=>[t(S,null,{default:e(()=>[i(o(s.title),1)]),_:2},1024),t(z,null,{default:e(()=>[i(o(s.subtitle),1)]),_:2},1024)]),_:2},1024),t(g,{class:"text-body-1"},{default:e(()=>[i(o(s.description),1)]),_:2},1024),t(g,null,{default:e(()=>[(n(!0),y(h,null,C(s.features,(r,d)=>(n(),m(I,{key:d,class:"me-2 mb-2",color:"primary",variant:"tonal",size:"small"},{default:e(()=>[i(o(r),1)]),_:2},1024))),128))]),_:2},1024),t(g,{class:"d-flex align-center justify-space-between pt-0"},{default:e(()=>{var r;return[p("span",Q,o(s.price)+" €",1),((r=u(l).goals)==null?void 0:r.goal)===s.title?(n(),m(I,{key:0,color:"success",variant:"tonal"},{default:e(()=>a[2]||(a[2]=[i(" Programme actuel ")])),_:1})):F("",!0)]}),_:2},1024),t(J),t(B,{class:"pa-4"},{default:e(()=>{var r;return[t(E,{block:"",color:"primary",variant:"elevated",loading:f.value,onClick:d=>A(s),disabled:((r=u(l).goals)==null?void 0:r.goal)===s.title},{default:e(()=>{var d;return[t(v,{start:""},{default:e(()=>{var x;return[i(o(((x=u(l).goals)==null?void 0:x.goal)===s.title?"mdi-check":"mdi-lightning-bolt"),1)]}),_:2},1024),i(" "+o(((d=u(l).goals)==null?void 0:d.goal)===s.title?"Programme Actif":"Commencer"),1)]}),_:2},1032,["loading","onClick","disabled"])]}),_:2},1024)]),_:2},1032,["class"])]}),_:2},1024))),128))]),_:1}),t($,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=s=>c.value=s),"max-width":"400"},{default:e(()=>[t(P,{class:"pa-4"},{default:e(()=>[t(j,null,{prepend:e(()=>[t(v,{color:"success",size:"32"},{default:e(()=>a[3]||(a[3]=[i("mdi-check-circle")])),_:1})]),default:e(()=>[t(S,null,{default:e(()=>a[4]||(a[4]=[i("Objectif Enregistré !")])),_:1}),t(z,null,{default:e(()=>a[5]||(a[5]=[i("Votre nouveau programme a été activé avec succès.")])),_:1})]),_:1}),t(g,{class:"pt-4"},{default:e(()=>a[6]||(a[6]=[i(" Vous pouvez maintenant commencer à suivre votre progression dans le tableau de bord. ")])),_:1}),t(B,null,{default:e(()=>[t(Y),t(E,{color:"primary",variant:"elevated",onClick:D},{default:e(()=>a[7]||(a[7]=[i(" Aller au tableau de bord ")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},de=O(W,[["__scopeId","data-v-44df5dfc"]]);export{de as default};
