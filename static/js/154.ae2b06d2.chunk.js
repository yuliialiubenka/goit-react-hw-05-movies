"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[154],{600:function(e,n,t){t.d(n,{Bt:function(){return d},Ml:function(){return l},Tg:function(){return o},Y5:function(){return u},wL:function(){return p}});var r=t(861),a=t(757),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="d4361d7b577744dc7974c40231de896b",o=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("trending/movie/day?api_key=".concat(c));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},154:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(439),a=t(791),i=t(689),s=t(87),c=t(600),o=t(841),l=(0,t(971).QM)({wrapper:{display:"flex",marginTop:35,gap:15},image:{borderRadius:8,boxShadow:"0px 4px 10px 0px rgba(9, 9, 9, 0.61)",objectFit:"cover"},infoContainer:{display:"flex",flexDirection:"column",gap:15,padding:15,background:"#ffffffa6",borderRadius:8,lineHeight:1.3,width:"100%"},title:{textAlign:"left"},infoWrap:{display:"flex",alignItems:"center",gap:12,"& h2":{fontSize:24,"@media screen and (max-width: 1024px)":{fontSize:18}},"& p":{fontSize:16,background:"#ffe454b0",padding:"2px 6px",borderRadius:4,fontWeight:600}},list:{display:"flex",flexWrap:"wrap",gap:12,listStyle:"none",margin:0,padding:0,listStyleType:"none","& li":{fontSize:16,background:"#ffe454b0",padding:"2px 6px",borderRadius:4,fontWeight:600}},infoList:{display:"flex",gap:12,listStyle:"none",margin:0,padding:0,listStyleType:"none"},infoListItem:{"& a":{fontSize:16,background:"#ffe454b0",padding:"2px 6px",borderRadius:4,fontWeight:600,color:"#000",textDecoration:"none","&:hover":{boxShadow:"0px 4px 10px 0px rgba(9, 9, 9, 0.61)"}}},link:{display:"block",textDecoration:"none",color:"#000",marginTop:"-82px",marginLeft:"calc(100% - 230px)","&:hover":{}},button:{border:"none",background:"transparent",cursor:"pointer","& img":{transform:"rotate(180deg)"},"&:hover":{}},overview:{textAlign:"justify"}});var u=t.p+"static/media/goBack.d3a198cc085412ebfaed2e6a01999e8c.svg",p=t(184),d=function(){var e,n,t=l(),d=(0,i.UO)().movieId,f=(0,a.useState)(null),g=(0,r.Z)(f,2),h=g[0],x=g[1],v=(0,a.useState)(!1),m=(0,r.Z)(v,2),b=m[0],j=m[1],w=(0,i.TH)();if((0,a.useEffect)((function(){j(!0),(0,c.Y5)(d).then((function(e){x(e)})).catch((function(e){console.log(e)})).finally((function(){j(!1)}))}),[d]),h){var y=h||{},k=y.title,_=y.release_date,S=y.overview,N=y.genres,Z=y.poster_path,U=y.original_title,W=y.vote_average,L=y.vote_count;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.rU,{to:null!==(e=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",className:t.link,children:(0,p.jsx)("button",{type:"button",className:t.button,children:(0,p.jsx)("img",{width:42,src:u,alt:"Go back"})})}),b&&(0,p.jsx)(o.Z,{}),h&&(0,p.jsxs)("div",{className:t.wrapper,children:[(0,p.jsx)("img",{className:t.image,width:"300px",src:Z?"https://image.tmdb.org/t/p/w500".concat(Z):"https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg",alt:U}),(0,p.jsxs)("div",{className:t.infoContainer,children:[(0,p.jsxs)("h1",{className:t.title,children:[k," ",_?"(".concat(_.slice(0,4),")"):""]}),(0,p.jsxs)("div",{className:t.infoWrap,children:[(0,p.jsx)("h2",{children:"Release date:"}),(0,p.jsx)("p",{children:_||"Data is missing"})]}),(0,p.jsxs)("div",{className:t.infoWrap,children:[(0,p.jsx)("h2",{children:"Genres:"}),(0,p.jsx)("ul",{className:t.list,children:N.length>0?N.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)})):(0,p.jsx)("li",{children:"Data is missing"})})]}),(0,p.jsxs)("div",{className:t.infoWrap,children:[(0,p.jsx)("h2",{children:"Vote average:"}),(0,p.jsxs)("p",{children:[W.toFixed(1),"\u2b50 | ",L]})]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{className:t.overview,children:S||"Data is missing"}),(0,p.jsx)("h2",{children:"Additional information"}),(0,p.jsxs)("ul",{className:t.infoList,children:[(0,p.jsx)("li",{className:t.infoListItem,children:(0,p.jsx)(s.rU,{to:"cast",className:t.linkName,children:"\ud83e\udc47 Cast"})}),(0,p.jsx)("li",{className:t.infoListItem,children:(0,p.jsx)(s.rU,{to:"reviews",className:t.linkName,children:"\ud83e\udc47 Reviews"})})]})]})]}),(0,p.jsx)("div",{children:(0,p.jsx)(i.j3,{})})]})}}}}]);
//# sourceMappingURL=154.ae2b06d2.chunk.js.map