"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{493:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o=r(73),p=r(207),f=r(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)([]),r=(0,a.Z)(t,2),c=r[0],v=r[1];return(0,s.useEffect)((function(){(0,n.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Me)(e);case 3:r=t.sent,n=r.cast,v(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o.Am.error("".concat(t.t0.message,". Movies loading failed, please try again"));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[e]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:"flex flex-wrap gap-4 justify-center mt-3 text-center mb-3",children:c.map((function(e){var t=e.name,r=e.profile_path,n=e.id;return(0,f.jsxs)("li",{className:"border border-black",children:[(0,f.jsx)("img",{width:"154",height:"254",src:r?"http://image.tmdb.org/t/p/w154"+r:"https://img.freepik.com/premium-vector/profile-icon-male-avatar-man-portrait-casual-person-silhouette-face-flat-design-vector-illustration_750364-603.jpg",alt:t}),(0,f.jsx)("p",{children:t})]},n)}))})})}},207:function(e,t,r){r.d(t,{AR:function(){return s},Ai:function(){return i},Me:function(){return p},jC:function(){return o},np:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/",u.Z.defaults.params={api_key:"11546a486a09144867cb90a93b48d542"};var s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/search/movie?&query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(t,"?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(t,"/credits?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(t,"/reviews?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.5e3aecc6.chunk.js.map