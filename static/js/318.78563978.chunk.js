"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[318],{137:function(e,t,r){var n=r(689),a=r(87),s=r(184);t.Z=function(e){var t=e.movies,r=e.location,o=(0,n.TH)(),c=r.pathname;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ol",{className:"list-decimal mb-5",children:t.map((function(e){return(0,s.jsx)("li",{className:"mb-1 ml-12",children:(0,s.jsx)(a.rU,{to:"/"!==c?"".concat(e.id):"movies/".concat(e.id),state:{from:o},className:"hover:text-stone-400",children:e.title})},e.id)}))})})}},318:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),s=r(757),o=r.n(s),c=r(791),u=r(87),i=r(689),l=r(73),m=r(243);m.Z.defaults.baseURL="https://api.themoviedb.org/",m.Z.defaults.params={api_key:"11546a486a09144867cb90a93b48d542"};var f=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.get("3/search/movie?&query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=f,d=r(137),h=r(184),v=function(){var e,t=(0,c.useState)(),r=(0,a.Z)(t,2),s=r[0],m=r[1],f=(0,u.lr)(),v=(0,a.Z)(f,2),x=v[0],b=v[1],g=x.get(null!==(e="query")?e:""),j=(0,i.TH)();(0,c.useEffect)((function(){g&&(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(g);case 3:if(t=e.sent,(r=t.results).length){e.next=8;break}return l.Am.info("There are no movies for your request."),e.abrupt("return");case 8:m(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),l.Am.error("".concat(e.t0.message,". Movies loading failed, please try again"));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[g]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==e.target.elements.text.value){var t=e.currentTarget;b({query:t.elements.text.value.trim()}),t.reset()}else l.Am.error("Please enter a movie name")},children:[(0,h.jsx)("input",{type:"text",placeholder:" Search films",autoComplete:"off",name:"text",className:"ml-7 border border-blue-300 p-1 rounded mb-5 outline-none"}),(0,h.jsx)("button",{type:"submit",className:"bg-blue-300 p-1 ml-2 text-white hover:text-stone-200 rounded",children:"search"})]}),s&&(0,h.jsx)(d.Z,{movies:s,location:j})]})}}}]);
//# sourceMappingURL=318.78563978.chunk.js.map