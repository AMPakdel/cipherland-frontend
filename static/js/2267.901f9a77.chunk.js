"use strict";(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[2267],{92267:function(e,t,a){a.r(t);var n=a(11026),s=a(66845),c=a(98225),l=a(89310),i=(a(83181),a(37311),a(28839),a(82426)),r=(a(72706),a(99898)),o=a(35269),x=a(65811),d=a(80519),m=a(96089),p=a(38708),u=a(4019),f=a(14565),h=a(78684),g=a(12921),b=a(98919),j=a(8220),v=a(40864);t.default=function(){var e,t,a=(0,i.Z)((function(e){return e.breakpoints.down("lg")})),w=(0,p.$)("contentsPage").t,k=((0,l.Z)(),(0,o.useDispatch)()),N=(0,r.UO)(),y=(0,s.useState)(!0),Z=(0,n.Z)(y,2),F=Z[0],z=Z[1],C=(0,s.useState)(!0),L=(0,n.Z)(C,2),D=(L[0],L[1],(0,s.useState)(!0)),S=(0,n.Z)(D,2),U=S[0],I=S[1],E=(0,s.useState)(0),W=(0,n.Z)(E,2),_=W[0],q=W[1],A=(0,s.useState)(!1),O=(0,n.Z)(A,2),P=O[0],T=O[1],$=(0,o.useSelector)((function(e){return e.LearnestApp.extraDetails}));function B(){var e=$.data.vocabs[_].id;k((0,b.jW)({id:e})).then((function(){T(!1)}))}function G(e){_<$.data.vocabs.length-1&&(I(!1),q(_+e))}function H(e){_>0&&(I(!1),q(_-e))}return(0,s.useEffect)((function(){k((0,j.d)(N.magazineId)).then((function(){return z(!1)}))}),[k]),(0,s.useEffect)((function(){I(!0)}),[_]),F?(0,v.jsx)("div",{className:"flex items-center justify-center mb-[24px] mt-[24px]",children:(0,v.jsx)("div",{className:"flex flex-rox justify-center items-center w-[900px] h-[400px] rounded-lg py-[56px]",style:{backgroundColor:"rgba(120, 120, 120, 0.1)"},children:(0,v.jsx)(x.default,{})})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.ql,{prioritizeSeoTags:!0,children:(0,v.jsx)("title",{children:w("vocabs | \u0644\u063a\u0627\u062a")})}),a?(0,v.jsxs)("div",{children:[(0,v.jsx)("section",{children:(0,v.jsx)(c.E.div,{className:"flex justify-start my-[32px]  mx-[56px]",children:(0,v.jsx)(d.Z,{options:[{label:"\u0644\u0631\u0646\u0633\u062a",to:"/learnest"},{label:"\u0633\u0631\u06af\u0631\u0645\u06cc",to:"/learnest/extra"},{label:"\u0645\u062c\u0644\u0647",to:"/learnest/extra/magazine/".concat(N.magazineId)},{label:"\u0644\u063a\u0627\u062a",to:"/learnest/extra/magazine/".concat(N.magazineId,"/vocab")}]})})}),(0,v.jsxs)("section",{className:"flex flex-col justify-center items-center w-full",children:[0==U?(0,v.jsx)("div",{children:"Wait"}):(0,v.jsx)("div",{className:"flex flex-col justify-center items-center w-[80%]",children:(0,v.jsxs)("div",{className:"flex flex-col justify-center items-center w-full",children:[(0,v.jsx)("img",{src:"https://dl.learnest.app//".concat($.data.vocabs[_].imageUrl),alt:"".concat($.data.vocabs[_].meaning)}),(0,v.jsx)(u.Z,{className:"text-[20px] my-[14px]",children:$.data.vocabs[_].phrase}),(0,v.jsx)(u.Z,{className:"text-[20px] mb-[14px]",children:$.data.vocabs[_].pronunciation}),null!==(e=$.data.vocabs[_])&&void 0!==e&&e.voiceUrl?(0,v.jsx)("audio",{controls:!0,src:"https://dl.learnest.app//".concat($.data.vocabs[_].voiceUrl)}):(0,v.jsx)(v.Fragment,{}),(0,v.jsx)(u.Z,{className:"text-[20px] mt-[14px]",children:$.data.vocabs[_].meaning})]})}),(0,v.jsxs)("div",{className:"flex flex-row justify-between items-center w-[70%] mt-[26px] mb-[42px]",children:[(0,v.jsxs)(f.Z,{className:"mb-20 bg-[#FF9839] color-[#000] w-auto text-[22px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[16px]",id:"1",slug:"1",to:"",style:_==$.data.vocabs.length?{visibility:"hidden"}:{color:"black"},component:h.Link,variant:"contained",onClick:function(e){e.preventDefault(),G(1)},children:[(0,v.jsx)(g.default,{className:"ml-[8px]",size:20,children:"heroicons-solid:arrow-sm-right"}),"\u0628\u0639\u062f\u06cc"]}),(0,v.jsx)(f.Z,{className:"mb-20 color-[#000] w-auto text-[22px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[16px]",id:"1",slug:"1",to:"",component:h.Link,variant:"contained",color:"success",onClick:function(e){e.preventDefault(),T(!0),B()},children:P?(0,v.jsx)(v.Fragment,{children:"Loading"}):(0,v.jsx)(v.Fragment,{children:"\u0644\u0627\u06cc\u062a\u0646\u0631"})}),(0,v.jsxs)(f.Z,{className:"mb-20 bg-[#FF9839] color-[#000] w-auto text-[22px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[16px]",id:"1",slug:"1",to:"",style:_==$.data.vocabs.length?{visibility:"hidden"}:{color:"black"},component:h.Link,variant:"contained",onClick:function(e){e.preventDefault(),H(1)},children:["\u0642\u0628\u0644\u06cc",(0,v.jsx)(g.default,{className:"mr-[8px]",size:20,children:"heroicons-solid:arrow-sm-left"})]})]})]})]}):(0,v.jsxs)("div",{children:[(0,v.jsx)("section",{children:(0,v.jsx)(c.E.div,{className:"flex justify-start mt-[32px] mx-[56px]",children:(0,v.jsx)(d.Z,{options:[{label:"\u0644\u0631\u0646\u0633\u062a",to:"/learnest"},{label:"\u0633\u0631\u06af\u0631\u0645\u06cc",to:"/learnest/extra"},{label:"\u0645\u062c\u0644\u0647",to:"/learnest/extra/magazine/".concat(N.magazineId)},{label:"\u0644\u063a\u0627\u062a",to:"/learnest/extra/magazine/".concat(N.magazineId,"/vocab")}]})})}),(0,v.jsxs)("section",{className:"flex flex-col justify-center items-center w-full",children:[0==U?(0,v.jsx)("div",{children:"Wait"}):(0,v.jsx)("div",{className:"flex flex-col justify-center items-center w-[40%]",children:(0,v.jsxs)("div",{className:"flex flex-col justify-center items-center w-[40%]",children:[(0,v.jsx)("img",{src:"https://dl.learnest.app//".concat($.data.vocabs[_].imageUrl),alt:"".concat($.data.vocabs[_].meaning)}),(0,v.jsx)(u.Z,{className:"text-[20px] my-[14px]",children:$.data.vocabs[_].phrase}),(0,v.jsx)(u.Z,{className:"text-[20px] mb-[14px]",children:$.data.vocabs[_].pronunciation}),null!==(t=$.data.vocabs[_])&&void 0!==t&&t.voiceUrl?(0,v.jsx)("audio",{controls:!0,src:"https://dl.learnest.app//".concat($.data.vocabs[_].voiceUrl)}):(0,v.jsx)(v.Fragment,{}),(0,v.jsx)(u.Z,{className:"text-[20px] mt-[14px]",children:$.data.vocabs[_].meaning})]})}),(0,v.jsxs)("div",{className:"flex flex-row justify-between items-center w-[25%] mt-[26px]",children:[(0,v.jsxs)(f.Z,{className:"mb-20 bg-[#FF9839] color-[#000] w-auto text-[22px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[16px]",id:"1",slug:"1",to:"",style:_==$.data.vocabs.length?{visibility:"hidden"}:{color:"black"},component:h.Link,variant:"contained",onClick:function(e){e.preventDefault(),G(1)},children:[(0,v.jsx)(g.default,{className:"ml-[8px]",size:20,children:"heroicons-solid:arrow-sm-right"}),"\u0628\u0639\u062f\u06cc"]}),(0,v.jsx)(f.Z,{className:"mb-20 color-[#000] w-auto text-[22px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[16px]",id:"1",slug:"1",to:"",component:h.Link,variant:"contained",color:"success",onClick:function(e){e.preventDefault(),T(!0),B()},children:P?(0,v.jsx)(v.Fragment,{children:"Loading"}):(0,v.jsx)(v.Fragment,{children:"\u0644\u0627\u06cc\u062a\u0646\u0631"})}),(0,v.jsxs)(f.Z,{className:"mb-20 bg-[#FF9839] color-[#000] w-auto text-[22px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[16px]",id:"1",slug:"1",to:"",style:_==$.data.vocabs.length?{visibility:"hidden"}:{color:"black"},component:h.Link,variant:"contained",onClick:function(e){e.preventDefault(),H(1)},children:["\u0642\u0628\u0644\u06cc",(0,v.jsx)(g.default,{className:"mr-[8px]",size:20,children:"heroicons-solid:arrow-sm-left"})]})]})]})]})]})}}}]);