"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{884:function(e,t,r){r.r(t);var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(689),o=r(87),l=r(73),x=r(207),d=r(501),f=r(184);t.default=function(){var e,t,r=(0,u.UO)().movieId,s=(0,i.useState)([]),p=(0,a.Z)(s,2),v=p[0],m=p[1],h=(0,i.useState)(!1),b=(0,a.Z)(h,2),g=b[0],j=b[1],w=(0,u.TH)(),Z=(0,i.useRef)(null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,i.useEffect)((function(){(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,(0,x.jC)(r);case 4:t=e.sent,m(t),j(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),l.Am.error("".concat(e.t0.message,". Movies loading failed, please try again")),j(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}),[r]);var k=v.poster_path,N=v.title,_=v.genres,y=v.overview,C=v.release_date,R=v.vote_average;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.rU,{to:Z.current,className:"ml-3 hover:text-stone-200 bg-blue-300 p-1 text-white  rounded",children:"Go Back"}),k&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"ml-3 mt-3 flex",children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:"http://image.tmdb.org/t/p/w500"+k,alt:N})}),(0,f.jsxs)("div",{className:"flex flex-col gap-8 ml-5 last:max-w-[60%]",children:[(0,f.jsx)("h2",{className:"font-bold text-2xl",children:N}),(0,f.jsxs)("p",{className:"text-xl",children:["Release Date: ",C]}),(0,f.jsxs)("p",{className:"text-xl",children:[" IMDb: ",R.toFixed(2)]}),(0,f.jsxs)("p",{className:"text-xl",children:["Genres: ",_.map((function(e){return e.name})).join(", ")]}),(0,f.jsxs)("p",{className:"text-xl",children:["Overview: ",y]})]})]}),(0,f.jsxs)("div",{className:"border-b border-t border-black mt-2 mb-10",children:[(0,f.jsx)("p",{className:"ml-5 mt-1 mb-1 font-bold text-xl",children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",className:"ml-5 hover:text-green-800 focus:text-green-800 text-xl",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",className:"ml-5 hover:text-green-800 focus:text-green-800 text-xl",children:"Reviews"})})]})]})]}),(0,f.jsx)(u.j3,{}),g&&(0,f.jsx)(d.Z,{})]})}},207:function(e,t,r){r.d(t,{AR:function(){return i},Ai:function(){return u},Me:function(){return l},jC:function(){return o},np:function(){return x}});var n=r(861),a=r(757),s=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"11546a486a09144867cb90a93b48d542"};var i=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/search/movie?&query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t,"?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t,"/credits?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t,"/reviews?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=884.ca509a57.chunk.js.map