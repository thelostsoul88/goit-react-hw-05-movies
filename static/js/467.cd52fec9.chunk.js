"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[467],{137:function(e,t,r){var n=r(689),a=r(87),s=r(184);t.Z=function(e){var t=e.movies,r=e.location,i=(0,n.TH)(),c=r.pathname;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ol",{className:"list-decimal mb-5",children:t.map((function(e){return(0,s.jsx)("li",{className:"mb-1 ml-12",children:(0,s.jsx)(a.rU,{to:"/"!==c?"".concat(e.id):"movies/".concat(e.id),state:{from:i},className:"hover:text-stone-400",children:e.title})},e.id)}))})})}},467:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(137),o=r(330),u=r(791),l=r(73),m=r(689),d=r(243);d.Z.defaults.baseURL="https://api.themoviedb.org/",d.Z.defaults.params={api_key:"11546a486a09144867cb90a93b48d542"};var f=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=f,v=r(184),h=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],d=(0,u.useState)(!1),f=(0,a.Z)(d,2),h=f[0],x=f[1],b=(0,m.TH)();return(0,u.useEffect)((function(){(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,p();case 4:if(t=e.sent,(r=t.results).length){e.next=10;break}return l.Am.error("Movie not found"),x(!1),e.abrupt("return");case 10:s(r),x(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),l.Am.error("".concat(e.t0.message,". Movies loading failed, please try again")),x(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{className:"font-bold text-2xl mb-3",children:"Trending Movies"}),(0,v.jsx)(c.Z,{movies:r,location:b}),h&&(0,v.jsx)(o.Z,{})]})}}}]);
//# sourceMappingURL=467.cd52fec9.chunk.js.map