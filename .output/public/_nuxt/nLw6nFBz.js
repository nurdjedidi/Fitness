import{_ as v,V as w,b as C,a as k}from"./Da23L5hg.js";import{z as D,A as j,r as d,D as m,w as t,o as u,b as e,c as A,F as S,G as T,d as s,t as r}from"./CF4SmY_L.js";import{V as B}from"./vHbtGlrD.js";import{v as G,y as M,t as c}from"./DThk3kXI.js";import{V as f,a as U,d as F,b as V,c as I}from"./rjqthufi.js";import{V as L}from"./bFTgG7qz.js";import"./qfxyrAU0.js";import"./82mruAn-.js";import"./CofZFTzG.js";const q={__name:"goals",setup(N){const x=D(),l=j(),i=d(!1),n=d(!1),b=d([{title:"Losing weight",subtitle:"Diet and Sport Programme",description:"A complete formula for losing weight by following a balanced eating plan and appropriate exercise.",price:9.99,image:"https://placehold.co/600x400?text=Losing+weight"},{title:"Muscle gain",subtitle:"Intensive training",description:"Programme dedicated to building muscle mass. Includes targeted exercises and nutritional advice..",price:19.99,image:"https://placehold.co/600x400?text=Muscle+gain"},{title:"Detox & Well-being",subtitle:"Healthy eating and hydration",description:"Formula focused on detoxifying the body. Nutrient-rich recipes, hydration plans and wellness advice.",price:29.99,image:"https://placehold.co/600x400?text=Detox"}]),h=async p=>{n.value=!0;try{typeof l.goals!="object"&&(l.goals={goal:""}),l.goals.goal=p.title,!l.goals.goal||l.goals.goal.trim()===""?(console.log("Ajout d'un nouvel objectif..."),await l.addUserGoals()):(console.log("Mise à jour de l'objectif..."),await l.updateUserGoals()),i.value=!0}catch(a){console.error(a.message,a.stack)}finally{n.value=!1}},y=async()=>{i.value=!1,x.push("/dashboard")};return(p,a)=>(u(),m(B,null,{default:t(()=>[e(v),e(C,null,{default:t(()=>[e(G,null,{default:t(()=>[e(w,null,{default:t(()=>[(u(!0),A(T,null,S(b.value,(o,_)=>(u(),m(k,{key:_,cols:"12",sm:"6",md:"4"},{default:t(()=>[e(f,{elevation:"2"},{default:t(()=>[e(M,{src:o.image,height:"200px",cover:""},null,8,["src"]),e(U,null,{default:t(()=>[s(r(o.title),1)]),_:2},1024),e(F,null,{default:t(()=>[s(r(o.subtitle),1)]),_:2},1024),e(V,null,{default:t(()=>[s(r(o.description),1)]),_:2},1024),e(V,{class:"text-h6 font-weight-bold"},{default:t(()=>[s(r(o.price)+" € ",1)]),_:2},1024),e(I,null,{default:t(()=>[e(c,{color:"primary",loading:n.value,onClick:g=>h(o)},{default:t(()=>a[2]||(a[2]=[s(" Try ")])),_:2},1032,["loading","onClick"]),e(c,{text:"",onClick:a[0]||(a[0]=()=>{})},{default:t(()=>a[3]||(a[3]=[s(" Read more ")])),_:1}),e(L,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=g=>i.value=g),width:"auto"},{default:t(()=>[e(f,{"max-width":"400","prepend-icon":"mdi-nutrition",title:"Thanks for your purchase !",text:"Your goals was succesfully registered !"},{actions:t(()=>[e(c,{class:"ms-auto",text:"Ok",onClick:y})]),_:1})]),_:1},8,["modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}};export{q as default};
