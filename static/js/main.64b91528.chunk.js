(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/SpaceX-Logo.6ff54c0f.svg"},25:function(e,t,a){},30:function(e,t,a){e.exports=a(52)},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),i=(a(35),a(1)),l=(a(36),function(){return r.a.createElement("div",{className:"home-page animation-active"},r.a.createElement("h1",{className:"home-page__title"},"WELCOME TO SPACE-X, BITCH"))}),o=a(8),u=a.n(o),m=a(12),p=a(16),E=function e(){var t=this;Object(p.a)(this,e),this._apiBase="https://api.spacexdata.com/v3",this.getResource=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a)+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllRockets=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/rockets/");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getRocket=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/rockets/");case 2:return n=e.sent,e.abrupt("return",n[a-1]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllShips=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/ships/");case 2:return a=e.sent,e.abrupt("return",a.slice(4));case 4:case"end":return e.stop()}}),e)}))),this.getShip=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/ships/".concat(a));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=r.a.createContext(),h=function(){return Object(n.useContext)(d)},f=function(e){var t=e.children,a=new E;return r.a.createElement(d.Provider,{value:a},t)},_=function(e){return{type:"TOGGLE_IS_FETCHING",payload:e}},v=a(3),g=(a(42),a(43),Object(i.f)((function(e){var t=e.rocket,a=e.history;return r.a.createElement("div",{className:"rocket__item"},r.a.createElement("div",{className:"rocket-img-wrapper"},r.a.createElement("img",{className:"rocket__img",src:t.flickr_images[1],alt:"rocket"})),r.a.createElement("div",{className:"rocket__item-info"},r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("h1",{className:"rocket-details__name"},t.rocket_name)),r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("span",null,t.country)),r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("span",null,t.company)),r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("span",null,"STAGES:")," ",t.stages),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{className:"btn-rocket",onClick:function(e){return a.push("/rockets/".concat(t.id))}},"View Details"))))}))),k=Object(v.b)((function(e){return{rockets:e.rockets}}))((function(e){var t=e.rockets;return r.a.createElement("ul",{className:"rocket-list animation-active"},t.map((function(e){return r.a.createElement("li",{className:"rocket-list__item",key:e.id},r.a.createElement(g,{rocket:e}))})))})),b=(a(45),function(){return r.a.createElement("div",{className:"loadingio-spinner-ellipsis-dymcfbxbnp5"},r.a.createElement("div",{className:"ldio-lsvv6l7r3e"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),N={rocketsLoaded:function(e){return{type:"ROCKETS_LOADED",payload:e}},toggleIsFetching:_},O=Object(v.b)((function(e){return{isFetching:e.isFetching}}),N)((function(e){var t=e.rocketsLoaded,a=e.isFetching,c=e.toggleIsFetching,s=h();return Object(n.useEffect)((function(){c(!0),console.log("rocket-list-container render"),s.getAllRockets().then((function(e){t(e),c(!1)}))}),[]),a?r.a.createElement(b,null):r.a.createElement(k,null)})),w=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(O,null))},D=(a(25),a(46),Object(i.f)((function(e){var t=e.ship,a=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ship__img-wrapper"},r.a.createElement("img",{className:"ship-img",src:t.image,alt:"ship"})),r.a.createElement("div",{className:"ship__item-row"},r.a.createElement("h1",{className:"ship__item-name"},r.a.createElement("i",null,t.ship_name))),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{className:"btn-ship",onClick:function(e){return a.push("/ships/".concat(t.ship_id))}},"View Details")))}))),j=Object(v.b)((function(e){return{ships:e.ships}}))((function(e){var t=e.ships;return r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"ship-list animation-active"},t.map((function(e){return r.a.createElement("li",{className:"ship-list__item",key:e.ship_id},r.a.createElement(D,{ship:e}))}))))})),S={shipsLoaded:function(e){return{type:"SHIPS_LOADED",payload:e}},toggleIsFetching:_},y=Object(v.b)((function(e){return{isFetching:e.isFetching}}),S)((function(e){var t=e.shipsLoaded,a=e.isFetching,c=e.toggleIsFetching,s=h();return Object(n.useEffect)((function(){c(!0),s.getAllShips().then((function(e){t(e),c(!1)}))}),[]),a?r.a.createElement(b,null):r.a.createElement(j,null)})),L=function(){return r.a.createElement(y,null)},F=(a(47),Object(v.b)((function(e){return{rocketDetails:e.rocketDetails}}))((function(e){var t=e.rocketDetails,a=t.flickr_images,n=void 0===a?[]:a,c=t.rocket_name,s=t.active,i=t.description,l=t.stages,o=t.boosters,u=t.first_flight,m=s?"YES":"NO";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"rocket-details animation-active"},r.a.createElement("div",{className:"rocket-details__info"},r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("h1",{className:"rocket-details__name"},c)),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"description:")," ",i),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"active:")," ",m),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"stages:")," ",l),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"boosters:")," ",o),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"first flight:")," ",u)),n.map((function(e,t){return r.a.createElement("div",{className:"rocket-details__img-wrapper",key:t},r.a.createElement("img",{className:"rocket-details__img",src:e,alt:"rocket"}))}))))}))),I={rocketDetailsLoaded:function(e){return{type:"ROCKETS_DETAILS_LOADED",payload:e}},toggleIsFetching:_},x=Object(v.b)((function(e){return{isFetching:e.isFetching}}),I)((function(e){var t=e.id,a=e.rocketDetailsLoaded,c=e.isFetching,s=e.toggleIsFetching,i=h();return Object(n.useEffect)((function(){s(!0),i.getRocket(t).then((function(e){a(e),s(!1)})),console.log("rocket-details-container render")}),[t]),c?r.a.createElement(b,null):r.a.createElement(F,null)})),A=(a(48),a(11)),T=a(18),R=a.n(T),C=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("li",{className:"header-link"},r.a.createElement(A.b,{to:"/"},r.a.createElement("img",{className:"space-x-logo",src:R.a,alt:"logo"}))),r.a.createElement("li",{className:"header-link"},r.a.createElement(A.b,{to:"/rockets/"},"ROCKETS")),r.a.createElement("li",{className:"header-link"},r.a.createElement(A.b,{to:"/ships/"},"SHIPS")))))},H=(a(49),Object(v.b)((function(e){return{shipsDetails:e.shipsDetails}}))((function(e){var t=e.shipsDetails,a=t.active?"YES":"NO";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"ship-details animation-active"},r.a.createElement("div",{className:"ship-details__img-wrapper"},r.a.createElement("img",{className:"ship__img",src:t.image,alt:"ship"})),r.a.createElement("div",{className:"ship-details__row"},r.a.createElement("h1",{className:"ship-details__row--name"},t.ship_name)),r.a.createElement("div",{className:"ship-details__row"},r.a.createElement("h2",null,t.home_port)),r.a.createElement("div",{className:"ship-details__row"},"Mass ",t.weight_kg," (kg)"),r.a.createElement("div",{className:"ship-details__row"},"Birth of build ",t.year_built),r.a.createElement("div",{className:"ship-details__row"},"Active: ",a)))}))),G={shipDetailsLoaded:function(e){return{type:"SHIP_DETAILS_LOADED",payload:e}},toggleIsFetching:_},P=Object(v.b)((function(e){return{isFetching:e.isFetching}}),G)((function(e){var t=e.id,a=e.shipDetailsLoaded,c=e.isFetching,s=e.toggleIsFetching,i=h();return Object(n.useEffect)((function(){s(!0),i.getAllShips().then((function(e){a(e.find((function(e){return e.ship_id===t}))),s(!1)}))}),[]),c?r.a.createElement(b,null):r.a.createElement(H,null)})),X=(a(50),function(){return r.a.createElement("footer",null,r.a.createElement("img",{className:"footer-logo",src:R.a,alt:"spaceX"}))}),B=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(C,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:l}),r.a.createElement(i.a,{path:"/rockets",exact:!0,component:w}),r.a.createElement(i.a,{path:"/rockets/:id",render:function(e){var t=e.match;return r.a.createElement(x,{id:t.params.id})}}),r.a.createElement(i.a,{path:"/ships",exact:!0,component:L}),r.a.createElement(i.a,{path:"/ships/:id",render:function(e){var t=e.match;return r.a.createElement(P,{id:t.params.id})}})),r.a.createElement(X,null))},K=a(17),V=a(9),J={rockets:[],rocketDetails:[],ships:[],shipsDetails:[],isFetching:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROCKETS_LOADED":return Object(V.a)(Object(V.a)({},e),{},{rockets:t.payload});case"ROCKETS_DETAILS_LOADED":return Object(V.a)(Object(V.a)({},e),{},{rocketDetails:t.payload});case"SHIPS_LOADED":return Object(V.a)(Object(V.a)({},e),{},{ships:t.payload});case"SHIP_DETAILS_LOADED":return Object(V.a)(Object(V.a)({},e),{},{shipsDetails:t.payload});case"TOGGLE_IS_FETCHING":return Object(V.a)(Object(V.a)({},e),{},{isFetching:t.payload});default:return e}},U=Object(K.b)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Y=U;window.store=U;var W=a(27),q=a(29),z=a(28),Q=(a(51),function(){return r.a.createElement("div",null,"ERROR!")}),Z=function(e){Object(q.a)(a,e);var t=Object(z.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(W.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(Q,null):this.props.children}}]),a}(n.Component);s.a.render(r.a.createElement(v.a,{store:Y},r.a.createElement(Z,null,r.a.createElement(f,null,r.a.createElement(A.a,null,r.a.createElement(B,null))))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.64b91528.chunk.js.map