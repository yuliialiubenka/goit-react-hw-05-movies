"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[514],{600:function(t,e,n){n.d(e,{Bt:function(){return f},Ml:function(){return s},Tg:function(){return u},Y5:function(){return p},wL:function(){return l}});var r=n(861),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="d4361d7b577744dc7974c40231de896b",u=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("trending/movie/day?api_key=".concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},514:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),a=n(689),c=n(791),i=n(600),o=n(841),u=(0,n(971).QM)({list:{listStyleType:"none",display:"flex",flexWrap:"wrap",gap:15,paddingTop:15,justifyContent:"center",borderTop:"3px solid #ffe454b0",marginTop:15},listItem:{width:"calc((100% - 15px * 4) / 5)","@media screen and (max-width: 1024px)":{width:"calc((100% - 15px * 3) / 4)"}},listItemImage:{width:"100%",objectFit:"cover",borderRadius:8,boxShadow:"0px 4px 10px 0px rgba(9, 9, 9, 0.61)",height:300,objectPosition:"top"},name:{fontWeight:700,fontSize:18,marginBottom:4,marginTop:4,textAlign:"center"},character:{maxWidth:"fit-content",margin:"auto",fontWeight:600,background:"#ffe454b0",padding:"4px 8px",borderRadius:4,fontSize:16,textAlign:"center"}}),s=n(184),p=function(){var t=u(),e=(0,a.UO)().movieId,n=(0,c.useState)([]),p=(0,r.Z)(n,2),l=p[0],f=p[1],d=(0,c.useState)(!1),g=(0,r.Z)(d,2),h=g[0],v=g[1];return(0,c.useEffect)((function(){v(!0),(0,i.wL)(e).then((function(t){f(t)})).catch((function(t){console.log(t)})).finally((function(){v(!1)}))}),[e]),(0,s.jsxs)("div",{children:[h&&(0,s.jsx)(o.Z,{}),(0,s.jsx)("ul",{className:t.list,children:l.map((function(e){var n=e.id,r=e.profile_path,a=e.original_name,c=e.name,i=e.character;return(0,s.jsxs)("li",{className:t.listItem,children:[(0,s.jsx)("img",{className:t.listItemImage,width:"200px",src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg",alt:a}),(0,s.jsx)("p",{className:t.name,children:c}),(0,s.jsx)("p",{className:t.character,children:i})]},n)}))})]})}}}]);
//# sourceMappingURL=514.f3c933ee.chunk.js.map