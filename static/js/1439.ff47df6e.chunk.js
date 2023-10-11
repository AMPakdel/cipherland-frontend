"use strict";(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[1439],{83474:function(e,t,n){var r=n(45129),a=n(33476),s=n(73257),i=n(43782),l=(0,r.UY)({users:a.ZP,user:s.ZP,roles:i.ZP});t.Z=l},43782:function(e,t,n){n.d(t,{F3:function(){return o},g$:function(){return f}});var r=n(64649),a=n(11092),s=n(27791),i=n(95514),l=n(75866),u=n(57495),o=(0,i.hg)("userManager/roles/getRoles",(0,s.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)("GET","/api/role/all",{Authorization:"Bearer "+u.Z.getAccessToken()},{},{});case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),c=(0,i.HF)({selectId:function(e){return e.uuid}}),d=c.getSelectors((function(e){return e.userManager.roles})),f=d.selectAll,m=(d.selectById,(0,i.oM)({name:"userManager/roles",initialState:c.getInitialState({}),reducers:{},extraReducers:(0,r.Z)({},o.fulfilled,(function(e,t){return e.total=t.payload.total,c.setAll(e,t.payload.data)}))}));t.ZP=m.reducer},33476:function(e,t,n){n.d(t,{Rf:function(){return d},T5:function(){return v},YN:function(){return x},bz:function(){return f},i0:function(){return g},pd:function(){return Z}});var r,a=n(64649),s=n(11092),i=n(50189),l=n(27791),u=n(95514),o=n(75866),c=n(57495),d=(0,u.hg)("userManager/users/getUsers",(0,l.Z)((0,s.Z)().mark((function e(){var t,n,r,a=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{page:page,limit:limit,search:search},e.next=3,(0,o.Z)("GET","/api/user/all",{Authorization:"Bearer "+c.Z.getAccessToken()},(0,i.Z)({},t),{});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))),f=(0,u.hg)("userManager/users",function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch,n.getState,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),m=(0,u.HF)({selectId:function(e){return e.uuid}}),h=m.getSelectors((function(e){return e.userManager.users})),x=h.selectAll,p=(h.selectById,(0,u.oM)({name:"userManager/users",initialState:m.getInitialState({searchText:"",total:0}),reducers:{setUsersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},setUsersTotal:{reducer:function(e,t){e.total=t.payload},prepare:function(e){return{payload:e.target.value||0}}}},extraReducers:(r={},(0,a.Z)(r,d.fulfilled,(function(e,t){return e.total=t.payload.total,m.setAll(e,t.payload.data)})),(0,a.Z)(r,f.fulfilled,(function(e,t){return m.removeMany(e,t.payload)})),r)})),v=p.actions.setUsersSearchText,Z=function(e){return e.userManager.users.searchText},g=(p.actions.setUsersTotal,function(e){return e.userManager.users.total});t.ZP=p.reducer},61439:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(50189),a=n(65811),s=n(60903),i=n(14565),l=n(77621),u=n(90527),o=n(4019),c=n(43413),d=n(96089),f=n(90694),m=n(98225),h=n(78684),x=n(78771),p=n(25358),v=n(83474),Z=n(12921),g=n(73257),y=n(89310),j=n(35269),S=n(99898);var b=function(e){var t=(0,j.useDispatch)(),n=(0,p.Gc)(),r=n.formState,a=n.watch,s=n.getValues,i=r.isValid,l=r.dirtyFields,u=a("firstName"),o=(0,y.Z)(),c=(0,S.s0)();return{isValid:i,dirtyFields:l,firstName:u,theme:o,handleSaveUser:function(){t((0,g.JR)(s())).then((function(){c("/users-management/users")}))},handleRemoveUser:function(){t((0,g.kX)()).then((function(){c("/users-management/users")}))}}},N=n(40864);var w=function(e){var t=e.t,n=b(e),r=n.isValid,a=n.dirtyFields,s=n.firstName,l=n.theme,u=n.handleSaveUser,c=n.handleRemoveUser;return(0,N.jsxs)("div",{className:"flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32",children:[(0,N.jsxs)("div",{className:"flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0",children:[(0,N.jsx)(m.E.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:(0,N.jsxs)(o.Z,{className:"flex items-center sm:mb-12",component:h.Link,role:"button",to:"/users-management/users",color:"inherit",children:[(0,N.jsx)(Z.default,{size:20,children:"ltr"===l.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),(0,N.jsx)("span",{className:"flex mx-4 font-medium",children:t("USERS")})]})}),(0,N.jsxs)("div",{className:"flex items-center max-w-full",children:[(0,N.jsx)(m.E.div,{className:"hidden sm:flex",initial:{scale:0},animate:{scale:1,transition:{delay:.3}}}),(0,N.jsx)(m.E.div,{className:"flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16",initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:(0,N.jsx)(o.Z,{className:"text-16 sm:text-20 truncate font-semibold",children:s||t("NEW_USER")})})]})]}),(0,N.jsxs)(m.E.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:[!s||(0,N.jsx)(i.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:c,startIcon:(0,N.jsx)(Z.default,{className:"hidden sm:flex",children:"heroicons-outline:trash"}),children:t("REMOVE")}),(0,N.jsx)(i.Z,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",disabled:x.default.isEmpty(a)||!r,onClick:u,children:t("SAVE")})]})]})},E=n(95338),R=n(11026),U=n(66845),I=n(13597),T=n(33416),k=n(82426),M=n(61927),_=T.Ry().shape({firstName:T.Z_().required("You must enter a first name").min(3,"The first name must be at least 3 characters"),lastName:T.Z_().required("You must enter a last name").min(3,"The last name must be at least 3 characters"),email:T.Z_().required("You must enter a email"),photoURL:T.IX().nullable(!0),status:T.Z_().required("You must enter a status"),nationalCode:T.Z_().required("You must enter a nationalCode"),mobile:T.Z_().required("You must enter a mobile")});var C=function(e){var t=(0,j.useDispatch)(),n=(0,U.useState)(0),r=(0,R.Z)(n,2),a=r[0],s=r[1],i=(0,j.useSelector)(g.dy),l=(0,k.Z)((function(e){return e.breakpoints.down("lg")})),u=(0,S.UO)(),o=(0,U.useState)(!1),c=(0,R.Z)(o,2),d=c[0],f=c[1],m=(0,p.cI)({mode:"onChange",defaultValues:{},resolver:(0,I.X)(_)}),h=m.reset,x=m.watch,v=(m.control,m.onChange,m.formState,x());return(0,M.useDeepCompareEffect)((function(){!function(){var e=u.userId;"new"===e?t((0,g.W$)()):t((0,g.PR)(e)).then((function(e){e.payload||f(!0)}))}()}),[t,u]),(0,U.useEffect)((function(){i&&h(i)}),[i,h]),(0,U.useEffect)((function(){return function(){t((0,g.zb)()),f(!1)}}),[t]),{noUser:d,user:i,routeParams:u,methods:m,isMobile:l,form:v,tabValue:a,handleTabChange:function(e,t){s(t)}}},V=n(38708),A=n(76334),D=n(649),O=n(43782);var P=function(e){var t=(0,j.useDispatch)(e),n=(0,p.Gc)(),a=n.setValue,s=n.getValues,i=(0,j.useSelector)(g.dy),l=x.default.map(i.user_roles,(function(e){return e.role_uuid})),u=(0,j.useSelector)(O.g$),o=(0,U.useState)([]),c=(0,R.Z)(o,2),d=c[0],f=c[1],m=(0,U.useState)([]),h=(0,R.Z)(m,2),v=h[0],Z=h[1],y=(0,U.useState)(-1),b=(0,R.Z)(y,2),N=b[0],w=b[1];return(0,S.UO)(),(0,U.useEffect)((function(){if(!(N>0)){if(u.length>0){if((null===l||void 0===l?void 0:l.length)>0){var e=l;f(e),a("roles",e,{shouldDirty:!0,shouldValidate:!0})}var n=null===u||void 0===u?void 0:u.map((function(e){return l&&l.find((function(t){return t===e.uuid}))?(0,r.Z)((0,r.Z)({},e),{},{inRole:!0}):(0,r.Z)((0,r.Z)({},e),{},{inRole:!1})}));return Z(n),void w(N+1)}t((0,O.F3)())}}),[u,d]),{rolesItem:v,handleClick:function(e){var t=[].concat((0,D.Z)(d),[e]);f(t);var n=(0,D.Z)(v);n.map((function(t){t.uuid===e&&(t.inRole=!0)})),Z(n),a("roles",t,{shouldDirty:!0,shouldValidate:!0}),console.info("You clicked the add id.",s())},handleDelete:function(e){var t=d.filter((function(t){return t!==e}));f(t);var n=(0,D.Z)(v);n.map((function(t){t.uuid===e&&(t.inRole=!1)})),Z(n),a("roles",t,{shouldDirty:!0,shouldValidate:!0}),console.info("You clicked the delete id.",s())}}},F=n(52066),Y=n(23474),z=n(30106);var q=function(e){var t=P(e),n=t.rolesItem,r=t.handleClick,a=t.handleDelete;return(0,N.jsx)("div",{children:(0,N.jsx)(F.Z,{direction:"row",spacing:1,children:null===n||void 0===n?void 0:n.map((function(e){return e.inRole?(0,N.jsx)(A.Z,{label:e.title,onDelete:function(){return a(e.uuid)},color:"success",deleteIcon:(0,N.jsx)(Y.Z,{})},e.uuid):(0,N.jsx)(A.Z,{label:e.title,onClick:function(){return r(e.uuid)},variant:"outlined",deleteIcon:(0,N.jsx)(z.Z,{})},e.uuid)}))})})},G=(0,c.ZP)(s.Z)((function(e){e.theme;return{padding:"20px"}}));var L=(0,f.Z)("userManager",v.Z)((function(e){var t=C(e),n=t.noUser,s=t.user,c=t.routeParams,f=t.methods,v=t.isMobile,Z=t.form,g=t.tabValue,y=t.handleTabChange,j=(0,V.$)("usersPage").t;return n?(0,N.jsxs)(m.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[(0,N.jsx)(o.Z,{color:"text.secondary",variant:"h5",children:j("THERE_IS_NO_SUCH_USER")}),(0,N.jsx)(i.Z,{className:"mt-24",component:h.Link,variant:"outlined",to:"/users-management/users",color:"inherit",children:j("GO_TO_USERS_PAGE")})]}):x.default.isEmpty(Z)||s&&c.userId!==(null===s||void 0===s?void 0:s.uuid)&&"new"!==c.userId?(0,N.jsx)(a.default,{}):(0,N.jsxs)(p.RV,(0,r.Z)((0,r.Z)({},f),{},{children:[(0,N.jsx)(d.ql,{prioritizeSeoTags:!0,children:(0,N.jsx)("title",{children:j("USER_INFORMATION")})}),(0,N.jsx)(G,{header:(0,N.jsx)(w,{t:j}),content:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(u.Z,{value:g,onChange:y,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:[(0,N.jsx)(l.Z,{className:"h-64",label:j("USER_INFORMATION")}),(0,N.jsx)(l.Z,{className:"h-64",label:j("ROLES")})]}),(0,N.jsxs)("div",{className:"p-16 sm:p-24 max-w-3xl",children:[(0,N.jsx)("div",{className:0!==g?"hidden":"",children:(0,N.jsx)(E.Z,{model:null===s||void 0===s?void 0:s.model,t:j})}),(0,N.jsx)("div",{className:1!==g?"hidden":"",children:(0,N.jsx)(q,{t:j})})]})]}),scroll:v?"normal":"content"})]}))}))},30106:function(e,t,n){var r=n(73203);t.Z=void 0;var a=r(n(75437)),s=n(40864),i=(0,a.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},23474:function(e,t,n){var r=n(73203);t.Z=void 0;var a=r(n(75437)),s=n(40864),i=(0,a.default)((0,s.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.Z=i}}]);