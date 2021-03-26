(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{147:function(e,t,n){},148:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(19),a=n.n(i),o=(n(146),n(147),n(148),n(190)),s=n(75),l=n(42),j=n(26),u=n(187),d=n(186),b=n(24),v=n(94),O=n(51),h=n(74),f={movies:[],currentMovie:null,favorites:[],views:["card","list"],currentView:"card",genres:[],currentGenre:""},p="SET_MOVIES_DATA",x="SET_MOVIES_GENRES",m="SET_CURRENT_MOVIE",g="SET_CURRENT_GENRE",y="SET_CURRENT_VIEW",w="SET_FAVORITES_MOVIES",E="ADD_FAVORITE_MOVIE",S="REMOVE_FAVORITE_MOVIE",V=function(e){return{type:m,payload:e}},A=function(e){return{type:S,payload:e}},C=n(77),R=n(194),T=n(195),_=n(6);function I(e){var t,n=Object(b.c)((function(e){return{favorites:e.movies.favorites}})).favorites,r=Object(b.b)();return Object(_.jsx)("div",{style:e.style,children:(t=e.movie.id,n.filter((function(e){return e.id===t})).length?Object(_.jsx)("div",{children:Object(_.jsx)(C.a,{icon:Object(_.jsx)(R.a,{}),onClick:function(t){t.preventDefault(),r(A(e.movie.id))}})}):Object(_.jsx)("div",{children:Object(_.jsx)(C.a,{icon:Object(_.jsx)(T.a,{}),onClick:function(t){var n;t.preventDefault(),r((n=e.movie,{type:E,payload:n}))}})}))})}function M(e){return Object(_.jsx)(l.a,{xs:24,sm:24,md:12,lg:8,xl:6,children:Object(_.jsx)(O.b,{to:"/"+e.movie.id,children:Object(_.jsxs)(u.a,{style:{height:"100%",cursor:"pointer"},bodyStyle:{padding:0},children:[Object(_.jsx)("img",{src:e.movie.img,alt:e.movie.alt,style:{width:"100%",height:"200px",objectFit:"cover",objectPosition:"top"}}),Object(_.jsx)(I,{movie:e.movie,style:{position:"absolute",top:"10px",right:"10px"}}),Object(_.jsxs)("div",{style:{padding:15,textAlign:"center"},children:[Object(_.jsx)(v.a,{level:5,style:{lineHeight:"1.2"},children:e.movie.name}),Object(_.jsx)("p",{children:e.movie.year})]})]})})})}var k=n(193),G=n(192),F=G.a.Title,L=G.a.Paragraph;function N(e){return Object(_.jsx)(l.a,{span:24,children:Object(_.jsx)(O.b,{to:"/"+e.movie.id,children:Object(_.jsx)(u.a,{style:{height:"100%",cursor:"pointer"},bodyStyle:{padding:15},children:Object(_.jsxs)(s.a,{gutter:[15,15],children:[Object(_.jsx)(l.a,{span:6,style:{textAlign:"center"},children:Object(_.jsx)("img",{src:e.movie.img,alt:e.movie.alt,style:{maxHeight:"150px",objectFit:"top",objectPosition:"center"}})}),Object(_.jsxs)(l.a,{span:18,children:[Object(_.jsxs)(s.a,{gutter:[15,5],children:[Object(_.jsx)(l.a,{span:10,xs:20,md:14,children:Object(_.jsx)(F,{level:5,style:{lineHeight:"1.2"},children:e.movie.name})}),Object(_.jsx)(l.a,{span:10,xs:20,md:6,children:Object(_.jsxs)(L,{children:[e.movie.year," year"]})}),Object(_.jsx)(I,{movie:e.movie,style:{position:"absolute",top:0,right:"5px"}})]}),Object(_.jsx)(L,{ellipsis:!0,children:e.movie.description}),Object(_.jsx)("div",{children:e.movie.genres.length&&e.movie.genres.map((function(e){return Object(_.jsx)(k.a,{style:{marginBottom:"5px"},children:e},e)}))})]})]})})})})}var W=n(188);var D=W.a.Option;function U(e){var t=Object(b.b)(),n=Object(b.c)((function(e){return{genres:e.movies.genres,currentGenre:e.movies.currentGenre}})),r=n.genres,c=n.currentGenre;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(W.a,{defaultValue:c||"Choose genre",style:{width:240},onChange:function(e){t(function(e){return{type:g,payload:e}}(e))},children:[Object(_.jsx)(D,{value:"",children:"All"}),r.map((function(e){return Object(_.jsx)(D,{value:e,children:(t=e,t.charAt(0).toUpperCase()+t.slice(1))},e);var t}))]})})}var J=n(191),P=n(140),B=n(196);function H(e){var t=Object(b.b)(),n=Object(b.c)((function(e){return{views:e.movies.views,currentView:e.movies.currentView}})),r=n.views,c=n.currentView,i=function(e){return"list"===e.view?Object(_.jsx)(P.a,{}):Object(_.jsx)(B.a,{})};return Object(_.jsx)("span",{style:{marginLeft:"5px"},children:Object(_.jsx)(J.a.Group,{onChange:function(e){var n;t((n=e.target.value,{type:y,payload:n}))},defaultValue:c,children:r.map((function(e){return Object(_.jsx)(J.a.Button,{value:e,children:Object(_.jsx)(i,{view:e})},e)}))})})}function $(e){var t=Object(b.c)((function(e){return{movies:e.movies.movies,currentView:e.movies.currentView,currentGenre:e.movies.currentGenre}})),n=t.movies,r=t.currentView,c=t.currentGenre,i=function(e){return"list"===r?Object(_.jsx)(N,Object(j.a)({},e)):Object(_.jsx)(M,Object(j.a)({},e))};return Object(_.jsx)("div",{children:Object(_.jsx)(u.a,{title:"Movies Gallery",children:n.length?Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(s.a,{gutter:[15,15],children:[Object(_.jsx)(l.a,{xs:24,sm:24,md:12,children:Object(_.jsx)(U,{})}),Object(_.jsxs)(l.a,{xs:24,sm:24,md:12,align:"end",children:["view as: ",Object(_.jsx)(H,{})]}),Object(_.jsx)(l.a,{span:24,children:Object(_.jsx)(s.a,{gutter:[15,15],children:(c?n.filter((function(e){return e.genres.map((function(e){return e.toLowerCase()})).includes(c)})):n).map((function(e){return Object(_.jsx)(i,{movie:e},e.id)}))})})]})}):Object(_.jsx)("div",{style:{textAlign:"center"},children:Object(_.jsx)(d.a,{tip:"Loading..."})})})})}var q=c.a.memo($),z=n(45);function K(e){var t=Object(b.c)((function(e){return{favorites:e.movies.favorites}})).favorites,n=Object(b.b)();return Object(_.jsx)("div",{children:Object(_.jsx)(u.a,{title:"Favorite List",children:t.length?t.map((function(e){return Object(_.jsxs)(s.a,{style:{padding:"5px 0"},align:"middle",children:[Object(_.jsx)(l.a,{span:20,children:e.name}),Object(_.jsx)(l.a,{span:4,children:Object(_.jsx)(C.a,{icon:Object(_.jsx)(z.a,{}),onClick:function(){return t=e.id,void n(A(t));var t}})})]},e.id)})):Object(_.jsx)("div",{children:"Favorites list is empty."})})})}var Q=n(130).create({withCredentials:!0,baseURL:"https://my-json-server.typicode.com/moviedb-tech/movies/"}),X=function(){return Q.get("list")},Y=function(e){return Q.get("list/"+e)},Z=function(){return function(e){X().then((function(t){var n,r;200===t.status&&(e((r=t.data,{type:p,payload:r})),e((n=function(e){return Array.from(e.reduce((function(e,t){return[].concat(Object(h.a)(e),Object(h.a)(t.genres))}),[]).reduce((function(e,t){return e.add(t.toLowerCase())}),new Set))}(t.data),{type:x,payload:n})),e(ee()))}))}},ee=function(){return function(e){var t,n=localStorage.getItem("favorites");console.log(JSON.parse(n)),n&&e((t=JSON.parse(n),{type:w,payload:t}))}},te=n(136),ne=n(189),re=n(23),ce=G.a.Title;function ie(){var e=Object(re.f)().movieId,t=Object(b.b)(),n=Object(re.e)(),c=Object(r.useState)(!0),i=Object(te.a)(c,2),a=i[0],o=i[1];Object(r.useEffect)((function(){var n;t((n=e,function(e){Y(n).then((function(t){200===t.status&&e(V(t.data))}))}))}),[t,e]);var j=Object(b.c)((function(e){return{currentMovie:e.movies.currentMovie}})).currentMovie;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(ne.a,{title:"Movie Details",centered:!0,visible:a,onCancel:function(){return o(!1)},footer:null,afterClose:function(){return t(V(null)),void n.push("/")},width:1e3,children:j?Object(_.jsxs)(s.a,{gutter:15,children:[Object(_.jsx)(l.a,{span:8,children:Object(_.jsxs)(s.a,{gutter:[15,15],children:[Object(_.jsx)(l.a,{span:24,children:Object(_.jsx)("img",{src:j.img,alt:j.alt})}),Object(_.jsx)(l.a,{span:12,children:Object(_.jsx)(I,{movie:j})}),Object(_.jsxs)(l.a,{span:12,children:[j.year," year"]}),Object(_.jsx)(l.a,{span:24,children:j.genres.length&&j.genres.map((function(e){return Object(_.jsx)(k.a,{children:e},e)}))})]})}),Object(_.jsxs)(l.a,{span:14,children:[Object(_.jsx)(ce,{level:2,children:j.name}),Object(_.jsx)("p",{children:j.description}),Object(_.jsxs)("p",{children:[Object(_.jsx)("strong",{children:"Director:"})," ",j.director]}),Object(_.jsxs)("p",{children:[Object(_.jsx)("strong",{children:"Starring:"})," ",j.starring.map((function(e,t,n){return e+(n.length-1!==t&&", ")}))]})]})]}):Object(_.jsx)("div",{style:{textAlign:"center"},children:Object(_.jsx)(d.a,{tip:"Loading..."})})})})}var ae=function(e){var t=Object(r.useRef)(e);Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){var e=function(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))};return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),[])};var oe=function(){var e=Object(b.b)();return Object(r.useEffect)((function(){e(Z())}),[e]),ae((function(t){e((function(e,t){var n=t().movies.favorites;n&&localStorage.setItem("favorites",JSON.stringify(n))}))})),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(o.a,{style:{padding:20,minHeight:"100vh"},children:Object(_.jsxs)(s.a,{gutter:[15,15],align:"center",children:[Object(_.jsx)(l.a,{xs:{span:24,order:2},sm:{span:24,order:2},md:{span:15,order:1},lg:14,xl:12,children:Object(_.jsx)(q,{})}),Object(_.jsx)(l.a,{xs:{span:24,order:1},sm:{span:24,order:1},md:{span:9,order:2},lg:8,xl:6,children:Object(_.jsx)(K,{})})]})}),Object(_.jsx)(re.a,{path:"/:movieId",children:Object(_.jsx)(ie,{})})]})},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var je=n(52),ue=Object(je.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)(Object(j.a)({},e),{},{movies:t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{genres:t.payload});case m:return Object(j.a)(Object(j.a)({},e),{},{currentMovie:t.payload});case g:return Object(j.a)(Object(j.a)({},e),{},{currentGenre:t.payload});case y:return Object(j.a)(Object(j.a)({},e),{},{currentView:t.payload});case w:return Object(j.a)(Object(j.a)({},e),{},{favorites:t.payload});case E:return Object(j.a)(Object(j.a)({},e),{},{favorites:[].concat(Object(h.a)(e.favorites),[t.payload])});case S:return Object(j.a)(Object(j.a)({},e),{},{favorites:Object(h.a)(e.favorites.filter((function(e){return e.id!==t.payload})))});default:return e}}}),de=n(131),be=n(132);var ve=function(e){var t=[de.a],n=[je.applyMiddleware.apply(void 0,t)],r=be.composeWithDevTools.apply(void 0,n);return Object(je.createStore)(ue,e,r)}();a.a.render(Object(_.jsx)(b.a,{store:ve,children:Object(_.jsx)(O.a,{children:Object(_.jsx)(oe,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):le(t,e)}))}}()}},[[184,1,2]]]);
//# sourceMappingURL=main.ad263e39.chunk.js.map