"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{9137:function(t,e,r){var n=r(7689),a=r(1087),c=r(184);e.Z=function(t){var e=t.movies,r=t.location,s=(0,n.TH)(),u=r.pathname;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:"mb-5 flex flex-wrap",children:e.map((function(t){var e=t.id,r=t.poster_path,n=t.title;return(0,c.jsxs)("li",{className:"mb-3 ml-12 border border-black text-center",children:[(0,c.jsx)("img",{src:r?"http://image.tmdb.org/t/p/w500/"+r:"https://yt3.googleusercontent.com/pL_VB56ZIus1L_ORk679enHohInq0pjCweZ4vgqS5yM4KB0mAp8DEznP94MdSIQpSM3-5uE_lQ=s900-c-k-c0x00ffffff-no-rj",alt:n,width:"200"}),(0,c.jsx)(a.rU,{to:"/"!==u?"".concat(e):"movies/".concat(e),state:{from:s},className:"hover:text-stone-400",children:(0,c.jsx)("p",{className:"ml-5 mt-2 w-40 mb-3",children:n})})]},e)}))})})}},5415:function(t,e,r){r.r(e);var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),u=r(2791),o=r(7689),i=r(9073),f=r(1207),p=r(9137),l=r(5501),m=r(184);e.default=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],v=(0,u.useState)(!1),d=(0,a.Z)(v,2),h=d[0],x=d[1],b=(0,o.TH)();return(0,u.useEffect)((function(){(0,n.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.prev=1,t.next=4,(0,f.AR)();case 4:if(e=t.sent,(r=e.results).length){t.next=10;break}return i.Am.error("Movie not found"),x(!1),t.abrupt("return");case 10:c(r),x(!1),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),i.Am.error("".concat(t.t0.message,". Movies loading failed, please try again")),x(!1);case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{className:"font-bold text-3xl mb-5 text-center",children:"Trending Movies"}),(0,m.jsx)(p.Z,{movies:r,location:b}),h&&(0,m.jsx)(l.Z,{})]})}},1207:function(t,e,r){r.d(e,{AR:function(){return u},Ai:function(){return o},Me:function(){return f},jC:function(){return i},np:function(){return p}});var n=r(5861),a=r(7757),c=r.n(a),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/",s.Z.defaults.params={api_key:"11546a486a09144867cb90a93b48d542"};var u=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("3/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("3/search/movie?&query=".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("3/movie/".concat(e,"?"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("3/movie/".concat(e,"/credits?"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("3/movie/".concat(e,"/reviews?"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.133a472e.chunk.js.map