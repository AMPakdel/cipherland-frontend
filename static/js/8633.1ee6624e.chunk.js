"use strict";(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[8633],{88633:function(e,t,a){a.r(t),a.d(t,{default:function(){return ve}});var l=a(60903),n=a(90694),i=a(82426),r=a(32744),s=a(11026),c=a(66845),d=a(14565),o=a(19026),u=a(26162),m=a(4019),x=a(98225),h=a(35269),f=a(78684),g=a(12921),p=a(23209),b=a(25358),j=a(12307),y=a(21192),v=a(44838),N=a(60801),w=a(64649),Z=a(11092),k=a(27791),P=a(95514),C=a(45960),S=a.n(C),D=(0,P.createAsyncThunk)("academyApp/categories/getCategories",(0,k.Z)((0,Z.Z)().mark((function e(){var t,a;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S().get("/api/academy/categories");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),E=(0,P.createEntityAdapter)({}),F=E.getSelectors((function(e){return e.academyApp.categories})),T=F.selectAll,A=(F.selectById,(0,P.createSlice)({name:"academyApp/categories",initialState:E.getInitialState({}),reducers:{},extraReducers:(0,w.Z)({},D.fulfilled,E.setAll)}).reducer,a(65289)),B=a(89310),z=a(16520),I=a(45081),L=a(68194),M=a(42167),_=a(53944),R=a(40864);var H=function(e){var t=(0,i.Z)((function(e){return e.breakpoints.down("lg")})),a=(0,h.useDispatch)(),l=(0,h.useSelector)(p.Lm),n=((0,h.useSelector)(T),(0,h.useSelector)(p.sc),(0,h.useSelector)(p.sc),(0,b.cI)({mode:"all"})),r=(n.handleSubmit,n.register,n.reset,n.control,n.watch,n.formState,(0,B.Z)(),c.useState(!1)),w=(0,s.Z)(r,2),Z=w[0],k=w[1],P=function(e){return function(){k(e)}};return(0,R.jsx)(R.Fragment,{children:t?(0,R.jsxs)("div",{className:"flex flex-col w-full p-4",children:[(0,R.jsx)(A.Z,{className:" inline-block mb-28",children:(0,R.jsxs)(m.Z,{className:"flex items-center font-semibold text-12 leading-6 text-right text-[#3D3D3D]",to:"/home",component:f.Link,role:"button",style:{},children:[(0,R.jsx)(g.default,{color:"disabled",size:16,className:"ml-6",children:"heroicons-outline:arrow-narrow-right"}),"\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc"]})}),(0,R.jsxs)("div",{className:"flex flex-row w-full  items-center px-10 mb-20 justify-start gap-10",children:[(0,R.jsxs)(u.Z,{component:x.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full h-40 space-x-8 px-16 rounded-full border-1 shadow-0 bg-gray-200",children:[(0,R.jsx)(g.default,{color:"disabled",children:"heroicons-solid:search"}),(0,R.jsx)(o.Z,{placeholder:"\u062c\u0633\u062a\u062c\u0648",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:l,inputProps:{"aria-label":"Search"},onChange:function(e){return a((0,p.c5)(e))}})]}),(0,R.jsx)(u.Z,{component:x.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center  min-w-40 h-40 rounded-full border-1 shadow-0 bg-gray-200",children:(0,R.jsx)(g.default,{className:"mr-10 text-black",size:20,color:"disabled",children:"feather:filter"})}),(0,R.jsx)(u.Z,{component:x.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center min-w-40 h-40  self-center rounded-full border-1 shadow-0 bg-gray-200",onClick:function(){return k(!0)},children:(0,R.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-7",children:(0,R.jsx)("path",{d:"M3 7H21M6 12H18M10 17H14",stroke:"black",strokeLinecap:"round"})})})]}),(0,R.jsx)(I.Z,{children:(0,R.jsx)(z.Z,{anchor:"bottom",onClose:P(!1),onOpen:P(!0),open:Z,setOpen:function(){return k(!1)},title:"\u062a\u0627\u0631\u06cc\u062e \u062f\u0631\u062e\u0648\u0627\u0633\u062a",children:(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("div",{className:"mb-16",children:(0,R.jsxs)(L.Z,{"aria-label":"supporters",name:"supporters",sx:{"&.Mui-checked":{color:"#11C5E3"}},children:[(0,R.jsx)(M.Z,{className:"w-full justify-between flex-row-reverse mx-10",control:(0,R.jsx)(_.Z,{className:"justify-end flex self-end items-end"}),value:"closest",label:"\u0646\u0632\u062f\u06cc\u06a9\u062a\u0631\u06cc\u0646"}),(0,R.jsx)(M.Z,{className:"w-full justify-between flex-row-reverse mx-10",value:"fathest",control:(0,R.jsx)(_.Z,{}),label:"\u062f\u0648\u0631\u062a\u0631\u06cc\u0646"})]})})})})})]}):(0,R.jsxs)("div",{className:"flex-1 w-full",children:[(0,R.jsxs)("div",{className:"flex  space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between pb-32  px-10",children:[(0,R.jsxs)(m.Z,{component:x.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"flex items-center font-semibold text-12 lg:text-16 leading-10 text-right text-[#1A3141] ",children:[(0,R.jsx)(g.default,{className:"ml-10",size:20,children:"feather:trello"}),"\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc"]}),(0,R.jsx)(x.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},className:"",children:(0,R.jsxs)(d.Z,{to:"/dashboard/user/support/new",component:f.Link,variant:"contained",className:" mx-6 text-[#FFFFFF] text-14 font-normal leading-6 items-center text-center  bg-[#11C5E3] ",children:[(0,R.jsx)(g.default,{className:"ml-10",color:"action",size:20,children:"feather:plus"}),"\u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u06cc\u06a9\u062a \u062c\u062f\u06cc\u062f"]})})]}),(0,R.jsx)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between pb-32 ",children:(0,R.jsxs)("div",{className:"flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-start space-x-8 gap-16",children:[(0,R.jsxs)(u.Z,{component:x.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-[382px] h-40 space-x-8 pr-16 rounded-full border-1 shadow-0 bg-gray-200",children:[(0,R.jsx)(o.Z,{placeholder:"\u062c\u0633\u062a\u062c\u0648",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:l,inputProps:{"aria-label":"Search"},onChange:function(e){return a((0,p.c5)(e))}}),(0,R.jsx)(g.default,{color:"disabled",children:"heroicons-solid:search"})]}),(0,R.jsxs)(u.Z,{component:x.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-[209px] h-40 rounded-full border-1 shadow-0 bg-gray-200",children:[(0,R.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mr-6",children:(0,R.jsx)("path",{d:"M3 7H21M6 12H18M10 17H14",stroke:"black",strokeLinecap:"round"})}),(0,R.jsxs)(j.Z,{className:"flex w-full bg-white overflow-hidden h-40 rounded-3xl",variant:"filled",size:"small",children:[(0,R.jsx)(y.Z,{id:"category-select-label",children:"\u0645\u0631\u062a\u0628 \u0633\u0627\u0632\u06cc"}),(0,R.jsxs)(N.Z,{labelId:"category-select-label",id:"category-select",label:"Category",children:[(0,R.jsx)(v.Z,{value:"all",children:(0,R.jsx)("em",{children:" All "})}),(0,R.jsx)(v.Z,{value:"newest",onClick:function(e){e.preventDefault(),(0,p.mf)("newest")},children:(0,R.jsx)("em",{children:" \u062a\u0627\u0632\u0647 \u062a\u0631\u06cc\u0646 "})}),(0,R.jsx)(v.Z,{value:"oldest",onClick:function(e){e.preventDefault(),(0,p.mf)("oldest")},children:(0,R.jsx)("em",{children:" \u0622\u062e\u0631\u06cc\u0646 "})}),(0,R.jsx)(v.Z,{})]})]})]}),(0,R.jsxs)(u.Z,{component:x.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full sm:max-w-[209px] h-40 rounded-full border-1 shadow-0 bg-gray-200",children:[(0,R.jsx)(g.default,{className:"mr-6 ",size:20,color:"disabled",children:"feather:filter"}),(0,R.jsxs)(j.Z,{className:"flex w-full bg-white overflow-hidden h-40 rounded-3xl",variant:"filled",size:"small",children:[(0,R.jsx)(y.Z,{id:"category-select-label",children:"\u0641\u06cc\u0644\u062a\u0631 \u0647\u0627"}),(0,R.jsxs)(N.Z,{labelId:"category-select-label",id:"category-select",label:"Category",children:[(0,R.jsx)(v.Z,{value:"all",children:(0,R.jsx)("em",{children:" All "})}),(0,R.jsx)(v.Z,{value:"Pending",onClick:function(e){e.preventDefault(),(0,p.AC)("Pending")},children:(0,R.jsx)("em",{children:" Pend "})}),(0,R.jsx)(v.Z,{value:"Tracked",onClick:function(e){e.preventDefault(),(0,p.AC)("Tracked")},children:(0,R.jsx)("em",{children:" Track "})}),(0,R.jsx)(v.Z,{})]})]})]})]})})]})})},q=a(82524),O=a(78771),U=a(96023),$=a(22383),W=a(66398),G=a(65811),X=a(20805),J=a(11622),K=a(50201),Q=a(32531),V=a(99898),Y=a(33137),ee=[{id:"id",align:"right",disablePadding:!1,label:"\u0631\u062f\u06cc\u0641",sort:!0},{id:"products_name",align:"left",disablePadding:!1,label:"\u0639\u0646\u0648\u0627\u0646 \u062a\u06cc\u06a9\u062a",sort:!0},{id:"",align:"left",disablePadding:!1,label:"",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"\u0645\u0631\u0628\u0648\u0637 \u0628\u0647",sort:!0},{id:"seller_id",align:"left",disablePadding:!1,label:"\u062a\u0627\u0631\u06cc\u062e \u062b\u0628\u062a",sort:!0},{id:"price",align:"left",disablePadding:!1,label:"\u0627\u0648\u0644\u0648\u06cc\u062a",sort:!0},{id:"date",align:"end",disablePadding:!1,label:"\u0648\u0636\u0639\u06cc\u062a",sort:!0},{id:"product_type",className:"text-end",align:"center",disablePadding:!1,label:"\u062c\u0632\u0626\u06cc\u0627\u062a",sort:!0}];var te=function(e){var t=(0,i.Z)((function(e){return e.breakpoints.down("lg")})),a=(e.selectedProductIds.length,(0,c.useState)(null)),l=(0,s.Z)(a,2);return l[0],l[1],(0,h.useDispatch)(),(0,R.jsx)(R.Fragment,{children:t?null:(0,R.jsx)(u.Z,{className:"h-full  self-center p-10 rounded-2xl mx-auto my-20 border-1 shadow-inner",children:(0,R.jsx)("div",{className:"h-48  grid grid-cols-8 items-center text-start",children:ee.map((function(t){return(0,R.jsx)("div",{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,Y.$n)(e.palette.background.default,.4):(0,Y.$n)(e.palette.background.default,.02)}},className:(0,$.default)(" bg-white px-8",t.className),align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&(0,R.jsx)(Q.Z,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,R.jsx)("span",{direction:e.order.direction,onClick:(a=t.id,function(t){e.onRequestSort(t,a)}),className:"font-medium leading-6 text-14 text-[#1C1B1F]",children:t.label})})},t.id);var a}),this)})})})},ae=a(43413),le=[{id:"id",className:"text-right ",align:"right",disablePadding:!1,label:" \u0639\u0646\u0648\u0627\u0646 \u062a\u06cc\u06a9\u062a",sort:!0},{id:"products_name",className:"text-right ",align:"right",disablePadding:!1,label:" \u062a\u0627\u0631\u06cc\u062e",sort:!0},{id:"categories",className:"text-right ",align:"right",disablePadding:!1,label:"\u0645\u0631\u0628\u0648\u0637 \u0628\u0647",sort:!0},{id:"seller_id",className:"text-right ",align:"right",disablePadding:!1,label:"  \u0627\u0648\u0644\u0648\u06cc\u062a",sort:!0},{id:"date",className:"text-right ",align:"right",disablePadding:!1,label:"\u0648\u0636\u0639\u06cc\u062a",sort:!0}],ne={show:{transition:{staggerChildren:.05}}},ie={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},re=(0,ae.ZP)(X.Z)((function(e){e.theme;return{margin:0,border:"none!important",borderRadius:"8px!important",marginBottom:24,"&:before":{display:"none"},"&:first-of-type":{},"&:last-of-type":{marginBottom:0}}}));(0,W.default)((function(e){var t=this,a=(0,i.Z)((function(e){return e.breakpoints.down("lg")})),l=(e.list,e.className),n=(0,h.useDispatch)(),r=(0,h.useSelector)(p.nR),d=(0,h.useSelector)(p.Lm),o=(0,h.useSelector)(p.Lm),f=(0,h.useSelector)(p.Lm),b=(0,V.s0)(),j=(0,c.useState)(!0),y=(0,s.Z)(j,2),v=y[0],N=y[1],w=(0,c.useState)([]),Z=(0,s.Z)(w,2),k=Z[0],P=Z[1],C=(0,c.useState)(r[0]),S=(0,s.Z)(C,2),D=S[0],E=S[1],F=(0,c.useState)(0),T=(0,s.Z)(F,2),A=T[0],B=T[1],z=(0,c.useState)(10),I=(0,s.Z)(z,2),L=I[0],M=I[1],_=(0,c.useState)({direction:"asc",id:null}),H=(0,s.Z)(_,2),W=H[0],X=H[1];function Y(e){return new Date(e).toLocaleString("en-US",{month:"2-digit",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}if(e.selectedProductIds,(0,c.useEffect)((function(){n((0,p.Xp)({searchText:d,sort:o,filter:f})).then((function(){return N(!1)}))}),[n,d]),(0,c.useEffect)((function(){E(r)}),[r,d]),v)return(0,R.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,R.jsx)(G.default,{})});if(0===D.length)return(0,R.jsx)(x.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:(0,R.jsx)(m.Z,{color:"text.secondary",variant:"h5",children:"There are no Tickets!"})});var ee=(0,ae.ZP)(u.Z)((function(e){var t=e.theme;return{"& > .muirtl-ngw7zl-MuiPaper-root":{backgroundColor:"red"},"& .Paper-header":{backgroundColor:t.palette.background.paper},"& .FusePageCarded-wrapper":{backgroundColor:t.palette.background.div,alignItems:"center !important"},"& .FusePageCarded-contentWrapper":{alignItems:"center !important"},"& > .MuiPaper-root":{backgroundColor:"red","& >.muirtl-piv2u8-MuiPaper-root ":{backgroundColor:"red"}},"& > .muirtl-piv2u8-MuiPaper-root ":{backgroundColor:"red"}}}));return(0,R.jsx)(R.Fragment,{children:a?(0,R.jsx)("div",{className:"w-[326px] h-auto mx-auto flex flex-col min-h-full ",children:(0,R.jsx)(ee,{className:"shadow-xl bg-[#f5f5f5] rounded-2xl ",children:O.default.orderBy(D[0],[function(e){return"categories"===W.id?e.categories[0]:e[W.id]}],[W.direction]).slice(A*L,A*L+L).map((function(a){k.indexOf(a.id);return console.log("LOG N",a),(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(x.E.div,{variants:ne,initial:"hidden",animate:"show",className:(0,$.default)("mb-16 rounded-2xl",l),children:(0,R.jsx)("div",{component:x.E.div,variants:ie,classes:{root:"FaqPage-panel shadow"},children:(0,R.jsxs)(u.Z,{className:"flex flex-row gap-16 p-16",onClick:function(e){e.preventDefault(),b("/dashboard/user/ticketing/".concat(a.uuid))},children:[(0,R.jsx)("div",{className:"flex flex-col gap-12 ",children:le.map((function(t){return(0,R.jsx)("div",{sx:{backgroundColor:function(e){return"light"===e.palette.mode?lighten(e.palette.background.default,.4):lighten(e.palette.background.default,.02)}},className:(0,$.default)("flex",t.className),align:t.align,padding:t.disablePadding?"none":"normal",children:t.sort&&(0,R.jsx)(Q.Z,{enterDelay:300,children:(0,R.jsx)("span",{onClick:(a=t.id,function(t){e.onRequestSort(t,a)}),className:"font-normal text-12  leading-4 text-right text-[#B1B1B1]  whitespace-nowrap ",children:t.label})})},t.id);var a}),t)}),(0,R.jsx)(R.Fragment,{}),(0,R.jsxs)("div",{className:"flex flex-col gap-12",children:[(0,R.jsx)("div",{className:"flex items-center ",children:(0,R.jsx)(m.Z,{className:"font-medium text-12 leading-4 text-[#3D3D3D] text-right",children:a.title})}),(0,R.jsx)("div",{className:"flex items-center ",children:(0,R.jsx)(m.Z,{className:"font-medium text-12 leading-4 text-[#3D3D3D] text-right",children:Y(a.createdAt)})}),(0,R.jsx)("div",{className:"flex items-center ",children:(0,R.jsx)(m.Z,{className:"font-medium text-12 leading-4 text-[#3D3D3D] text-right",children:a.related})}),(0,R.jsx)("div",{className:"flex items-center ",children:(0,R.jsx)(m.Z,{className:"font-medium text-12 leading-4 text-[#3D3D3D] text-right",children:(0,R.jsxs)("span",{className:"p-4 md:p-16 place-self-center",component:"th",scope:"row",align:"right",children:[a.importance,(0,R.jsx)("i",{className:(0,$.default)("inline-block w-8 h-8 rounded mx-8","High"===a.importance&&"bg-red","Normal"===a.importance&&"bg-orange","Low"===a.importance&&"bg-green")})]})})}),(0,R.jsx)("div",{className:"flex items-center ",children:(0,R.jsx)(m.Z,{className:"font-medium text-12 leading-4 text-[#3D3D3D] text-right",children:a.active?(0,R.jsx)(g.default,{className:"text-green",size:20,children:"heroicons-outline:check-circle"}):(0,R.jsx)(g.default,{className:"text-red",size:20,children:"heroicons-outline:minus-circle"})})})]})]})})},a.id)})}))})}):(0,R.jsxs)("div",{className:"w-full flex flex-col min-h-full ",children:[(0,R.jsx)(q.default,{className:"grow overflow-x-auto ",children:(0,R.jsxs)("div",{className:"min-w-xl   overflow-hidden","aria-labelledby":"tableTitle",children:[(0,R.jsx)(te,{selectedProductIds:k,order:W,onSelectAllClick:function(e){e.target.checked?P(D.map((function(e){return e.id}))):P([])},onRequestSort:function(e,t){var a=t,l="desc";W.id===t&&"desc"===W.direction&&(l="asc"),X({direction:l,id:a})},rowCount:D.length,onMenuItemClick:function(){P([])}}),(0,R.jsx)("div",{children:(0,R.jsx)(u.Z,{className:"shadow-xl  rounded-2xl ",children:O.default.orderBy(D[0],[function(e){return"categories"===W.id?e.categories[0]:e[W.id]}],[W.direction]).slice(A*L,A*L+L).map((function(e,t){k.indexOf(e.id);return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(u.Z,{variants:ne,initial:"hidden",animate:"show",className:(0,$.default)("shadow-inner border-1 mb-4 ",l),onClick:function(t){t.preventDefault(),b("/dashboard/user/ticketing/".concat(e.uuid))},sx:{border:"1px solid"},children:(0,R.jsxs)(re,{className:"shadow-inner",children:[(0,R.jsx)(J.Z,{expandIcon:(0,R.jsx)(g.default,{children:"heroicons-outline:chevron-down"}),children:(0,R.jsxs)("div",{className:"grid grid-cols-7",children:[(0,R.jsx)("div",{className:"flex items-center py-4",children:(0,R.jsx)(m.Z,{className:"px-12 font-medium",children:++t})}),(0,R.jsx)("div",{className:"flex items-center py-4 col-span-2",children:(0,R.jsx)(m.Z,{className:"px-12 font-medium",children:e.title})}),(0,R.jsx)("div",{className:"flex items-center py-4",children:(0,R.jsx)(m.Z,{className:"px-12 font-medium",children:e.related})}),(0,R.jsx)("div",{className:"flex items-center py-4",children:(0,R.jsx)(m.Z,{className:"px-12 font-medium",children:Y(e.createdAt)})}),(0,R.jsx)("div",{className:"flex items-center py-4 justify-start",children:(0,R.jsx)(m.Z,{className:"px-12 font-medium",children:(0,R.jsxs)("span",{className:"p-4 md:p-16 place-self-center",component:"th",scope:"row",align:"right",children:[e.importance,(0,R.jsx)("i",{className:(0,$.default)("inline-block w-8 h-8 rounded mx-8","High"===e.importance&&"bg-red","Normal"===e.importance&&"bg-orange","Low"===e.importance&&"bg-green")})]})})}),(0,R.jsx)("div",{className:"flex items-center py-4 justify-start",children:(0,R.jsx)(m.Z,{className:"px-12 font-medium",children:"Done"===e.status?(0,R.jsx)(g.default,{className:"text-green",size:20,children:"heroicons-outline:check-circle"}):(0,R.jsx)(g.default,{className:"text-red",size:20,children:"heroicons-outline:minus-circle"})})})]})}),(0,R.jsx)(K.Z,{className:"px-40",children:(0,R.jsx)(u.Z,{className:"bg-[#11C5E3] opacity-50 rounded-xl px-32 pb-8 -mt-8",children:(0,R.jsx)(m.Z,{className:"text-12 font-normal leading-10 text-right text-[#5E5E5E] px-32 pb-8 -mt-8 ",children:e.details})})})]})},e.id)})}))})})]})}),(0,R.jsx)(U.Z,{className:"shrink-0 border-t-1",component:"div",count:D.length,rowsPerPage:L,page:A,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){B(t)},onRowsPerPageChange:function(e){M(e.target.value)}})]})})}));var se=a(96089),ce=a(83039),de=a(56300),oe=a(32060),ue=a(75866),me=a(57495),xe=(0,P.createAsyncThunk)("UserManageTickets/manageTickets/fetchTickets",(0,k.Z)((0,Z.Z)().mark((function e(){var t,a;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,ue.Z)("GET",(0,oe.EP)()+"/ticketing",{Authorization:"Bearer "+me.Z.getAccessToken()},{});case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),he=(0,P.createSlice)({name:"ticket",initialState:{tickets:[],status:"idle",error:null},reducers:{setTotalTickets:{reducer:function(e,t){e.totalTickets=t.payload},prepare:function(e){return{payload:e||1}}}},extraReducers:function(e){e.addCase(xe.pending,(function(e){e.status="loading"})).addCase(xe.fulfilled,(function(e,t){e.status="succeeded",e.tickets=t.payload})).addCase(xe.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),fe=(he.reducer,he.actions.setTotalTickets);var ge=function(e){var t=e.data,a=e.onSelect,l=(0,h.useSelector)(fe),n=(0,h.useDispatch)(),i=(0,h.useSelector)((function(e){return e.tickets.status})),r=(0,h.useSelector)((function(e){return e.tickets.error}));return useEffect((function(){"idle"===i&&n(xe())}),[i,n]),"loading"===i?(0,R.jsx)("div",{children:"Loading..."}):"failed"===i?(0,R.jsxs)("div",{children:["Error: ",r]}):l.map((function(e){return(0,R.jsxs)(de.ZP,{className:"w-[1020px] lg:min-h-0 my-4 mb-10 grid  grid-cols-7 py-12 h-80 mt-16max-h-80 border-1 border-solid shadow-lg ",sx:{bgcolor:"background.paper",borderRadius:"18px"},onClick:function(){return a(t)},children:[(0,R.jsx)(ce.Z,{classes:{root:"m-0",primary:"font-medium leading-5 truncate "},primary:"{ticket.title}"}),(0,R.jsx)(ce.Z,{classes:{root:"m-0",primary:"font-medium leading-5 truncate"},primary:e.related}),(0,R.jsx)(ce.Z,{classes:{root:"m-0",primary:"font-medium leading-5 truncate "},primary:e.importance}),(0,R.jsx)(ce.Z,{classes:{root:"m-0",primary:"font-medium leading-5 truncate"},primary:e.file}),(0,R.jsx)(ce.Z,{classes:{root:"m-0",primary:"font-medium leading-5 truncate"},primary:e.details})]})}))},pe=a(18203),be=[{id:"id",disablePadding:!1,label:"\u0631\u062f\u06cc\u0641",sort:!0},{id:"products_name",disablePadding:!1,label:"\u0639\u0646\u0648\u0627\u0646 \u062a\u06cc\u06a9\u062a",sort:!0},{id:"categories",disablePadding:!1,label:"\u0645\u0631\u0628\u0648\u0637 \u0628\u0647",sort:!0},{id:"seller_id",disablePadding:!1,label:"\u062a\u0627\u0631\u06cc\u062e \u062b\u0628\u062a",sort:!0},{id:"price",disablePadding:!1,label:"\u0627\u0648\u0644\u0648\u06cc\u062a",sort:!0},{id:"date",align:"end",disablePadding:!1,label:"\u0648\u0636\u0639\u06cc\u062a",sort:!0},{id:"product_type",className:"text-end",align:"center",disablePadding:!1,label:"\u062c\u0632\u0626\u06cc\u0627\u062a",sort:!0}];var je=function(){var e=(0,i.Z)((function(e){return e.breakpoints.down("lg")})),t=(0,c.useState)(null),a=(0,s.Z)(t,2);return a[0],a[1],(0,R.jsx)(R.Fragment,{children:e?null:(0,R.jsxs)(u.Z,{className:"h-full  self-center p-10 rounded-2xl mx-auto  my-36 border-1 shadow-inner",children:[(0,R.jsx)("div",{className:"h-48  grid grid-cols-7 mb-8 items-center text-start",children:be.map((function(e){return(0,R.jsx)("div",{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,Y.$n)(e.palette.background.default,.4):(0,Y.$n)(e.palette.background.default,.02)}},className:(0,$.default)(" bg-white px-8 "),padding:e.disablePadding?"none":"normal",children:e.sort&&(0,R.jsx)(Q.Z,{title:"Sort",placement:"right"===e.align?"bottom-end":"bottom-start",enterDelay:300,children:(0,R.jsx)("span",{className:"font-medium leading-6 text-14 text-[#1C1B1F]",children:e.label})})},e.id)}),this)}),(0,R.jsx)(ge,{}),(0,R.jsx)(ge,{})]})})};var ye=function(e){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(je,{}),(0,R.jsx)(x.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-col flex-auto w-full max-h-full",children:(0,R.jsx)(pe.Z,{className:"flex flex-col items-center py-16",count:2,page:1,variant:"outlined",color:"secondary"})})]})};var ve=(0,n.Z)("eCommerceApp",r.Z)((function(){var e=(0,i.Z)((function(e){return e.breakpoints.down("lg")})),t=(0,ae.ZP)(l.Z)((function(e){e.theme;return{"& .FusePageCarded-header":{},"& .FusePageCarded-wrapper":{backgroundColor:"transparent !important"}}}));return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(se.ql,{prioritizeSeoTags:!0,children:(0,R.jsx)("title",{children:"User Support | \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646"})}),(0,R.jsx)(t,{header:(0,R.jsx)(H,{}),content:(0,R.jsx)(ye,{}),scroll:e?"normal":"content"})]})}))}}]);