"use strict";(self.webpackChunkconfetti_docs=self.webpackChunkconfetti_docs||[]).push([[406],{80:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var s=t(5893),i=t(1151),a=t(4866),l=t(5162),r=t(9286),c=t(4999),o=t.n(c);const d={},p="Find one",u={id:"payments/find",title:"Find one",description:"{${JSON.stringify(confetti.models.payment.sample.single.formatted, null, 2)}}",source:"@site/docs/payments/find.mdx",sourceDirName:"payments",slug:"/payments/find",permalink:"/docs/payments/find",draft:!1,unlisted:!1,editUrl:"https://github.com/confetti/confetti-docs/docs/payments/find.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Find all",permalink:"/docs/events/findAll"},next:{title:"Find all",permalink:"/docs/payments/findAll"}},f={},m=[];function h(e){const n={code:"code",h1:"h1",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"find-one",children:"Find one"}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)(l.Z,{value:"javascript",label:"JavaScript",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const Confetti = require('confetti')\n\nconst confetti = new Confetti({ apiKey: 'your-key' })\nconst ticket = await confetti.payments.find(2)\n"})}),(0,s.jsx)(r.Z,{language:"javascript",title:"Result",children:`${JSON.stringify(o().models.payment.sample.single.formatted,null,2)}`})]}),(0,s.jsxs)(l.Z,{value:"curl",label:"curl",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl "https://api.confetti.events/payments/2"\n  -H "Authorization: apikey your-key"\n'})}),(0,s.jsx)(r.Z,{language:"javascript",title:"Result",children:`${JSON.stringify(o().models.payment.sample.single.raw,null,2)}`})]})]})]})}function y(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);