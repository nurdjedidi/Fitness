import{m as p,u as b}from"./UCIaZ9sb.js";import{d as v,e as y}from"./-kXLlAqy.js";import{f as F}from"./DWGaNmQL.js";import{y as V,z as h,r as R,b as P}from"./CnE-bfcQ.js";const k=V({...p(),...v()},"VForm"),w=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=y(r),m=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var s;let{valid:d}=c;d&&((s=m.value)==null||s.submit())}),o.preventDefault()}return b(()=>{var t;return P("form",{ref:m,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),F(a,m)}});export{w as V};
