"use strict";(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[871],{11612:function(e,s,t){t.d(s,{Z:function(){return o}});var r=t(50189),n=(t(66845),t(36953)),l=t(4019),c=t(52076),i=t(40864);function a(e){return(0,i.jsxs)(c.Z,{className:"flex flex-row-reverse",sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(c.Z,{sx:{width:"100%",mr:1},children:(0,i.jsx)(n.Z,(0,r.Z)({variant:"determinate"},e))}),(0,i.jsx)(c.Z,{sx:{minWidth:35},children:(0,i.jsx)(l.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function o(e){return(0,i.jsx)(c.Z,{sx:{width:"100%"},children:(0,i.jsx)(a,{value:e.data})})}},40871:function(e,s,t){t.r(s);var r=t(11026),n=t(66845),l=t(4019),c=t(98225),i=t(12921),a=t(78684),o=t(89310),x=t(52076),d=(t(83181),t(37311),t(28839),t(82426)),u=(t(72706),t(99898)),m=t(35269),p=t(65811),f=t(14565),h=t(26162),j=t(80519),g=t(96089),b=t(38708),v=t(94669),w=t(11612),y=t(5573),N=t(40864);s.default=function(){var e=(0,d.Z)((function(e){return e.breakpoints.down("md")})),s=(0,b.$)("contentsPage").t,t=((0,o.Z)(),(0,m.useDispatch)()),Z=(0,u.UO)(),k=(0,u.s0)(),I=(0,m.useSelector)((function(e){return e.LearnestApp.lession})),C=(0,m.useSelector)((function(e){return e.LearnestApp.course})),F=(0,n.useState)(!0),P=(0,r.Z)(F,2),L=P[0],S=P[1],E=(0,n.useState)(!0),z=(0,r.Z)(E,2),D=z[0],U=z[1];function A(e){"\u062a\u0645\u0631\u06cc\u0646\u0627\u062a \u062a\u06a9\u0645\u06cc\u0644\u06cc"===e.title&&k("parts/".concat(e.id)),"\u0644\u063a\u0627\u062a"===e.title&&k("vocab/".concat(e.id)),"\u0646\u06a9\u0627\u062a \u0622\u0645\u0648\u0632\u0634\u06cc"===e.title&&k("grammer/".concat(e.id))}return(0,n.useEffect)((function(){t((0,v.v)(Z)).then((function(){return S(!1)})),t((0,y.X)(Z)).then((function(){return U(!1)}))}),[t]),L||D?(0,N.jsx)("div",{className:"flex items-center justify-center mb-[24px] mt-[24px]",children:(0,N.jsx)("div",{className:"flex flex-rox justify-center items-center w-[900px] h-[400px] rounded-lg py-[56px]",style:{backgroundColor:"rgba(120, 120, 120, 0.1)"},children:(0,N.jsx)(p.default,{})})}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g.ql,{prioritizeSeoTags:!0,children:(0,N.jsx)("title",{children:s("session | \u062c\u0644\u0633\u0647")})}),e?(0,N.jsxs)("div",{children:[(0,N.jsx)("section",{children:(0,N.jsx)(x.Z,{className:"flex justify-start my-[32px]  mx-[26px]",children:(0,N.jsx)(j.Z,{options:[{label:"\u0644\u0631\u0646\u0633\u062a",to:"/learnest"},{label:"\u062f\u0648\u0631\u0647 \u0647\u0627",to:"/learnest/courses"},{label:"".concat(C.data.introduction.title),to:"/learnest/courses/courseId/".concat(Z.courseId)},{label:"\u062c\u0644\u0633\u0647",to:"/learnest/courses/courseId/".concat(Z.courseId,"/lession/").concat(Z.lessionId)}]})})}),(0,N.jsxs)("section",{className:"flex flex-col justify-center items-center",children:[(0,N.jsxs)(h.Z,{className:" bg-[#F8F9FF] mb-[22px] w-[90%] relative",children:[(0,N.jsx)("img",{src:I.data.learningImageUrl,className:"mx-auto"}),(0,N.jsxs)(f.Z,{className:"absolute mb-20 w-auto text-[12px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[6px]",style:{top:"90%",right:"25px",color:"black"},id:"1",slug:"1",to:"learning/".concat(Z.lessionId),component:a.Link,variant:"contained",color:"success",children:[(0,N.jsx)(i.default,{className:"",size:20,children:"heroicons-solid:arrow-sm-right"}),"\u0634\u0631\u0648\u0639 \u06a9\u0644\u0627\u0633"]})]}),(0,N.jsx)("div",{className:"flex px-[20px] w-full",children:(0,N.jsx)(w.Z,{data:I.data.learningProgressPercent})}),(0,N.jsx)("div",{className:"flex flex-col justif-center items-center w-full px-[56px] mt-[52px] mb-[32px]",children:I.data.sessionParts.map((function(e,s){return(0,N.jsxs)("div",{className:"flex flex-row cursor-pointer justify-between items-center w-[70%] rounded-lg p-[12px] mb-[32px] cursor-pointer",style:{backgroundColor:"darkgray"},onClick:function(s){s.preventDefault(),A(e)},children:[(0,N.jsxs)("div",{className:"flex flex-row justify-start items-center",children:[(0,N.jsx)(l.Z,{className:"text-[32px] font-medium ml-[22px] ",color:"text.thirdly",children:++s}),(0,N.jsx)(l.Z,{className:"text-[18px]",children:e.title})]}),(0,N.jsx)("div",{children:(0,N.jsxs)(l.Z,{className:"text-[16px] flex flex-row justify-end items-center",children:[(0,N.jsx)("span",{style:{display:"inline-block",width:"8px",height:"8px",borderRadius:"100%",backgroundColor:"#0146EC",marginLeft:"6px"}}),e.totalParts]})})]})}))})]})]}):(0,N.jsxs)("div",{children:[(0,N.jsx)("section",{children:(0,N.jsx)(c.E.div,{className:"flex justify-start my-[32px]  mx-[56px]",children:(0,N.jsx)(j.Z,{options:[{label:"\u0644\u0631\u0646\u0633\u062a",to:"/learnest"},{label:"\u062f\u0648\u0631\u0647 \u0647\u0627",to:"/learnest/courses"},{label:"".concat(C.data.introduction.title),to:"/learnest/courses/courseId/".concat(Z.courseId)},{label:"\u062c\u0644\u0633\u0647",to:"/learnest/courses/courseId/".concat(Z.courseId,"/lession/").concat(Z.lessionId)}]})})}),(0,N.jsxs)("section",{className:"flex flex-col justify-center items-center",children:[(0,N.jsxs)(h.Z,{className:" bg-[#F8F9FF] mb-[22px] w-[70%] relative",children:[(0,N.jsx)("img",{src:I.data.learningImageUrl,className:"mx-auto"}),(0,N.jsxs)(f.Z,{className:"absolute mb-20 w-auto text-[22px] font-semibold leading-5 items-center text-center tracking-[0.1px] order-0 grow-0 ml-[8px] p-[16px]",style:{top:"96%",right:"25px",color:"black"},id:"1",slug:"1",to:"learning/".concat(Z.lessionId),component:a.Link,variant:"contained",color:"success",children:[(0,N.jsx)(i.default,{className:"",size:20,children:"heroicons-solid:arrow-sm-right"}),"\u0634\u0631\u0648\u0639 \u06a9\u0644\u0627\u0633"]})]}),(0,N.jsx)("div",{className:"flex px-[120px] w-full",children:(0,N.jsx)(w.Z,{data:I.data.learningProgressPercent})}),(0,N.jsx)("div",{className:"flex grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 items-center w-full px-[56px] mt-[52px] mb-[32px]",children:I.data.sessionParts.map((function(e,s){return(0,N.jsxs)("div",{className:"flex flex-row cursor-pointer justify-between items-center w-[95%] rounded-lg p-[12px] mb-[32px] mr-[32px] cursor-pointer",style:{backgroundColor:"darkgray"},onClick:function(s){s.preventDefault(),A(e)},children:[(0,N.jsxs)("div",{className:"flex flex-row justify-start items-center",children:[(0,N.jsx)(l.Z,{className:"text-[62px] font-medium ml-[22px] ",color:"text.thirdly",children:++s}),(0,N.jsx)(l.Z,{className:"text-[24px]",children:e.title})]}),(0,N.jsx)("div",{children:(0,N.jsxs)(l.Z,{className:"text-[16px] flex flex-row justify-end items-center",children:[(0,N.jsx)("span",{style:{display:"inline-block",width:"8px",height:"8px",borderRadius:"100%",backgroundColor:"#0146EC",marginLeft:"6px"}}),e.totalParts]})})]})}))})]})]})]})}}}]);