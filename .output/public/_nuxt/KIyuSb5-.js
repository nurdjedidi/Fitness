import{_ as c}from"./S4OyEx68.js";import{r as d,c as v,a as g,b as a,w as o,o as w,d as n,N as y,t as V}from"./CJcikeEc.js";import{o as b,p as x,n as _}from"./DPm34Ok1.js";import{V as S,a as T,b as k,c as u}from"./BLy2cWDd.js";const C={class:"intro-img"},j={__name:"login",setup(N){const t=d({email:"",password:""}),r=d(!1),s=d(!1),m=async()=>{r.value=!0;const l=await fetch("api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value.email,password:t.value.password})});if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);const e=await l.json();e.error&&(error.value=e.error),r.value=!1},p=()=>{s.value=!s.value};return(l,e)=>{const f=c;return w(),v("section",C,[e[5]||(e[5]=g("div",{class:"overlay"},null,-1)),a(b,{class:"d-flex justify-center align-center",style:{height:"100vh"}},{default:o(()=>[a(S,{class:"glass-card pa-12 rounded-lg shadow-sm",elevation:"3","max-width":"600",color:"transparent"},{default:o(()=>[a(T,{class:"text-h5 font-weight-bold text-center mb-4"},{default:o(()=>e[2]||(e[2]=[n("Sign In to Your Account")])),_:1}),a(k,{class:"d-flex flex-column",onSubmit:y(m,["prevent"])},{default:o(()=>[a(u,{modelValue:t.value.email,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value.email=i),label:"Email",type:"email",name:"email",variant:"outlined",density:"comfortable",color:"primary",required:""},null,8,["modelValue"]),a(u,{modelValue:t.value.password,"onUpdate:modelValue":e[1]||(e[1]=i=>t.value.password=i),type:s.value?"text":"password",label:"Password",name:"password",variant:"outlined",density:"comfortable",color:"primary",required:""},{"append-inner":o(()=>[a(x,{onClick:p,class:"cursor-pointer"},{default:o(()=>[n(V(s.value?"mdi-eye":"mdi-eye-off"),1)]),_:1})]),_:1},8,["modelValue","type"]),a(f,{class:"signup-link mb-6",to:"/signup"},{default:o(()=>e[3]||(e[3]=[n("Don't have an account?")])),_:1}),a(_,{class:"submit-btn",type:"submit",loading:r.value,"aria-label":"Sign In"},{default:o(()=>e[4]||(e[4]=[n(" Sign In ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])}}};export{j as default};
