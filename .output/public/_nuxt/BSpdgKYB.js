import{_ as c}from"./CAQRyaIa.js";import{r as d,c as v,a as g,b as a,w as t,o as w,d as r,H as y,t as V}from"./D7vvNHkL.js";import{n as b,o as x,k as _}from"./C83YROqa.js";import{V as k,a as S,b as T,c as u}from"./BpVMrrw1.js";import"./CHvYroAR.js";import"./Dc2hJ-Ms.js";const C={class:"intro-img"},q={__name:"signup",setup(U){const o=d({email:"",password:""}),n=d(!1),s=d(!1),m=async()=>{n.value=!0;const l=await fetch("api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.value.email,password:o.value.password})});if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);const e=await l.json();e.error&&(error.value=e.error),n.value=!1},p=()=>{s.value=!s.value};return(l,e)=>{const f=c;return w(),v("section",C,[e[5]||(e[5]=g("div",{class:"overlay"},null,-1)),a(b,{class:"d-flex justify-center align-center",style:{height:"100vh"}},{default:t(()=>[a(k,{class:"glass-card pa-12 rounded-lg shadow-sm",elevation:"3","max-width":"600",color:"transparent"},{default:t(()=>[a(S,{class:"text-h5 font-weight-bold text-center mb-4"},{default:t(()=>e[2]||(e[2]=[r("Sign Up to create an Account")])),_:1}),a(T,{class:"d-flex flex-column",onSubmit:y(m,["prevent"])},{default:t(()=>[a(u,{modelValue:o.value.email,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value.email=i),label:"Email",type:"email",name:"email",variant:"outlined",density:"comfortable",color:"primary",required:""},null,8,["modelValue"]),a(u,{modelValue:o.value.password,"onUpdate:modelValue":e[1]||(e[1]=i=>o.value.password=i),type:s.value?"text":"password",label:"Password",name:"password",variant:"outlined",density:"comfortable",color:"primary",required:""},{"append-inner":t(()=>[a(x,{onClick:p,class:"cursor-pointer"},{default:t(()=>[r(V(s.value?"mdi-eye":"mdi-eye-off"),1)]),_:1})]),_:1},8,["modelValue","type"]),a(f,{class:"signIn-link mb-6",to:"/login"},{default:t(()=>e[3]||(e[3]=[r("Already have an account?")])),_:1}),a(_,{class:"submit-btn",type:"submit",loading:n.value,"aria-label":"Sign Up"},{default:t(()=>e[4]||(e[4]=[r(" Sign Up ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])}}};export{q as default};
