"use strict";(self.webpackChunkcipherland_code=self.webpackChunkcipherland_code||[]).push([[9315],{9315:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var s=r(11026),n=r(86612),a=r(66845),i=r(99898),c=r(96089),l=r(65811),o=r(56002),u=r(8768),d=r(65875),f=r(40864);function p(t){t.grammars,t.breadcrumbsList;return(0,f.jsx)("div",{className:"flex w-full"})}function h(){var t=(0,a.useState)(!0),e=(0,s.Z)(t,2),r=e[0],h=e[1],m=(0,a.useState)("questions"),x=(0,s.Z)(m,2),j=x[0],v=(x[1],(0,a.useState)([])),g=(0,s.Z)(v,2),b=g[0],T=g[1],q=(0,i.UO)();return(0,a.useEffect)((function(){scrollTo({top:0}),h(!0);var t="api/v1/learnest/course/session/part-questions";t+="?part_id=".concat(q.partsId),(0,u.Z)("GET",t,void 0,void 0).then((function(t){T(t.data.data.questions),h(!1)})).catch((function(t){console.log(t),h(!1)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.ql,{prioritizeSeoTags:!0,children:(0,f.jsx)("title",{children:q.partTitle})}),(0,f.jsx)(n.Z,{content:(0,f.jsx)(f.Fragment,{children:r?(0,f.jsx)("div",{className:"flex w-full items-center justify-center \r min-h-[calc(100vh-150px)]",children:(0,f.jsx)(l.default,{})}):(0,f.jsxs)(f.Fragment,{children:["grammars"===j&&(0,f.jsx)(p,{grammars:grammars,breadcrumbsList:[{title:"\u062f\u0648\u0631\u0647",href:(0,d.X)(5)},{title:"\u062c\u0644\u0633\u0647",href:(0,d.X)(3)},{title:q.partTitle}]}),"questions"===j&&(0,f.jsx)(o.Z,{questions:b,answeringType:1,typeId:+q.partsId,breadcrumbsList:[{title:"\u062f\u0648\u0631\u0647",href:(0,d.X)(5)},{title:"\u062c\u0644\u0633\u0647",href:(0,d.X)(3)},{title:q.partTitle}]})]})})})]})}},65875:function(t,e,r){function s(t){var e=location.pathname.split("/");""===e.lastItem&&e.pop();for(var r=0;r<t;r++)e.pop();return e.join("/")}r.d(e,{X:function(){return s}})}}]);