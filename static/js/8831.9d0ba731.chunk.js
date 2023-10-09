"use strict";(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[8831],{55298:function(e,t,r){var n=r(45129),a=r(2821),o=r(51227),i=(0,n.UY)({products:o.ZP,product:a.ZP});t.Z=i},2821:function(e,t,r){r.d(t,{AC:function(){return m},Fn:function(){return v},gg:function(){return p},kh:function(){return f},ms:function(){return h},wv:function(){return s}});var n,a=r(64649),o=r(11092),i=r(27791),u=r(95514),d=r(45960),l=r.n(d),c=r(12565),s=(0,u.hg)("eCommerceApp/product/getProduct",function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/api/ecommerce/products/".concat(t));case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",void 0===n?null:n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=(0,u.hg)("eCommerceApp/product/removeProduct",function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,r){var n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,n=r.getState,a=n().eCommerceApp.product.id,e.next=4,l().delete("/api/ecommerce/products/".concat(a));case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),p=(0,u.hg)("eCommerceApp/product/saveProduct",function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,r){var n,a,i,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,n=r.getState,a=n().eCommerceApp.id,e.next=4,l().put("/api/ecommerce/products/".concat(a),t);case 4:return i=e.sent,e.next=7,i.data;case 7:return u=e.sent,e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),g=(0,u.oM)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:c.default.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(n={},(0,a.Z)(n,s.fulfilled,(function(e,t){return t.payload})),(0,a.Z)(n,p.fulfilled,(function(e,t){return t.payload})),(0,a.Z)(n,f.fulfilled,(function(e,t){return null})),n)}),b=g.actions,m=b.newProduct,h=b.resetProduct,v=function(e){return e.eCommerceApp.product};t.ZP=g.reducer},51227:function(e,t,r){r.d(t,{$0:function(){return s},Lm:function(){return h},Xp:function(){return c},c5:function(){return m},nR:function(){return g}});var n,a=r(64649),o=r(11092),i=r(27791),u=r(95514),d=r(45960),l=r.n(d),c=(0,u.hg)("eCommerceApp/products/getProducts",(0,i.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/api/ecommerce/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),s=(0,u.hg)("eCommerceApp/products",function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,r){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,l().delete("/api/ecommerce/products",{data:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=(0,u.HF)({}),p=f.getSelectors((function(e){return e.eCommerceApp.products})),g=p.selectAll,b=(p.selectById,(0,u.oM)({name:"eCommerceApp/products",initialState:f.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},(0,a.Z)(n,c.fulfilled,f.setAll),(0,a.Z)(n,s.fulfilled,(function(e,t){return f.removeMany(e,t.payload)})),n)})),m=b.actions.setProductsSearchText,h=function(e){return e.eCommerceApp.products.searchText};t.ZP=b.reducer},49489:function(e,t,r){var n=r(93231).default;r(57639),r(36992),r(4722),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=b(r(82524)),i=r(86356),u=b(r(22383)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(8984)),l=b(r(66845)),c=b(r(11933)),s=b(r(44263)),f=b(r(31335)),p=["theme"];function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var C=(0,i.styled)("div")((function(e){var t=e.theme,r=P(e,p);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-scroll-content":{height:"100%"},"& .FusePageCarded-wrapper":h({display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,maxWidth:"100%",minWidth:0,height:"100%",backgroundColor:t.palette.background.paper},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0,overflow:"hidden"}),"& .FusePageCarded-header":{display:"flex",flex:"0 0 auto"},"& .FusePageCarded-contentWrapper":{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto",WebkitOverflowScrolling:"touch",zIndex:9999},"& .FusePageCarded-toolbar":{height:S,minHeight:S,display:"flex",alignItems:"center"},"& .FusePageCarded-content":{flex:"1 0 auto"},"& .FusePageCarded-sidebarWrapper":{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":n({},t.breakpoints.up("lg"),{position:"relative",marginLeft:0,marginRight:0,transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),"&.closed":{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),"&.FusePageCarded-leftSidebar":{marginLeft:-r.leftsidebarwidth},"&.FusePageCarded-rightSidebar":{marginRight:-r.rightsidebarwidth}}})},"& .FusePageCarded-sidebar":{position:"absolute",backgroundColor:t.palette.background.paper,color:t.palette.text.primary,"&.permanent":n({},t.breakpoints.up("lg"),{position:"relative"}),maxWidth:"100%",height:"100%"},"& .FusePageCarded-leftSidebar":n({width:r.leftsidebarwidth},t.breakpoints.up("lg"),{}),"& .FusePageCarded-rightSidebar":n({width:r.rightsidebarwidth},t.breakpoints.up("lg"),{}),"& .FusePageCarded-sidebarHeader":{height:y,minHeight:y,backgroundColor:t.palette.primary.dark,color:t.palette.primary.contrastText},"& .FusePageCarded-sidebarHeaderInnerSidebar":{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},"& .FusePageCarded-sidebarContent":{display:"flex",flexDirection:"column",minHeight:"100%"},"& .FusePageCarded-backdrop":{position:"absolute"}}})),y=120,S=64,O=l.default.forwardRef((function(e,t){var r=l.default.useRef(null),n=l.default.useRef(null),a=l.default.useRef(null);return l.default.useImperativeHandle(t,(function(){return{rootRef:a,toggleLeftSidebar:function(e){r.current.toggleSidebar(e)},toggleRightSidebar:function(e){n.current.toggleSidebar(e)}}})),l.default.createElement(l.default.Fragment,null,l.default.createElement(c.default,{styles:function(t){return h(h({},"page"!==e.scroll&&{"#fuse-toolbar":{position:"static"},"#fuse-footer":{position:"static"}}),"page"===e.scroll&&{"#fuse-toolbar":{position:"sticky",top:0},"#fuse-footer":{position:"sticky",bottom:0}})}}),l.default.createElement(C,{className:(0,u.default)("FusePageCarded-root","FusePageCarded-scroll-".concat(e.scroll),e.className),ref:a,scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth},e.header&&l.default.createElement(s.default,{header:e.header}),l.default.createElement("div",{className:"flex flex-auto flex-col container z-10 h-full rounded-t-16 relative overflow-hidden"},l.default.createElement("div",{className:"FusePageCarded-wrapper"},e.leftSidebarContent&&l.default.createElement(f.default,{position:"left",content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",ref:r,rootRef:a,open:e.leftSidebarOpen,onClose:e.leftSidebarOnClose}),l.default.createElement(o.default,{className:"FusePageCarded-contentWrapper",enable:"content"===e.scroll},e.content&&l.default.createElement("div",{className:(0,u.default)("FusePageCarded-content")},e.content)),e.rightSidebarContent&&l.default.createElement(f.default,{position:"right",content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",ref:n,rootRef:a,open:e.rightSidebarOpen,onClose:e.rightSidebarOnClose})))))}));O.propTypes={leftSidebarHeader:d.node,leftSidebarContent:d.node,leftSidebarVariant:d.node,rightSidebarContent:d.node,rightSidebarVariant:d.node,header:d.node,content:d.node,contentToolbar:d.node,scroll:d.oneOf(["normal","page","content"]),leftSidebarOpen:d.bool,rightSidebarOpen:d.bool,leftSidebarWidth:d.number,rightSidebarWidth:d.number,rightSidebarOnClose:d.func,leftSidebarOnClose:d.func},O.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var w,x,F=l.default.memo((0,i.styled)(O)(a||(w=[""],x||(x=w.slice(0)),a=Object.freeze(Object.defineProperties(w,{raw:{value:Object.freeze(x)}})))));t.default=F},44263:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(22383)),a=o(r(66845));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return a.default.createElement("div",{className:(0,n.default)("FusePageCarded-header","container")},e.header&&e.header)};t.default=i},31335:function(e,t,r){var n=r(40131).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(4722);var a=c(r(30802)),o=c(r(60205)),i=c(r(78708)),u=c(r(22383)),d=c(r(77915)),l=c(r(66845));function c(e){return e&&e.__esModule?e:{default:e}}var s=l.default.forwardRef((function(e,t){var r=e.open,c=e.position,s=e.variant,f=(e.rootRef,l.default.useState(r)),p=n(f,2),g=p[0],b=p[1];l.default.useImperativeHandle(t,(function(){return{toggleSidebar:m}}));var m=l.default.useCallback((function(e){b(e)}),[]);return l.default.useEffect((function(){m(r)}),[m,r]),l.default.createElement(l.default.Fragment,null,l.default.createElement(o.default,{lgUp:"permanent"===s},l.default.createElement(i.default,{variant:"temporary",anchor:c,open:g,onOpen:function(e){},onClose:function(){return null===e||void 0===e?void 0:e.onClose()},disableSwipeToOpen:!0,classes:{root:(0,u.default)("FusePageCarded-sidebarWrapper",s),paper:(0,u.default)("FusePageCarded-sidebar",s,"left"===c?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"}},l.default.createElement(d.default,e))),"permanent"===s&&l.default.createElement(o.default,{lgDown:!0},l.default.createElement(a.default,{variant:"permanent",anchor:c,className:(0,u.default)("FusePageCarded-sidebarWrapper",s,g?"opened":"closed","left"===c?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar"),open:g,onClose:null===e||void 0===e?void 0:e.onClose,classes:{paper:(0,u.default)("FusePageCarded-sidebar",s)}},l.default.createElement(d.default,e))))}));s.defaultProps={open:!0};var f=s;t.default=f},77915:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(35269),a=l(r(82524)),o=r(86356),i=r(75653),u=l(r(22383)),d=l(r(66845));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=(0,o.useTheme)(),r=(0,n.useSelector)((0,i.selectContrastMainTheme)(t.palette.primary.main));return d.default.createElement(a.default,{enable:e.innerScroll},e.header&&d.default.createElement(o.ThemeProvider,{theme:r},d.default.createElement("div",{className:(0,u.default)("FusePageCarded-sidebarHeader",e.variant,e.sidebarInner&&"FusePageCarded-sidebarHeaderInnerSidebar")},e.header)),e.content&&d.default.createElement("div",{className:"FusePageCarded-sidebarContent"},e.content))};t.default=c},60903:function(e,t,r){Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(49489))&&n.__esModule?n:{default:n}}}]);