import{_ as g}from"./C3gRy0Dl.js";import{u as V,m as w,r as i,c as y,a as b,b as a,w as o,o as x,d as l,q as _,t as S}from"./zPG0K0F5.js";import{V as k,d as C,b as h}from"./CPTwAk1v.js";import{V as B,a as I}from"./BSfcJ8p0.js";import{V as N}from"./TrDAeaSU.js";import{V as d}from"./08lTOavN.js";import"./BhZ_GBvQ.js";const q={class:"intro-img"},L={__name:"login",setup(P){const m=V(),p=w(),t=i({email:"",password:""}),r=i(!1),s=i(!1),f=async()=>{r.value=!0;try{await p.signin(t.value.email,t.value.password),m.push("/overview")}catch(u){console.error(u.message)}finally{r.value=!1}},c=()=>{s.value=!s.value};return(u,e)=>{const v=g;return x(),y("section",q,[e[5]||(e[5]=b("div",{class:"overlay"},null,-1)),a(k,{class:"d-flex justify-center align-center",style:{height:"100vh"}},{default:o(()=>[a(B,{class:"glass-card pa-12 rounded-lg shadow-sm",elevation:"3","max-width":"600",color:"transparent"},{default:o(()=>[a(I,{class:"text-h5 font-weight-bold text-center mb-4"},{default:o(()=>e[2]||(e[2]=[l("Sign In to Your Account")])),_:1}),a(N,{class:"d-flex flex-column",onSubmit:_(f,["prevent"])},{default:o(()=>[a(d,{modelValue:t.value.email,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value.email=n),label:"Email",type:"email",name:"email",variant:"outlined",density:"comfortable",color:"primary",required:""},null,8,["modelValue"]),a(d,{modelValue:t.value.password,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value.password=n),type:s.value?"text":"password",label:"Password",name:"password",variant:"outlined",density:"comfortable",color:"primary",required:""},{"append-inner":o(()=>[a(C,{onClick:c,class:"cursor-pointer"},{default:o(()=>[l(S(s.value?"mdi-eye":"mdi-eye-off"),1)]),_:1})]),_:1},8,["modelValue","type"]),a(v,{class:"signup-link mb-6",to:"/signup"},{default:o(()=>e[3]||(e[3]=[l("Don't have an account?")])),_:1}),a(h,{class:"submit-btn",type:"submit",loading:r.value,"aria-label":"Sign In"},{default:o(()=>e[4]||(e[4]=[l(" Sign In ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])}}};export{L as default};
