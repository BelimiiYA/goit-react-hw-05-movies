"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{9257:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,a,s,c,o=t(9439),u=t(2791),l=t(7689),p=t(1087),d=t(5975),f=t(1362),h=t(168),x=t(5706),v=x.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),g=x.Z.ul(i||(i=(0,h.Z)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),m=x.Z.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),j=(0,x.Z)(p.rU)(s||(s=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #021C1E;\n\n  &:hover {\n    color: #6fb98f;\n  }\n"]))),w=x.Z.button(c||(c=(0,h.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid black;\n  color: #021C1E;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: #6fb98f;\n    border: 3px solid #6fb98f;\n  }\n"]))),y=t(184),Z=function(){var n,e,t=(0,l.UO)().movieId,r=(0,u.useState)(null),i=(0,o.Z)(r,2),a=i[0],s=i[1],c=(0,u.useState)(!1),h=(0,o.Z)(c,2),x=h[0],Z=h[1],b=(0,l.TH)();if((0,u.useEffect)((function(){Z(!0),(0,d.Y5)(t).then((function(n){s(n)})).catch((function(n){console.log(n)})).finally((function(){Z(!1)}))}),[t]),a){var _=a||{},k=_.title,U=_.release_date,S=_.popularity,C=_.overview,E=_.genres,z=_.poster_path,A=_.original_title;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.rU,{to:null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,y.jsx)(w,{type:"button",children:"Go back"})}),x&&(0,y.jsx)(f.Z,{}),a&&(0,y.jsxs)(v,{children:[(0,y.jsx)("img",{width:"300px",src:z?"https://image.tmdb.org/t/p/w500".concat(z):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:A}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("h1",{children:[k," (",U.slice(0,4),")"]}),(0,y.jsxs)("p",{children:["User score: ",S]}),(0,y.jsx)("h2",{children:"Overview"}),(0,y.jsx)("p",{children:C}),(0,y.jsx)("h2",{children:"Genres"}),(0,y.jsx)(g,{children:E.map((function(n){return(0,y.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,y.jsx)("hr",{}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{children:"Additional information"}),(0,y.jsxs)(m,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)("hr",{}),(0,y.jsx)(l.j3,{})]})]})}}},5975:function(n,e,t){t.d(e,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return o},Y5:function(){return l},wL:function(){return p}});var r=t(5861),i=t(4687),a=t.n(i),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="c67fe955046fda94f580f78044a00ac8",o=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.17e6b8b6.chunk.js.map