(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/SpaceX-Logo.6ff54c0f.svg"},25:function(e,t,a){},30:function(e,t,a){e.exports=a(52)},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),i=(a(35),a(1)),l=(a(36),function(){return r.a.createElement("div",{className:"home-page animation-active"},r.a.createElement("h1",{className:"home-page__title"},"WELCOME TO SPACE-X, BITCH"))}),o=a(3),u=a.n(o),m=a(10),p=a(16),h=function e(){var t=this;Object(p.a)(this,e),this._apiBase="https://api.spacexdata.com/v3",this.getResource=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a)+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllRockets=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/rockets/");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getRocket=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/rockets/");case 2:return n=e.sent,e.abrupt("return",n[a]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllDragons=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/dragons/");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),this.getDragon=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/dragons/");case 2:return n=e.sent,e.abrupt("return",n[a]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllShips=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/ships/");case 2:return a=e.sent,e.abrupt("return",a.slice(4));case 4:case"end":return e.stop()}}),e)}))),this.getShip=function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/ships/".concat(a));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=r.a.createContext(),d=function(){return Object(n.useContext)(E)},f=function(e){var t=e.children,a=new h;return r.a.createElement(E.Provider,{value:a},t)},v=function(e){return{type:"TOGGLE_IS_FETCHING",payload:e}},g=a(9),_=(a(42),a(43),Object(i.f)((function(e){var t=e.rocket,a=e.history;return r.a.createElement("div",{className:"rocket__item"},r.a.createElement("div",{className:"rocket-img-wrapper"},r.a.createElement("img",{className:"rocket__img",src:t.flickr_images[1],alt:"rocket"})),r.a.createElement("div",{className:"rocket__item-info"},r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("span",null,t.rocket_name)),r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("span",null,t.country)),r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("span",null,t.company)),r.a.createElement("div",{className:"rocket__item-row"},r.a.createElement("span",null,"STAGES:")," ",t.stages),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{className:"btn-rocket",onClick:function(e){return a.push("/rockets/".concat(t.id))}},"View Details"))))}))),k=function(e){var t=e.rockets;return r.a.createElement("ul",{className:"rocket-list animation-active"},t.map((function(e){return r.a.createElement("li",{className:"rocket-list__item",key:e.id},r.a.createElement(_,{rocket:e}))})))},b=(a(45),function(){return r.a.createElement("div",{className:"loadingio-spinner-ellipsis-dymcfbxbnp5"},r.a.createElement("div",{className:"ldio-lsvv6l7r3e"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),O={rocketsLoaded:function(e){return{type:"ROCKETS_LOADED",payload:e}},toggleIsFetching:v},N=Object(g.b)((function(e){return{rockets:e.rockets,isFetching:e.isFetching}}),O)((function(e){var t=e.rockets,a=e.rocketsLoaded,c=e.isFetching,s=e.toggleIsFetching,i=d();return Object(n.useEffect)((function(){s(!0),i.getAllRockets().then((function(e){s(!1),a(e)}))}),[]),c?r.a.createElement(b,null):r.a.createElement(k,{rockets:t})})),w=function(){return r.a.createElement(N,null)},D=(a(25),a(46),Object(i.f)((function(e){var t=e.ship,a=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ship__img-wrapper"},r.a.createElement("img",{className:"ship-img",src:t.image,alt:"ship"})),r.a.createElement("div",{className:"ship__item-row"},r.a.createElement("i",null,t.ship_name)),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{className:"btn-ship",onClick:function(e){return a.push("/ships/".concat(t.ship_id))}},"View Details")))}))),j=function(e){var t=e.ships;return r.a.createElement("ul",{className:"ship-list animation-active"},t.map((function(e){return r.a.createElement("li",{className:"ship-list__item",key:e.ship_id},r.a.createElement(D,{ship:e}))})))},y={shipsLoaded:function(e){return{type:"SHIPS_LOADED",payload:e}},toggleIsFetching:v},S=Object(g.b)((function(e){return{ships:e.ships,isFetching:e.isFetching}}),y)((function(e){var t=e.ships,a=e.shipsLoaded,c=e.isFetching,s=e.toggleIsFetching,i=d();return Object(n.useEffect)((function(){s(!0),i.getAllShips().then((function(e){s(!1),a(e)}))}),[]),c?r.a.createElement(b,null):r.a.createElement(j,{ships:t})})),x=function(){return r.a.createElement(S,null)},F=(a(47),function(e){var t=e.rocketDetails,a=t.flickr_images,n=t.rocket_name,c=t.active,s=t.description,i=t.stages,l=t.boosters,o=t.first_flight,u=c?"YES":"NO";return r.a.createElement("div",{className:"rocket-details animation-active"},r.a.createElement("div",{className:"rocket-details__img-wrapper"},r.a.createElement("img",{className:"rocket-details__img",src:a,alt:"rocket"})),r.a.createElement("div",{className:"rocket-details__info"},r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,n)),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"description:")," ",s),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"active:")," ",u),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"stages:")," ",i),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"boosters:")," ",l),r.a.createElement("div",{className:"rocket-details__row"},r.a.createElement("span",null,"first flight:")," ",o)))}),L={rocketDetailsLoaded:function(e){return{type:"ROCKETS_DETAILS_LOADED",payload:e}},toggleIsFetching:v},I=Object(g.b)((function(e){return{rocketDetails:e.rocketDetails,isFetching:e.isFetching}}),L)((function(e){var t=e.id,a=e.rocketDetails,c=e.rocketDetailsLoaded,s=e.isFetching,i=e.toggleIsFetching,l=d();return Object(n.useEffect)((function(){i(!0),l.getRocket(t-1).then((function(e){i(!1),c(e)}))}),[]),s?r.a.createElement(b,null):r.a.createElement(F,{rocketDetails:a})})),A=(a(48),a(12)),R=a(18),C=a.n(R),T=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("li",{className:"header-link"},r.a.createElement(A.b,{to:"/"},r.a.createElement("img",{className:"space-x-logo",src:C.a,alt:"logo"}))),r.a.createElement("li",{className:"header-link"},r.a.createElement(A.b,{to:"/rockets/"},"ROCKETS")),r.a.createElement("li",{className:"header-link"},r.a.createElement(A.b,{to:"/ships/"},"SHIPS"))))},H=(a(49),function(e){var t=e.shipsDetails,a=t.active?"YES":"NO";return r.a.createElement("div",{className:"ship-details animation-active"},r.a.createElement("div",{className:"ship-details__img-wrapper"},r.a.createElement("img",{className:"ship__img",src:t.image,alt:"ship"})),r.a.createElement("div",{className:"ship-details__row"},t.ship_name),r.a.createElement("div",{className:"ship-details__row"},t.home_port),r.a.createElement("div",{className:"ship-details__row"},"Mass ",t.weight_kg," (kg)"),r.a.createElement("div",{className:"ship-details__row"},"Birth of build ",t.year_built),r.a.createElement("div",{className:"ship-details__row"},"Active: ",a))}),G={shipDetailsLoaded:function(e){return{type:"SHIP_DETAILS_LOADED",payload:e}},toggleIsFetching:v},P=Object(g.b)((function(e){return{shipsDetails:e.shipsDetails,isFetching:e.isFetching}}),G)((function(e){var t=e.id,a=e.shipsDetails,c=e.shipDetailsLoaded,s=e.isFetching,i=e.toggleIsFetching,l=d();return Object(n.useEffect)((function(){i(!0),l.getAllShips().then((function(e){i(!1),c(e.find((function(e){return e.ship_id===t})))}))}),[]),s?r.a.createElement(b,null):r.a.createElement(H,{shipsDetails:a})})),B=(a(50),function(){return r.a.createElement("footer",null,r.a.createElement("img",{src:C.a,alt:"spaceX"}))}),K=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"app"},r.a.createElement(T,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:l}),r.a.createElement(i.a,{path:"/rockets",exact:!0,component:w}),r.a.createElement(i.a,{path:"/rockets/:id",render:function(e){var t=e.match;return r.a.createElement(I,{id:t.params.id})}}),r.a.createElement(i.a,{path:"/ships",exact:!0,component:x}),r.a.createElement(i.a,{path:"/ships/:id",render:function(e){var t=e.match;return r.a.createElement(P,{id:t.params.id})}})),r.a.createElement(B,null)))},X=a(17),J=a(8),M={rockets:[],rocketDetails:[],ships:[],shipsDetails:[],isFetching:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROCKETS_LOADED":return Object(J.a)(Object(J.a)({},e),{},{rockets:t.payload});case"ROCKETS_DETAILS_LOADED":return Object(J.a)(Object(J.a)({},e),{},{rocketDetails:t.payload});case"SHIPS_LOADED":return Object(J.a)(Object(J.a)({},e),{},{ships:t.payload});case"SHIP_DETAILS_LOADED":return Object(J.a)(Object(J.a)({},e),{},{shipsDetails:t.payload});case"TOGGLE_IS_FETCHING":return Object(J.a)(Object(J.a)({},e),{},{isFetching:t.payload});default:return e}},Y=Object(X.b)(V),W=Y;window.store=Y;var q=a(27),z=a(29),Q=a(28),U=(a(51),function(){return r.a.createElement("div",null,"ERROR!")}),Z=function(e){Object(z.a)(a,e);var t=Object(Q.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(q.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(U,null):this.props.children}}]),a}(n.Component);s.a.render(r.a.createElement(g.a,{store:W},r.a.createElement(Z,null,r.a.createElement(f,null,r.a.createElement(A.a,null,r.a.createElement(K,null))))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a4da0e05.chunk.js.map