(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/n-logo.d32a6bcd.png"},33:function(e,a,t){e.exports=t(65)},38:function(e,a,t){},39:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(29),s=t.n(r),l=(t(38),t(39),t(8)),o=t.n(l),i=t(11),u=t(14),m=t(12),p=t.n(m),d=Object(n.createContext)(),E=t(1),b=function(e,a){switch(a.type){case"SET_LOADING":return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case"SEARCH_LOADING":return Object(E.a)(Object(E.a)({},e),{},{search_loading:!0});case"SOURCE_LOADING":return Object(E.a)(Object(E.a)({},e),{},{source_loading:!0});case"TOPIC_NEWS_LOADING":return Object(E.a)(Object(E.a)({},e),{},{topic_loading:!0});case"GET_NEWS":return Object(E.a)(Object(E.a)({},e),{},{news:a.payload,loading:!1});case"GET_SOURCES":return Object(E.a)(Object(E.a)({},e),{},{sources:a.payload,source_loading:!1});case"GET_RESULTS":return Object(E.a)(Object(E.a)({},e),{},{results:a.payload,search_loading:!1});case"GET_TOPIC_NEWS":return Object(E.a)(Object(E.a)({},e),{},{topic:a.payload,topic_loading:!1});case"NEWS_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:a.payload,loading:!1});case"SEARCH_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:a.payload,search_loading:!1});case"TOPIC_NEWS_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:a.payload,topic_loading:!1});case"SOURCE_ERROR":return Object(E.a)(Object(E.a)({},e),{},{error:a.payload,source_loading:!1});case"CLEAR_ERRORS":return Object(E.a)(Object(E.a)({},e),{},{error:null});default:return e}},f=function(e){var a=e.children,t=Object(n.useReducer)(b,{news:[],error:null,loading:!1,topic_loading:!1,search_loading:!1,source_loading:!1,topic:[],results:[],sources:[]}),r=Object(u.a)(t,2),s=r[0],l=r[1],m=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(),e.prev=1,e.next=4,p.a.get("https://extreme-ip-lookup.com/json/");case 4:a=e.sent,console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(),e.prev=1,e.next=4,p.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2");case 4:a=e.sent,l({type:"GET_NEWS",payload:a.data.articles}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"NEWS_ERROR",payload:e.t0.response.data}),setTimeout((function(){return O()}),5e3);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(),e.prev=1,e.next=4,p.a.get("https://newsapi.org/v2/top-headlines?country=us&category=".concat(a,"&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2"));case 4:t=e.sent,l({type:"GET_TOPIC_NEWS",payload:t.data.articles}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"TOPIC_NEWS_ERROR",payload:e.t0.response.data}),setTimeout((function(){return O()}),5e3);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(),e.prev=1,e.next=4,p.a.get("https://newsapi.org/v2/everything?q=".concat(a,"&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2"));case 4:t=e.sent,l({type:"GET_RESULTS",payload:t.data.articles}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"SEARCH_ERROR",payload:e.t0.response.data}),setTimeout((function(){return O()}),5e3);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(),e.prev=1,e.next=4,p.a.get("https://newsapi.org/v2/sources?country=us&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2");case 4:a=e.sent,l({type:"GET_SOURCES",payload:a.data.sources}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"SOURCE_ERROR",payload:e.t0.response.data}),setTimeout((function(){return O()}),5e3);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(){return l({type:"CLEAR_ERRORS"})},N=function(){return l({type:"SET_LOADING"})},h=function(){return l({type:"TOPIC_NEWS_LOADING"})},y=function(){return l({type:"SEARCH_LOADING"})},_=function(){return l({type:"SOURCE_LOADING"})};return c.a.createElement(d.Provider,{value:{news:s.news,topic_news:s.topic,results:s.results,sources:s.sources,loading:s.loading,search_loading:s.search_loading,topic_loading:s.topic_loading,source_loading:s.source_loading,getNews:E,getTopics:f,getCountry:m,getResults:v,getSources:g}},a)},v=t(30),g=t.n(v),O=t(31),N=t.n(O),h=function(e){var a=e.item;return c.a.createElement("div",{className:"col-md-12 card"},c.a.createElement("a",{className:"link",href:a.url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("h1",{className:"title"},a.title),c.a.createElement("p",{className:"source"},a.source.name," \xb7 ",g()(a.publishedAt).fromNow()),c.a.createElement("p",{className:"description"},a.description)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("img",{src:a.urlToImage?a.urlToImage:N.a,alt:a.title})))))},y=function(){var e=Object(n.useContext)(d),a=e.getNews,t=e.news,r=e.loading;return Object(n.useEffect)((function(){a()}),[]),c.a.createElement(c.a.Fragment,null,r?c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"spinner"})):t.map((function(e,a){return c.a.createElement(h,{key:a,item:e})})))},_=t(2),j=function(){var e=Object(_.f)().topic,a=Object(n.useContext)(d),t=a.getTopics,r=a.topic_news,s=a.topic_loading;return Object(n.useEffect)((function(){t(e)}),[e]),c.a.createElement("div",null,s?c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"spinner"})):r.map((function(e,a){return c.a.createElement(h,{key:a,item:e})})))},R=function(){var e=Object(n.useContext)(d),a=e.getResults,t=e.results,r=e.search_loading,s=Object(n.useState)(""),l=Object(u.a)(s,2),o=l[0],i=l[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"mb-5"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(o)},className:"d-flex"},c.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search (press enter after typing)","aria-label":"Search",value:o,onChange:function(e){return i(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn-light d-flex align-items-center"},c.a.createElement("ion-icon",{name:"search-outline"})))),r?c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"spinner"})):t.map((function(e,a){return c.a.createElement(h,{key:a,item:e})})))},S=t(6),w=function(){return c.a.createElement("nav",{className:"navbar navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement(S.b,{className:"navbar-brand",to:"/"},"News"),c.a.createElement(S.b,{className:"me-2",to:"/search"},c.a.createElement("ion-icon",{name:"search-outline"}))))},k=function(){var e=Object(n.useContext)(d),a=e.getSources,t=e.sources,r=e.source_loading;return Object(n.useEffect)((function(){a()}),[]),c.a.createElement("div",{className:"col-md-4",style:{position:"relative"}},c.a.createElement("ul",{className:"nav flex-column stick"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("h4",{className:"heading"},"Sources")),r?c.a.createElement("div",{className:"d-flex justify-content-center mt-5"},c.a.createElement("div",{className:"spinner"})):t.map((function(e,a){return c.a.createElement("li",{key:a,className:"nav-item"},c.a.createElement("a",{className:"nav-link malink",href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name))}))))};var x=function(){return c.a.createElement(f,null,c.a.createElement(S.a,null,c.a.createElement(w,null),c.a.createElement("div",{className:"container mt-3"},c.a.createElement("ul",{className:"nav sub-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(S.b,{className:"nav-link",to:"/"},"General")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(S.b,{className:"nav-link",to:"/topic/business"},"Business")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(S.b,{className:"nav-link",to:"/topic/entertainment"},"Entertainment")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(S.b,{className:"nav-link",to:"/topic/health"},"Health")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(S.b,{className:"nav-link",to:"/topic/science"},"Science")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(S.b,{className:"nav-link",to:"/topic/sports"},"Sports")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(S.b,{className:"nav-link",to:"/topic/technology"},"Technology")))),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(_.c,null,c.a.createElement(_.a,{exact:!0,path:"/"},c.a.createElement(y,null)),c.a.createElement(_.a,{path:"/topic/:topic"},c.a.createElement(j,null)),c.a.createElement(_.a,{path:"/search"},c.a.createElement(R,null)))),c.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.dec3f4f1.chunk.js.map