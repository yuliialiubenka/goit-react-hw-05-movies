"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[109],{600:function(e,t,n){n.d(t,{Bt:function(){return d},Ml:function(){return u},Tg:function(){return o},Y5:function(){return l},wL:function(){return p}});var r=n(861),a=n(757),i=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="d4361d7b577744dc7974c40231de896b",o=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},984:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(689),a=n(87),i=(0,n(971).QM)({filmsWrapper:{listStyleType:"none",display:"flex",flexWrap:"wrap",justifyContent:"center",paddingTop:15,gap:15},filmCard:{fontWeight:600,fontSize:14,width:"calc((100% - 6 * 15px) / 7)",borderRadius:8,position:"relative",cursor:"pointer","@media screen and (max-width: 1024px)":{width:"calc((100% - 4 * 15px) / 5)"},"& a":{textDecoration:"none",color:"#000"},"&:hover":{boxShadow:"0px 4px 10px 0px rgba(9, 9, 9, 0.61)"}},filmCardOverlay:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 80%)",opacity:0,borderRadius:8,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:8,"&:hover":{opacity:1}},filmCardInfo:{display:"flex",justifyContent:"space-between"},filmCardImage:{width:"100%",height:"100%",borderRadius:8,objectFit:"cover"},filmCardTitle:{textDecoration:"none",marginBottom:8}}),c=n(184),s=function(e){var t=e.films,n=(0,r.TH)(),s=i();return(0,c.jsx)("ul",{className:s.filmsWrapper,children:t.map((function(e){return(0,c.jsx)("li",{className:s.filmCard,children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:[(0,c.jsx)("img",{className:s.filmCardImage,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg",alt:"film.title",width:300}),(0,c.jsxs)("div",{className:s.filmCardOverlay,children:[(0,c.jsx)("p",{className:s.filmCardTitle,children:e.title}),(0,c.jsxs)("div",{className:s.filmCardInfo,children:[(0,c.jsx)("span",{children:e.release_date.slice(0,4)}),(0,c.jsxs)("span",{children:[e.vote_average.toFixed(1)," \u2b50"]})]})]})]})},e.id)}))})}},220:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(439),a=n(791),i=n(841),c=n(984),s=n(971),o=(0,s.QM)({form:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"-82px",marginBottom:18},input:{padding:"6px 12px",font:"inherit",cursor:"pointer",borderRadius:8,border:"3px solid #000",fontWeight:600,fontSize:20,outline:"none","&:hover, &:focus":{color:"#000",border:"3px solid #ff9254"},"&::placeholder":{color:"#ff9254"}},button:{background:"transparent",cursor:"pointer",border:"none"},buttonIcon:{height:42,marginLeft:6}});var u=n.p+"static/media/search.50609a786522c2e07df27fcd1a871aee.svg",l=n(184),p=function(e){var t=e.searchMovies,n=o(),i=(0,a.useState)(""),c=(0,r.Z)(i,2),s=c[0],p=c[1];return(0,l.jsxs)("form",{className:n.form,onSubmit:function(e){e.preventDefault(),t(s.toLowerCase())},children:[(0,l.jsx)("input",{className:n.input,type:"text",name:"query",autoFocus:!0,value:s,placeholder:"Search movie",onChange:function(e){p(e.target.value)}}),(0,l.jsx)("button",{className:n.button,type:"submit",children:(0,l.jsx)("img",{className:n.buttonIcon,src:u,alt:"Search"})})]})},d=n(600),f=(0,s.QM)({wrapper:{paddingTop:"13%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},text:{fontSize:24,color:"#000",fontWeight:600}}),m=n.p+"static/media/emptyBlock.ca161b0e015767b721c8.png",h=function(){var e=f();return(0,l.jsxs)("div",{className:e.wrapper,children:[(0,l.jsx)("img",{className:e.image,src:m,alt:"Empty block",width:400}),(0,l.jsx)("p",{className:e.text,children:"Movie gallery is empty..."})]})},g=(0,s.QM)({wrapper:{paddingTop:"10%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},text:{fontSize:24,color:"#000",fontWeight:600}});var x=n.p+"static/media/anonymous.aee1e2d97cd10d0f81ba46d5bd25f31e.svg",v=function(){var e=g();return(0,l.jsxs)("div",{className:e.wrapper,children:[(0,l.jsx)("img",{className:e.image,src:x,alt:"Empty block",width:400}),(0,l.jsx)("p",{className:e.text,children:"There is no movies with this request."}),(0,l.jsx)("p",{className:e.text,children:"Please, try again."})]})},b=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],o=(0,a.useState)(!1),u=(0,r.Z)(o,2),f=u[0],m=u[1],g=(0,a.useState)(!1),x=(0,r.Z)(g,2),b=x[0],y=x[1],j=(0,a.useState)(!0),w=(0,r.Z)(j,2),_=w[0],C=w[1];return(0,l.jsxs)("main",{children:[(0,l.jsx)(p,{searchMovies:function(e){m(!0),C(!1),(0,d.Ml)(e).then((function(e){s(e),y(0===e.length)})).catch((function(e){console.log(e)})).finally((function(){m(!1)}))}}),f&&(0,l.jsx)(i.Z,{}),_&&(0,l.jsx)(h,{}),n&&(0,l.jsx)(c.Z,{films:n}),b&&(0,l.jsx)(v,{})]})}}}]);
//# sourceMappingURL=109.5032d9c8.chunk.js.map