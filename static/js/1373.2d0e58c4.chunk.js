"use strict";(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[1373],{11612:function(e,t,s){s.d(t,{Z:function(){return o}});var l=s(50189),n=(s(66845),s(36953)),a=s(4019),i=s(52076),r=s(40864);function c(e){return(0,r.jsxs)(i.Z,{className:"flex flex-row-reverse",sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(i.Z,{sx:{width:"100%",mr:1},children:(0,r.jsx)(n.Z,(0,l.Z)({variant:"determinate"},e))}),(0,r.jsx)(i.Z,{sx:{minWidth:35},children:(0,r.jsx)(a.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function o(e){return(0,r.jsx)(i.Z,{sx:{width:"100%"},children:(0,r.jsx)(c,{value:e.data})})}},41373:function(e,t,s){s.r(t),s.d(t,{default:function(){return E}});var l=s(11026),n=s(66845),a=s(4019),i=s(98225),r=s(12921),c=s(78684),o=s(89310),x=s(95064),d=s(52076),m=(s(83181),s(37311),s(28839),s(82426)),h=s(22383),p=(s(72706),s(99898)),f=s(35269),u=s(5573),g=s(65811),j=s(14565),N=s(26162),b=s(24853),w=s(17076),v=s(51475),y=s(80519),Z=s(96089),k=s(38708),C=s(72235),z=s(11612),D=s(40864),F=[{label:"\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0622\u0632\u0645\u0648\u0646",key:"responseTime",post:"\u062f\u0642\u06cc\u0642\u0647"},{label:"\u062a\u0639\u062f\u0627\u062f \u0633\u0648\u0627\u0644\u0627\u062a",key:"totalQuestoins",post:"\u0633\u0648\u0627\u0644"},{label:"\u062d\u062f\u0627\u0642\u0644 \u062f\u0631\u0635\u062f \u0642\u0628\u0648\u0644\u06cc",key:"minimumPercentToQualify",post:"\u062f\u0631\u0635\u062f"}],S=function(e){var t=e.open,s=e.setOpen,l=e.exam,n=(0,p.s0)(),a=(0,p.UO)();return(0,D.jsx)(w.Z,{open:t,setOpen:s,title:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0622\u0632\u0645\u0648\u0646 \u067e\u0627\u06cc\u0627\u0646 \u062f\u0648\u0631\u0647",children:(0,D.jsx)("div",{className:"flex items-center justify-center w-full ",children:(0,D.jsxs)("div",{className:"flex flex-col items-start justify-start gap-10",children:[F.map((function(e,t){return(0,D.jsxs)("p",{className:"flex items-center justify-center gap-4 text-17",children:[(0,D.jsx)("span",{children:e.label}),(0,D.jsx)("span",{children:":"}),(0,D.jsx)("span",{children:l[e.key]+" "+e.post})]},t)})),(0,D.jsx)(j.Z,{color:"primary",className:"w-full my-8",onClick:function(){var e=a.courseId;n({pathname:"/learnest/courses/courseId/".concat(e,"/finalExam")})},children:"\u0634\u0631\u0648\u0639 \u0622\u0632\u0645\u0648\u0646"})]})})})},A=s(49759),I=s(20250),B=1,L=2;var E=function(e){var t,s=(0,m.Z)((function(e){return e.breakpoints.down("md")})),w=(0,k.$)("contentsPage").t,F=(0,n.useState)(B),E=(0,l.Z)(F,2),_=E[0],P=E[1],O=(0,f.useSelector)((function(e){return e.LearnestApp.course})),U=(0,f.useSelector)((function(e){return e.basketPanel.data})),T=(0,f.useDispatch)(),M=(0,p.UO)(),R=(0,o.Z)(),H=(0,p.s0)(),Q=(0,n.useState)(!0),q=(0,l.Z)(Q,2),V=q[0],W=q[1],X=(0,n.useState)(!1),$=(0,l.Z)(X,2),G=$[0],J=$[1],K=n.useState(!1),Y=(0,l.Z)(K,2),ee=Y[0],te=Y[1],se=function(){return te(!0)},le=n.useState(!1),ne=(0,l.Z)(le,2),ae=ne[0],ie=ne[1],re=function(){return ie(!1)},ce=(0,n.useState)(!1),oe=(0,l.Z)(ce,2),xe=oe[0],de=oe[1],me=function(){return de(!0)},he=(0,n.useState)(""),pe=(0,l.Z)(he,2),fe=pe[0],ue=pe[1];function ge(){var e={uuid:Date.now().toString(),courseDetails:{title:O.data.introduction.title,institute:"\u0644\u0631\u0646\u0633\u062a",tutor:O.data.teacherAssistant.name,duration:"09:54:35",sessions:O.data.sessions.length,students:O.data.classmates.length,discount:0,unit_price:O.data.priceInformation.price,rate:8}};T((0,A.yg)(e)),P(L)}function je(){U&&U.ids.length&&U.ids.forEach((function(e){U.entities[e].title===O.data.introduction.title&&"\u0644\u0631\u0646\u0633\u062a"===U.entities[e].institute&&(T((0,I.Vz)(U.entities[e].uuid)),P(B))}))}return(0,n.useEffect)((function(){if(U&&U.ids.length&&O&&O.data){var e=!1;U.ids.forEach((function(t){U.entities[t].title===O.data.introduction.title&&"\u0644\u0631\u0646\u0633\u062a"===U.entities[t].institute&&(e=!0)})),e&&P(L)}}),[U,O]),(0,n.useEffect)((function(){T((0,u.X)(M)).then((function(){return W(!1)}))}),[]),V?(0,D.jsx)("div",{className:"flex items-center justify-center mb-[24px] mt-[24px]",children:(0,D.jsx)("div",{className:"flex flex-rox justify-center items-center w-[900px] h-[400px] rounded-lg py-[56px]",style:{backgroundColor:"rgba(120, 120, 120, 0.1)"},children:(0,D.jsx)(g.default,{})})}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Z.ql,{prioritizeSeoTags:!0,children:(0,D.jsx)("title",{children:w("".concat(O.data.introduction.title))})}),s?(0,D.jsx)("div",{className:"w-full self-center px-[24px]",children:(0,D.jsxs)("div",{className:"mx-20 lg:px-[56px]",children:[(0,D.jsx)(d.Z,{className:" ",children:(0,D.jsx)(y.Z,{options:[{label:"\u0622\u0645\u0648\u0632\u0634\u06af\u0627\u0647 \u0647\u0627",to:"/institude"},{label:"\u0644\u0631\u0646\u0633\u062a",to:"/learnest"},{label:"\u062f\u0648\u0631\u0647 \u0647\u0627",to:"/learnest/courses"},{label:"".concat(O.data.introduction.title),to:"/learnest/courses/courseId/".concat(M.courseId)}]})}),(0,D.jsxs)(N.Z,{className:(0,h.default)("relative flex flex-col  w-full h-[346px] mx-auto p-8 mb-24   overflow-hidden "),children:[(0,D.jsx)("div",{className:"min-w-full max-w-[313px] h-[112px] bg-gray-500 rounded-lg bg-cover bg-no-repeat bg-center",style:{backgroundImage:"url(".concat(O.data.introduction.imageUrl,")")},children:(0,D.jsxs)("div",{className:"flex items-center justify-between p-8 z-40",children:[(0,D.jsx)("div",{className:"flex flex-col gap-8",children:(0,D.jsx)("div",{className:(0,h.default)("  w-[20px] h-[20px] right-[8px] flex justify-center items-center h-full rounded-full"),style:{backgroundColor:R.palette.background.paper},children:(0,D.jsx)("img",{src:"assets/cipher-cell/images/content/lernest.png",className:(0,h.default)(" mx-auto  rounded-full")})})}),null!==(t=O.data.priceInformation)&&void 0!==t&&t.discountPrice?(0,D.jsx)("div",{className:(0,h.default)("flex self-start items-center justify-center w-[54px] h-[20px]   shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-xl "),style:{backgroundColor:R.palette.badge.main},children:(0,D.jsx)(a.Z,{className:" w-[46px] h-[12px] font-semibold text-[9px] lg:text-12  text-center ",color:"text.secondary",children:O.data.priceInformation.discountPrice})}):(0,D.jsx)(D.Fragment,{})]})}),(0,D.jsxs)("div",{className:"    mt-8",children:[(0,D.jsx)("div",{className:"flex items-center justify-between mb-12  lg:ml-0 ",children:(0,D.jsxs)(a.Z,{className:"flex items-center gap-4 space-x-6 text-13",children:[(0,D.jsx)(r.default,{color:"disabled",size:16,children:"feather:star"}),(0,D.jsx)("span",{className:"whitespace-nowrap l font-normal text-10 lg:text-12 lg:leading-4 leading-3  flex text-right items-center mt-4",children:"8 \u0627\u0632 10"})]})}),(0,D.jsx)(a.Z,{className:"text-12 font-semibold lg:text-18 leading-6 text-right  flex-none grow-0 order-1 mb-16",children:O.data.introduction.title}),(0,D.jsxs)("div",{className:"grid grid-cols-3  gap-y-10",children:[(0,D.jsxs)("div",{className:"flex items-center space-x-8 gap-6 ",children:[(0,D.jsx)(r.default,{size:20,color:"primary",children:"feather:clock"}),(0,D.jsxs)(a.Z,{className:"font-normal text-10 leading-3 text-right text-[#B1B1B1] ",children:["\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u062f\u0648\u0631\u0647",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-10 leading-3 text-right text-[#3D3D3D] mt-4",children:"09:54:35"})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6 ",children:[(0,D.jsx)(r.default,{size:20,color:"primary",children:"feather:play-circle"}),(0,D.jsxs)(a.Z,{className:"font-normal text-10 leading-3 text-right text-[#B1B1B1]",children:["\u062a\u0639\u062f\u0627\u062f \u062c\u0644\u0633\u0627\u062a",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-10 leading-3 text-right text-[#3D3D3D] mt-4",children:O.data.sessions.length})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6",children:[(0,D.jsx)(r.default,{size:20,color:"primary",children:"feather:users"}),(0,D.jsxs)(a.Z,{className:"font-normal text-10 leading-3 text-right text-[#B1B1B1] whitespace-nowrap",children:["\u062a\u0639\u062f\u0627\u062f \u062f\u0627\u0646\u0634\u062c\u0648\u06cc\u0627\u0646",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-10 leading-3 text-right text-[#3D3D3D] mt-4",children:O.data.classmates.length})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6 ",children:[(0,D.jsx)("div",{className:" w-[20px] h-[20px]  bg-[#8FF9839] rounded-full   flex justify-center items-center h-full",children:(0,D.jsx)("img",{src:"assets/cipher-cell/images/content/lernest.png",className:" w-[20px] h-[20px] rounded-full "})}),(0,D.jsxs)(a.Z,{className:"ffont-normal text-10 leading-3 text-right text-[#B1B1B1]",children:["\u0622\u0645\u0648\u0632\u0634\u06af\u0627\u0647",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-10 leading-3 text-right text-[#3D3D3D] mt-4",children:"\u0644\u0631\u0646\u0633\u062a"})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6  ",children:[(0,D.jsx)(b.Z,{className:"w-[25px] h-[25px] ",alt:"user background",src:"assets/cipher-cell/images/content/teacher.png"}),(0,D.jsxs)(a.Z,{className:"font-normal text-10 leading-3 text-right text-[#B1B1B1] ",children:["\u0645\u062f\u0631\u0633",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-10 leading-3 text-right text-[#3D3D3D] mt-4",children:O.data.teacherAssistant.name})]})]})]}),(0,D.jsx)(x.Z,{className:"mt-20 border-b-1",light:!0})]}),(0,D.jsxs)("div",{className:"flex justify-between m-8 mt-12 items-center  ",children:[(0,D.jsx)(a.Z,{className:" text-20 font-medium leading-5 text-right  ",children:"\u0642\u06cc\u0645\u062a \u062f\u0648\u0631\u0647"}),(0,D.jsx)("div",{className:"text-center",children:(0,D.jsxs)(a.Z,{className:"text-24 font-medium  ",color:"text.thirdly",children:[O.data.priceInformation.price,(0,D.jsx)("span",{className:" leading-none font-normal text-12 leading-4  text-right  mx-4 inline-block align-middle",children:"\u062a\u0648\u0645\u0627\u0646"})]})})]})]}),(0,D.jsx)(a.Z,{className:"font-semibold text-16 leading-6 text-right mb-16",component:"h3",children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u062f\u0648\u0631\u0647"}),(0,D.jsx)(a.Z,{className:"font-normal text-16 leading-6 text-justify mb-[32px] mx-[2px] text-[#646464s] ",children:(0,D.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(O.data.introduction.description)}})}),(0,D.jsx)("div",{className:"mx-20 lg:px-[56px] h-auto",children:(0,D.jsx)("video",{width:"100%",height:"auto",controls:!0,className:"mb-[64px]",children:(0,D.jsx)("source",{src:O.data.introduction.videoUrl,type:"video/mp4"})})}),(0,D.jsxs)("div",{className:"flex flex-col justify-start my-[32px]  mx-[18px]",children:[(0,D.jsxs)(i.E.div,{children:[(0,D.jsx)(a.Z,{className:"font-semibold text-3xl leading-10 text-right text-[#000000] mb-28 ",component:"h3",children:"\u062c\u0644\u0633\u0627\u062a"}),(0,D.jsx)(x.Z,{className:"w-60 -mt-20 mb-[56px]   -rotate-180",style:{borderBottom:"3px solid #11C5E3 "},light:!0})]}),(0,D.jsx)("div",{className:"flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center mb-6 gap-20",children:O.data.sessions.map((function(e,t){return(0,D.jsxs)(N.Z,{className:"flex flex-col justify-start items-start h-auto mb-[14px] p-[24px] cursor-pointer",onClick:function(t){t.preventDefault(),H("lession/".concat(e.id))},children:[(0,D.jsxs)("div",{className:"flex flex-row justify-start items-start",children:[(0,D.jsx)(a.Z,{className:"ml-[8px] font-semibold",children:++t}),e.isLocked?(0,D.jsx)(D.Fragment,{}):(0,D.jsx)(r.default,{className:"text-48 ml-[8px]",size:24,color:"action",children:"heroicons-outline:lock-closed"}),(0,D.jsx)(a.Z,{children:e.title})]}),(0,D.jsxs)("div",{className:"flex flex-row justify-end items-start w-full",children:[e.totalParts," lesson"]}),(0,D.jsx)("div",{className:"flex w-full mt-[18px]",children:(0,D.jsx)(z.Z,{data:e.progressPercent})})]})}))})]}),(0,D.jsxs)(i.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},className:"my-10 pb-20 flex flex-col justify-between",children:[_===B&&(0,D.jsx)(j.Z,{id:"1",slug:"1",to:"",component:c.Link,onClick:ge,variant:"contained",className:"mb-20 w-auto bg-[#FF9839] color-[#000] text-[14px] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0633\u0628\u062f"}),_===L&&(0,D.jsx)(j.Z,{id:"1",slug:"1",to:"",component:c.Link,onClick:je,variant:"contained",className:"mb-20 w-auto bg-[#FF9839] color-[#000] text-[14px] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u062d\u0630\u0641 \u0627\u0632 \u0633\u0628\u062f"}),(0,D.jsx)(j.Z,{id:"1",slug:"1",to:"",onClick:function(e){e.preventDefault(),se()},component:c.Link,variant:"contained",color:"primary",className:"my-8 text-14 flex-1 font-semibold",children:"\u0647\u0645\u06a9\u0644\u0627\u0633\u06cc \u0647\u0627"}),(0,D.jsx)(j.Z,{className:"my-8 text-14 flex-1 font-semibold",variant:"contained",color:"secondary",onClick:me,children:"\u0622\u0632\u0645\u0648\u0646 \u062f\u0648\u0631\u0647"})]})]})}):(0,D.jsxs)("div",{children:[(0,D.jsx)("section",{children:(0,D.jsx)(i.E.div,{className:"flex justify-start my-[32px]  mx-[56px]",children:(0,D.jsx)(y.Z,{options:[{label:"\u0622\u0645\u0648\u0632\u0634\u06af\u0627\u0647 \u0647\u0627",to:"/institude"},{label:"\u0644\u0631\u0646\u0633\u062a",to:"/learnest"},{label:"\u062f\u0648\u0631\u0647 \u0647\u0627",to:"/learnest/courses"},{label:"".concat(O.data.introduction.title),to:"/learnest/courses/courseId/".concat(M.courseId)}]})})}),(0,D.jsxs)("section",{className:"flex flex-col h-auto ",children:[(0,D.jsxs)("div",{className:"mx-20 lg:px-[56px] h-auto",children:[(0,D.jsx)(a.Z,{className:"font-semibold text-3xl leading-10 text-right text-[#000000] mb-28 ",component:"h3",children:O.data.introduction.title}),(0,D.jsx)(x.Z,{className:"w-60 -mt-20 mb-[56px]   -rotate-180",style:{borderBottom:"3px solid #11C5E3 "},light:!0}),(0,D.jsxs)(N.Z,{className:"relative w-[full] h-[276px] flex mb-72 min-h-full sm:min-h-auto mx-auto rounded-0 sm:rounded-3xl overflow-hidden",elevation:3,children:[(0,D.jsx)("div",{className:" w-[30%] flex flex-row  ",children:(0,D.jsx)("img",{src:O.data.introduction.imageUrl,className:""})}),(0,D.jsxs)("div",{className:"flex flex-col  w-[70%] ",children:[(0,D.jsxs)("div",{className:"  flex items-center justify-between  mx-[24px] mt-[32px]  ",children:[(0,D.jsx)(a.Z,{className:" text-24 font-semibold leading-6 text-right ",color:"text.thirdly",children:O.data.introduction.title}),(0,D.jsxs)(a.Z,{className:"flex items-center  space-x-6 text-13",children:[(0,D.jsx)("span",{className:"whitespace-nowrap font-normal text-12 leading-4 text-right text-[#878787] ml-6",children:"6.5 \u0627\u0632 8"}),(0,D.jsx)(r.default,{color:"primary",size:20,children:"feather:star"})]})]}),(0,D.jsxs)("div",{className:"grid grid-cols-5 px-[24px] mt-[40px]",children:[(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6 ",children:[(0,D.jsx)("div",{className:" w-[40px] h-[40px]  bg-[#8FF9839] rounded-full   flex justify-center items-center h-full",children:(0,D.jsx)("img",{src:"assets/cipher-cell/images/content/lernest.png",className:" w-[30px] h-[30px] rounded-full "})}),(0,D.jsxs)(a.Z,{className:"font-normal text-12 leading-4 text-right text-[#A8A8A8]",children:["\u0622\u0645\u0648\u0632\u0634\u06af\u0627\u0647",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-12 leading-4 text-right text-[#000000] mt-4",children:"\u0627\u06a9\u0627\u062f\u0645\u06cc \u0644\u0631\u0646\u0633\u062a"})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6  ",children:[(0,D.jsx)(b.Z,{className:"w-[40px] h-[40px] ",alt:"user background",src:O.data.teacherAssistant.imageUrl}),(0,D.jsxs)(a.Z,{className:"font-normal text-12 leading-4 text-right text-[#A8A8A8] ",children:["\u0645\u062f\u0631\u0633",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-12 leading-4 text-right text-[#000000] mt-4",children:O.data.teacherAssistant.name})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6 ",children:[(0,D.jsx)(r.default,{size:32,color:"primary",children:"feather:clock"}),(0,D.jsxs)(a.Z,{className:"font-normal text-12 leading-4 text-right text-[#A8A8A8] ",children:["\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u062f\u0648\u0631\u0647",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-12 leading-4 text-right text-[#000000] mt-4",children:"09:54:35"})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6 ",children:[(0,D.jsx)(r.default,{size:32,color:"primary",children:"feather:play-circle"}),(0,D.jsxs)(a.Z,{className:"font-normal text-12 leading-4 text-right text-[#A8A8A8]",children:["\u062a\u0639\u062f\u0627\u062f \u062c\u0644\u0633\u0627\u062a",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-12 leading-4 text-right text-[#000000] mt-4",children:O.data.sessions.length})]})]}),(0,D.jsxs)("div",{className:"flex items-center space-x-6 gap-6",children:[(0,D.jsx)(r.default,{size:32,color:"primary",children:"feather:users"}),(0,D.jsxs)(a.Z,{className:"font-normal text-12 leading-4 text-right text-[#A8A8A8] ",children:["\u062a\u0639\u062f\u0627\u062f \u062f\u0627\u0646\u0634\u062c\u0648\u06cc\u0627\u0646",(0,D.jsx)("span",{className:"flex whitespace-nowrap font-normal text-12 leading-4 text-right text-[#000000] mt-4",children:O.data.classmates.length})]})]})]}),(0,D.jsx)(x.Z,{className:"w-[751px] mt-24 mb-36 mx-auto border-b-1",light:!0}),(0,D.jsxs)("div",{className:"flex justify-between px-[24px] ",children:[(0,D.jsxs)("div",{className:"",children:[(0,D.jsx)("div",{className:"relative w-[73px] h-[24px]  bg-[#FF9839] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-xl mb-12 ",children:(0,D.jsxs)(a.Z,{className:" absolute top-4 right-6 w-[59px] h-[16px] font-normal text-12 leading-4 text-center  content-center  item-center  text-right text-[#FFFFFF] mx-auto",children:[" ","\u06f2\u06f5\u066a \u062a\u062e\u0641\u06cc\u0641"]})}),(0,D.jsx)(a.Z,{className:" text-20 font-medium leading-5 text-right ",color:"text.thirdly",children:"\u0642\u06cc\u0645\u062a \u062f\u0648\u0631\u0647"})]}),(0,D.jsx)("div",{className:"text-left",children:(0,D.jsxs)(a.Z,{className:"text-24 font-medium  ",color:"text.thirdly",children:[O.data.priceInformation.price,(0,D.jsx)("span",{className:" leading-none font-normal text-12 leading-4  text-right  mx-4 inline-block align-middle",children:"\u062a\u0648\u0645\u0627\u0646"})]})}),(0,D.jsxs)(i.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},className:"my-20 flex flex-row justify-between",children:[_===B&&(0,D.jsx)(j.Z,{id:"1",slug:"1",to:"",component:c.Link,onClick:ge,variant:"contained",className:"mb-20 w-auto bg-[#FF9839] color-[#000] text-[14px] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0633\u0628\u062f"}),_===L&&(0,D.jsx)(j.Z,{id:"1",slug:"1",to:"",component:c.Link,onClick:je,variant:"contained",className:"mb-20 w-auto bg-[#FF9839] color-[#000] text-[14px] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u062d\u0630\u0641 \u0627\u0632 \u0633\u0628\u062f"}),(0,D.jsx)(j.Z,{id:"2",slug:"2",to:"",onClick:function(e){e.preventDefault(),se()},component:c.Link,variant:"contained",color:"primary",className:"mb-20 w-auto text-[14px] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u0647\u0645\u06a9\u0644\u0627\u0633\u06cc \u0647\u0627"}),(0,D.jsx)(j.Z,{id:"3",slug:"3",to:"",onClick:me,component:c.Link,variant:"contained",color:"success",className:"mb-20 w-auto text-[14px] color-[#000] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u0622\u0632\u0645\u0648\u0646 \u062f\u0648\u0631\u0647"})]})]})]})]}),(0,D.jsx)(a.Z,{className:"font-semibold text-[30px] leading-10 text-right  mb-8",color:"text.thirdly",component:"h3",children:"\u0645\u0639\u0631\u0641\u06cc \u062f\u0648\u0631\u0647"}),(0,D.jsx)(x.Z,{className:"w-72 mb-[44px] border-b-3 ",style:{borderColor:R.palette.primary.main},light:!0}),(0,D.jsx)(a.Z,{className:"font-normal text-2xl leading-[48px] text-justify mb-[64px] mx-[2px] text-[#000000]",children:(0,D.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(O.data.introduction.description)}})})]}),(0,D.jsx)("div",{className:"mx-20 lg:px-[56px] h-auto",children:(0,D.jsx)("video",{width:"100%",height:"auto",controls:!0,className:"mb-[64px]",children:(0,D.jsx)("source",{src:O.data.introduction.videoUrl,type:"video/mp4"})})})]}),(0,D.jsx)("section",{children:(0,D.jsxs)("div",{className:"flex flex-col justify-start my-[32px]  mx-[56px]",children:[(0,D.jsxs)(i.E.div,{children:[(0,D.jsx)(a.Z,{className:"font-semibold text-3xl leading-10 text-right text-[#000000] mb-28 ",component:"h3",children:"\u062c\u0644\u0633\u0627\u062a"}),(0,D.jsx)(x.Z,{className:"w-60 -mt-20 mb-[56px]   -rotate-180",style:{borderBottom:"3px solid #11C5E3 "},light:!0})]}),(0,D.jsx)("div",{className:"flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center mb-6 gap-20",children:O.data.sessions.map((function(e,t){return(0,D.jsxs)(N.Z,{className:"flex flex-col justify-start items-start h-auto mb-[14px] p-[24px] cursor-pointer",onClick:function(t){t.preventDefault(),H("lession/".concat(e.id))},children:[(0,D.jsxs)("div",{className:"flex flex-row justify-start items-start",children:[(0,D.jsx)(a.Z,{className:"ml-[8px] font-semibold",children:++t}),e.isLocked?(0,D.jsx)(r.default,{className:"text-48 ml-[8px]",size:24,color:"action",children:"heroicons-outline:lock-closed"}):(0,D.jsx)(r.default,{className:"text-48 ml-[8px]",size:24,color:"action",children:"heroicons-outline:lock-open"}),(0,D.jsx)(a.Z,{children:e.title})]}),(0,D.jsxs)("div",{className:"flex flex-row justify-end items-start w-full mb-[32px]",children:[e.totalParts," lesson"]}),(0,D.jsx)("div",{className:"flex w-full",children:(0,D.jsx)(z.Z,{data:e.progressPercent})})]})}))})]})})]}),(0,D.jsx)(v.Z,{widthSize:"80%",heightSize:"auto",open:ee,overflow:"hidden",setOpen:function(){return te(!1)},children:(0,D.jsxs)("div",{className:"p-[18px]",children:[O.data.classmates.map((function(e,t){return(0,D.jsxs)("div",{className:"flex flex-row w-full justify-between mb-[24px] px-[12px]",children:[(0,D.jsx)(b.Z,{className:"w-[40px] h-[40px] ",alt:"classmate pic",src:e.avatarUrl}),(0,D.jsx)(a.Z,{children:e.name}),(0,D.jsx)(a.Z,{children:e.phone})]})})),(0,D.jsx)(j.Z,{id:"1",slug:"1",to:"",onClick:function(e){e.preventDefault(),ie(!0)},component:c.Link,variant:"contained",color:"primary",className:"mb-20 w-full text-[14px] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0647\u0645 \u06a9\u0644\u0627\u0633\u06cc"})]})}),(0,D.jsx)(v.Z,{widthSize:"70%",heightSize:"auto",open:ae,overflow:"hidden",setOpen:re,children:(0,D.jsxs)("div",{className:"flex flex-col justify-start items-start w-full p-[24px]",children:[(0,D.jsx)("div",{children:(0,D.jsx)(a.Z,{children:"\u0627\u0637\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f."})}),(0,D.jsxs)("div",{className:"flex flex-row justify-between items-center w-full",children:[(0,D.jsx)(a.Z,{children:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633:"}),(0,D.jsx)("input",{className:"w-[220px] h-[42px] p-[12px] rounded-lg",placeholder:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633",style:{backgroundColor:"whitesmoke",color:"black"},onInput:function(e){ue(e.target.value)}})]}),(0,D.jsx)("div",{className:"flex flex-row justify-between items-center w-full mt-[16px]",children:(0,D.jsx)(j.Z,{id:"1",slug:"1",to:"",onClick:function(e){e.preventDefault(),J(!0),function(){var e=O.data.introduction.classRoomId;T((0,C.S)({phone:{phoneNumber:fe},id:{classId:e}})).then((function(){J(!1),re()}))}()},component:c.Link,variant:"contained",color:"primary",className:"mb-20 w-full text-[14px] font-semibold leading-5 items-center text-center  tracking-[0.1px] order-0 grow-0 ml-[8px]",children:"\u062b\u0628\u062a"})}),(0,D.jsx)("div",{className:"flex justify-center items-center absolute w-full h-full top-[0] right-[0] z-[100] text-[32px]",style:G?{backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"0 0 40px 40px",color:"white"}:{visibility:"hidden"},children:"... Loading"})]})}),(0,D.jsx)(S,{open:xe,setOpen:de,exam:O.data.exam})]})}},51475:function(e,t,s){var l=s(50189),n=s(77731),a=s(52076),i=s(4709),r=s(12921),c=s(43413),o=s(40864),x=(0,c.ZP)(a.Z)((function(e){var t=e.theme,s=e.heightSize,l=e.overflow;return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:t.palette.background.paper,boxShadow:24,p:4,borderRadius:"40px",overflow:l||"",height:s||""}})),d=(0,c.ZP)("div")((function(e){return{position:"sticky",zIndex:99,top:0,left:0,backgroundColor:e.theme.palette.background.paper,right:0}}));function m(e){var t=e.children,s=e.open,a=e.setOpen,c=e.title,m=e.widthSize,h=e.heightSize,p=e.overflow;return(0,o.jsx)(n.Z,{open:s,onClose:function(){return a(!1)},closeAfterTransition:!0,children:(0,o.jsxs)(x,{sx:(0,l.Z)({},{width:m||"70vw"}),heightSize:h,overflow:p,children:[(0,o.jsxs)(d,{className:"flex flex-col flex-auto py-16 px-32",children:[(0,o.jsx)(i.Z,{className:"absolute top-10 left-10  z-10",size:"large",onClick:function(){return a(!1)},children:(0,o.jsx)(r.default,{children:"heroicons-outline:x"})}),c]}),t]})})}m.defaultProps={children:(0,o.jsx)(o.Fragment,{}),open:!1,setOpen:null,title:""},t.Z=m}}]);