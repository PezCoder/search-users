(this["webpackJsonpsearch-users"]=this["webpackJsonpsearch-users"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(37)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(5),c=n.n(r),o=(n(22),n(23),n(24),n(25),n(7)),i=n(2),u=(n(31),n(1));var l=function(){return function(e){Promise.resolve([{id:"123-s2-546",name:"John Jacobs",items:["bucket","bottle"],address:"1st Cross, 9th Main, abc Apartment",pincode:"5xx012"},{id:"123-s3-146",name:"David Mire",items:["Bedroom Set"],address:"2nd Cross, BTI Apartment",pincode:"4xx012"},{id:"223-a1-234",name:"Soloman Marshall",items:["bottle"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"121-s2-111",name:"Ricky Beno",items:["Mobile Set"],address:"Sunshine City",pincode:"5xx072"},{id:"123-p2-246",name:"Sikander Singh",items:["Air Conditioner"],address:"Riverbed Apartment",pincode:"4xx032"},{id:"b23-s2-321",name:"Ross Wheeler",items:["Mobile"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"113-n2-563",name:"Ben Bish",items:["Kitchen Set","Chair"],address:"Sunshine City",pincode:"5xx072"},{id:"323-s2-112",name:"John Michael",items:["Refrigerator"],address:"1st Cross, 9th Main, abc Apartement",pincode:"5xx012"},{id:"abc-34-122",name:"Jason Jordan",items:["Mobile"],address:"Riverbed Apartment",pincode:"4xx032"}]).then((function(t){e({type:"LOAD_USERS_SUCCESS",payload:t})}))}},d={list:[],apiStatus:null};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOAD_USERS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{list:Object(o.a)(t.payload),apiStatus:"success"});default:return Object(u.a)({},e)}}var m=n(16);n(32);var f=function(e){var t=e.onChange,n=e.onKeyDown,r=Object(a.useState)(""),c=Object(m.a)(r,2),o=c[0],i=c[1],u=Object(a.useRef)(null);return Object(a.useEffect)((function(){t&&t(o)}),[o,t]),s.a.createElement("div",{className:"search-bar"},s.a.createElement("i",{className:"fas fa-search search-bar__icon-search"}),s.a.createElement("input",{className:"search-bar__input",type:"text",value:o,onChange:function(e){return i(e.target.value)},onKeyDown:n,autoCapitalize:"off",autoComplete:"off",placeholder:"Start typing like: Apartment...",ref:u}),o&&s.a.createElement("i",{className:"fas fa-times search-bar__icon-cross",onClick:function(){i(""),t(""),u.current.focus()}}))},g=n(14),b=n.n(g);function p(e){return new RegExp(e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"),"i")}n(33);function E(e,t){return e.replace(p(t),(function(e){return'<span class="search-suggestion__highlight">'.concat(e,"</span>")}))}var v=function(e){var t=e.title,n=e.subtitle,r=e.listItem,c=e.description,o=e.highlightWord,i=e.focus,u=e.onMouseOver,l=e.onMouseMove,d=Object(a.useRef)(null);Object(a.useEffect)((function(){i&&d.current&&d.current.scrollIntoView&&d.current.scrollIntoView({block:"center",behavior:"smooth"})}),[i]);var h=b()("search-suggestion",{focus:i});return s.a.createElement("article",{className:h,onMouseOver:u,ref:d,onMouseMove:l},s.a.createElement("h4",{className:"search-suggestion__title",dangerouslySetInnerHTML:{__html:E(t,o)}}),s.a.createElement("p",{className:"search-suggestion__subtitle",dangerouslySetInnerHTML:{__html:E(n,o)}}),r&&s.a.createElement("ul",{className:"search-suggestion__list"},s.a.createElement("li",null,s.a.createElement("i",{className:"fas fa-circle"}),r)),s.a.createElement("p",{className:"search-suggestion__description",dangerouslySetInnerHTML:{__html:E(c,o)}}))},_=(n(34),{suggestions:null,query:"",focusedIndex:null,disableMouseEvents:!1});function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"UPDATE_SEARCH_SUGGESTIONS":return Object(u.a)(Object(u.a)({},e),{},{suggestions:t.payload.suggestions});case"UPDATE_SEARCH_QUERY":return Object(u.a)(Object(u.a)({},e),{},{query:t.payload.query});case"UPDATE_FOCUS_TO_INDEX":return Object(u.a)(Object(u.a)({},e),{},{focusedIndex:t.payload.suggestionIndex});case"UPDATE_DISABLE_MOUSE_EVENT":return Object(u.a)(Object(u.a)({},e),{},{disableMouseEvents:t.payload.disable});default:return Object(u.a)({},e)}}var O=function(e){return{type:"UPDATE_FOCUS_TO_INDEX",payload:{suggestionIndex:e}}},y=function(e){return{type:"UPDATE_DISABLE_MOUSE_EVENT",payload:{disable:e}}},j=function(e){var t=e.suggestions,n=e.highlightWord,a=Object(i.d)((function(e){return{focusedIndex:e.search.focusedIndex,disableMouseEvents:e.search.disableMouseEvents}}),i.b),r=a.focusedIndex,c=a.disableMouseEvents,o=Object(i.c)();return s.a.createElement("div",{className:"search-suggestions"},t.map((function(e,t){var a=e.title,i=e.description,u=e.subtitle,l=e.listItem;return s.a.createElement(v,{focus:r===t,onMouseOver:function(){!c&&o(O(t))},onMouseMove:function(){c&&o(y(!1))},highlightWord:n,key:a,title:a,subtitle:u,listItem:l,description:i})})))};n(35);var x=function(e){var t=e.title;return s.a.createElement("article",{className:"search-no-results"},s.a.createElement("p",{className:"search-no-results__title"},t))},M="ArrowDown",C="ArrowUp",A=n(36);function I(e,t){return null!==e.match(p(t))}function U(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;return{title:e.id,subtitle:e.name,listItem:t?'"'.concat(n,'" found in items'):null,description:e.address,highlightWord:n}}var N=function(e){e.type,e.onChange,e.onClick;var t=Object(i.c)(),n=Object(i.d)((function(e){return{users:e.users.list,searchQuery:e.search.query,searchSuggestions:e.search.suggestions}}),i.b),r=n.searchQuery,c=n.searchSuggestions,u=n.users,d=Object(a.useCallback)((function(e){return t(function(e){return{type:"UPDATE_SEARCH_SUGGESTIONS",payload:{suggestions:e}}}(e))}),[t]),h=Object(a.useCallback)((function(e){return t({type:"UPDATE_SEARCH_QUERY",payload:{query:e}})}),[t]);Object(a.useEffect)((function(){t(l())}),[t]);var m=Object(a.useCallback)(A((function(e){e.trim()?(h(e),d(function(e,t){return e.reduce((function(e,n){var a=n.items.filter((function(e){return I(e,t)})).length>0;return I(n.id,t)||I(n.name,t)||I(n.address,t)||a?[].concat(Object(o.a)(e),[U(n,a,t)]):e}),[])}(u,e))):d(null)}),300),[u]);if(!u.length)return null;var g=r&&c&&0===c.length;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,{onChange:m,onKeyDown:function(e){e.key===M?(t(y(!0)),t((function(e,t){var n=t().search,a=n.focusedIndex,s=n.suggestions;return s&&s.length?e(a===s.length-1?O(0):O(null===a?0:a+1)):e(O(null))}))):e.key===C&&(t(y(!0)),t((function(e,t){var n=t().search,a=n.focusedIndex,s=n.suggestions;return s&&s.length?e(O(0===a||null===a?s.length-1:a-1)):e(O(null))})))}}),c&&s.a.createElement(j,{suggestions:c,highlightWord:r}),g&&s.a.createElement(x,{title:"No User Found"}))};var w=function(){return s.a.createElement("main",null,s.a.createElement("h4",{className:"hint"},"Search Users"),s.a.createElement("p",{className:"hint-details"},"You can use Mouse or Keyboard Arrow keys (Up/Down) to navigate the list"),s.a.createElement("section",{className:"search"},s.a.createElement(N,null)))},D=n(3),k=n(15);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(i.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(D.d)(Object(D.c)({users:h,search:S}),e,Object(D.a)(k.a))}()},s.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.e32ec6de.chunk.js.map