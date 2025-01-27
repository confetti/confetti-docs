"use strict";(self.webpackChunkconfetti_docs=self.webpackChunkconfetti_docs||[]).push([[528],{5047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>j,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"contacts/create","title":"Create","description":"","source":"@site/docs/contacts/create.mdx","sourceDirName":"contacts","slug":"/contacts/create","permalink":"/docs/contacts/create","draft":false,"unlisted":false,"editUrl":"https://github.com/confetti/confetti-docs/docs/contacts/create.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Find one","permalink":"/docs/workspace/find"},"next":{"title":"Find one","permalink":"/docs/contacts/find"}}');var a=n(4848),s=n(8453),c=n(5537),i=n(9329),l=(n(8069),n(1980)),o=n.n(l),d=n(4021);const u={},p="Create",h={},m=[];function f(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"create",children:"Create"})}),"\n",(0,a.jsx)(d.A,{model:o().models.contact,isCreateOrUpdate:!0}),"\n",(0,a.jsxs)(c.A,{children:[(0,a.jsx)(i.A,{value:"javascript",label:"JavaScript",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const Confetti = require('confetti')\n\nconst confetti = new Confetti({ apiKey: 'your-key' })\nconst data = await confetti.contacts.create({\n  firstName: 'Foo',\n  lastName: 'Bar',\n  email: 'foo@bar.se',\n  phone: '+46700000000',\n  comment: 'Foo bar',\n  categoryIds: [1, 2],\n  company: 'Foo Bar AB',\n})\n"})})}),(0,a.jsx)(i.A,{value:"curl",label:"curl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'curl -X POST "https://api.confetti.events/contacts"\n-H "Content-Type: application/json"\n-H "Authorization: apikey your-key"\n-d \'{\n  "data": {\n    "type": "contact",\n    "attributes": {\n      "firstName": "Foo",\n      "lastName": "Bar",\n      "email": "foo@bar.se",\n      "phone": "+46700000000",\n      "comment": "Foo bar",\n      "company": "Foo Bar AB",\n    },\n      "relationships": {\n        "categories": {\n          "data": [\n            { "id": "1" },\n            { "id": "2" }\n          ]\n        }\n      }\n    }\n  }\'\n'})})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},4021:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(4848);function a(e){let{isCreateOrUpdate:t}=e;return(0,r.jsxs)("thead",{children:[(0,r.jsx)("th",{children:"Parameter"}),(0,r.jsx)("th",{children:t?"Type":"Default"}),(0,r.jsx)("th",{children:"Values / Description"})]})}function s(e){let{name:t,defaultValue:n,description:a}=e;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t}),(0,r.jsx)("td",{children:n}),(0,r.jsx)("td",{children:a})]})}const c=e=>["string","boolean","number"].includes(e.type)?e.type:e.values.map((e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:e.value})," "]}))),i=e=>Array.isArray(e.default)?e.default.map((e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:e})," "]}))):e.default;function l(e){let{attributes:t}=e;return t&&0!==t.length?t.map((e=>{const t=e.values?e.values.map((e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:e})," "]}))):e.helpText,n=e.multiple?`array of ${e.type}s`:e.type,a=`${e.key}${e.required?"*":""}`;return(0,r.jsx)(s,{name:a,defaultValue:n,description:t})})):null}function o(e){let{filters:t}=e;return t&&0!==Object.keys(t).length?(0,r.jsx)(r.Fragment,{children:Object.keys(t).map((e=>{const n=t[e],a=n.required?`filter[${e}]*`:`filter[${e}]`;return(0,r.jsx)(s,{name:a,defaultValue:i(n),description:c(n)})}))}):null}function d(e){let{model:t,includeOnly:n,isCreateOrUpdate:c}=e;return(0,r.jsxs)("table",{children:[(0,r.jsx)(a,{isCreateOrUpdate:c}),c?(0,r.jsx)(l,{attributes:t.operations.create.attributes}):(0,r.jsxs)(r.Fragment,{children:[!n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{filters:t.filters}),(0,r.jsx)(s,{name:"page[size]",defaultValue:"50",description:"Maximum number of results"}),(0,r.jsx)(s,{name:"page[number]",defaultValue:"1",description:"Page number"})]}),t.includes&&(0,r.jsx)(s,{name:"include",defaultValue:"",description:t.includes.map((e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:e})," "]})))})]})]})}}}]);