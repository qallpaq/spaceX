(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/SpaceX-Logo.6ff54c0f.svg"},35:function(e,t,a){e.exports=a(80)},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),s=a(33),l=(a(40),a(10)),o=a(20),u=a.n(o),m=(a(41),function(e){var t=e.menu,a=e.closeMenu,n=e.links;return r.a.createElement("div",{className:"header-menu-mobile ".concat(t&&"active")},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"header__links-mobile",onClick:function(e){e.target.classList.contains("header-link-mobile__item")&&a()}},n.map((function(e){return r.a.createElement("li",{className:"header-link-mobile",key:e.id},r.a.createElement(l.b,{to:e.link},r.a.createElement("span",{className:"header-link-mobile__item"},e.page)))})))))}),p=a(4),d=r.a.createContext(),f=function(){return Object(n.useContext)(d)},E=function(e){var t=e.children,a={currentPage:Object(p.d)((function(e){return e.basic.currentPage}))};return r.a.createElement(d.Provider,{value:a},t)},h=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=f().currentPage,o=[{link:"/",page:"home",id:1},{link:"/rockets/",page:"rockets",id:2},{link:"/dragons/",page:"dragons",id:3},{link:"/ships/",page:"ships",id:4},{link:"/contact/",page:"contact",id:5}];return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"space-x-logo",src:u.a,alt:"logo"}),r.a.createElement("div",{className:"header__links"},o.map((function(e,t){return r.a.createElement("li",{key:e.id,className:"header-link header-link-pc ".concat(i===t+1&&"active")},r.a.createElement(l.b,{to:e.link},e.page))}))),r.a.createElement("div",{className:"header__burger",onClick:function(){return c((function(){return!a}))}},r.a.createElement("span",null)),r.a.createElement(m,{menu:a,closeMenu:function(){return c(!1)},links:o}))))},g=(a(47),function(){return r.a.createElement("footer",null,r.a.createElement("img",{className:"footer-logo",src:u.a,alt:"spaceX"}))}),_=(a(48),function(){var e=f().currentPage;return r.a.createElement("div",{className:"current-page-number"},r.a.createElement("span",{className:"current-page-title"},"0",e)," / 05")}),v=(a(49),function(){var e=f().currentPage;return r.a.createElement("div",{className:"current-page-dots"},[1,2,3,4,5].map((function(t){return r.a.createElement("div",{key:t,className:"current-page-dots__item ".concat(e===t&&"active")},t)})))}),b=a(1),k=(a(50),function(e){return{type:"TOGGLE_IS_FETCHING",payload:e}}),N=function(e){return{type:"SET_CURRENT_PAGE",payload:e}},O=function(){Object(n.useEffect)((function(){e(N(1))}),[]);var e=Object(p.c)();return r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",{className:"home-page__title"},"WELCOME TO SPACE-X"))},y=(a(51),function(){return r.a.createElement("div",{className:"loadingio-spinner-ellipsis-dymcfbxbnp5"},r.a.createElement("div",{className:"ldio-lsvv6l7r3e"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),D=(a(52),function(e){var t=e.data,a=e.type,n=t.flickr_images;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item__list-img-wrapper",style:{background:"url(".concat(n[1],") no-repeat center"),backgroundSize:"cover"}}),r.a.createElement("div",{className:"item__list-info"},function(){switch(a){case"rockets":return["rocket_name"];case"dragons":return["name"];default:return null}}().map((function(e,a){return r.a.createElement("div",{className:"item__list-row",key:a},r.a.createElement("h1",{className:"item__title"},t[e]))}))))}),j=(a(53),Object(b.f)((function(e){var t=e.item,a=e.type,n=e.history;return r.a.createElement("ul",{className:"items__list"},t.map((function(e){return r.a.createElement("li",{className:"items__list-element",key:e.id,onClick:function(){return n.push("/".concat(a,"/").concat(e.id))}},r.a.createElement(D,{data:e,type:a}))})))}))),S=a(5),w=a.n(S),A=a(11),x=a(21),P=new function e(){var t=this;Object(x.a)(this,e),this._apiBase="https://api.spacexdata.com/v3",this.getResource=function(){var e=Object(A.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a)+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllRockets=Object(A.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/rockets/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getRocket=function(){var e=Object(A.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/rockets/");case 2:return n=e.sent,e.abrupt("return",n[a-1]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllShips=function(){var e=Object(A.a)(w.a.mark((function e(a){var n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=12*(a-1),e.next=3,t.getResource("/ships/?limit=12&offset=".concat(n));case 3:return r=e.sent,e.abrupt("return",r.filter((function(e){return null!==e.image})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getShip=function(){var e=Object(A.a)(w.a.mark((function e(a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/ships/");case 2:return n=e.sent,e.abrupt("return",n.find((function(e){return e.ship_id===a})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllDragons=Object(A.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/dragons/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getDragon=function(){var e=Object(A.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/dragons/".concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(e,t,a){return function(n){return function(r){r(N(t)),r(k(!0)),e(n).then((function(e){r(a(e)),r(k(!1))})).catch((function(e){alert(e),r(k(!1))}))}}},L=R(P.getAllRockets,2,(function(e){return{type:"ROCKETS_LOADED",payload:e}})),F=R(P.getAllDragons,3,(function(e){return{type:"DRAGONS_LOADED",payload:e}})),T=R(P.getAllShips,4,(function(e){return{type:"SHIPS_LOADED",payload:e}})),C=R(P.getRocket,2,(function(e){return{type:"ROCKETS_DETAILS_LOADED",payload:e}})),G=R(P.getDragon,3,(function(e){return{type:"DRAGONS_DETAILS_LOADED",payload:e}})),I=R(P.getShip,4,(function(e){return{type:"SHIP_DETAILS_LOADED",payload:e}})),M={getRockets:L},H=Object(p.b)((function(e){return{rockets:e.rockets.rockets,isFetching:e.basic.isFetching}}),M)((function(e){var t=e.isFetching,a=e.rockets,c=e.getRockets;return Object(n.useEffect)((function(){c()}),[]),t?r.a.createElement(y,null):r.a.createElement(j,{item:a,type:"rockets"})})),q={getDragons:F},B=Object(p.b)((function(e){return{dragons:e.dragons.dragons,isFetching:e.basic.isFetching}}),q)((function(e){var t=e.dragons,a=e.isFetching,c=e.getDragons;return Object(n.useEffect)((function(){c()}),[]),a?r.a.createElement(y,null):r.a.createElement(j,{item:t,type:"dragons"})})),K=(a(55),function(e){var t=e.ship;return r.a.createElement(l.b,{to:"/ships/".concat(t.ship_id)},r.a.createElement("div",{className:"item__list-img-wrapper",style:{background:"url(".concat(t.image,") no-repeat center"),backgroundSize:"cover"}}),r.a.createElement("div",{className:"item__list-row"},r.a.createElement("h1",{className:"item__title"},t.ship_name)))}),J=(a(56),function(e){var t=e.ships,a=e.setPage,n=e.currentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"items__list items__list-ships"},t.map((function(e){return r.a.createElement("li",{className:"items__list-element",key:e.ship_id},r.a.createElement(K,{ship:e}))}))),r.a.createElement("div",{className:"ship__list-pages"},[1,2].map((function(e){return r.a.createElement("button",{className:"ship__list-button ".concat(n===e&&"active"),onClick:function(){return a(e)},key:e},e)}))))}),X={getShips:T,setPage:function(e){return{type:"SET_PAGE",payload:e}}},z=Object(p.b)((function(e){var t=e.basic.isFetching,a=e.ships;return{isFetching:t,ships:a.ships,currentPage:a.currentPage}}),X)((function(e){var t=e.isFetching,a=e.ships,c=e.currentPage,i=e.setPage,s=e.getShips;return Object(n.useEffect)((function(){s(c)}),[c]),t?r.a.createElement(y,null):r.a.createElement(J,{ships:a,setPage:i,currentPage:c})})),U=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(H,null))},W=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(z,null))},Y=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(B,null))},Q=(a(57),function(e){var t=e.title,a=e.subtitle;return r.a.createElement("div",{className:"contact__info-item"},r.a.createElement("div",{className:"contact__item-text"},r.a.createElement("div",{className:"contact__item-title"},t),r.a.createElement("div",{className:"contact__item-subtitle"},a)))}),V=function(){Object(n.useEffect)((function(){e(N(5))}),[]);var e=Object(p.c)();return r.a.createElement("form",{className:"contact",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"contact__info"},r.a.createElement(Q,{title:"e-mail",subtitle:"spacex@gmail.com"}),r.a.createElement(Q,{title:"phone",subtitle:"8-800-555-35-35"}),r.a.createElement(Q,{title:"address",subtitle:"69LMAO Street Pe, D.ick"})),r.a.createElement("div",{className:"contact__content"},r.a.createElement("div",{className:"contact__content-inputs"},r.a.createElement("input",{className:"contact__input",placeholder:"NAME",required:!0}),r.a.createElement("input",{className:"contact__input",placeholder:"E-MAIL",required:!0}),r.a.createElement("input",{className:"contact__input",placeholder:"PHONE",required:!0})),r.a.createElement("div",{className:"contact__content-submit"},r.a.createElement("textarea",{className:"contact__content-text",placeholder:"MESSAGE",required:!0}),r.a.createElement("button",{className:"contact__content-btn"},"send"))))},Z=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(V,null))},$=(a(58),a(29)),ee=a.n($),te=(a(74),a(75),a(76),function(e){var t=e.arr,a={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0};return r.a.createElement(ee.a,a,t.map((function(e,t){return r.a.createElement("div",{className:"slide",key:t},r.a.createElement("img",{src:e,alt:"slider-img"}))})))}),ae=function(e){var t=e.details,a=e.type,n=t.flickr_images,c=void 0===n?[]:n;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item__details"},r.a.createElement(te,{arr:c}),r.a.createElement("div",{className:"item__details-content"},function(){switch(a){case"rockets":return["rocket_name","description","country","boosters","stages","first_flight"];case"dragons":return["name","description","type","first_flight"];default:return null}}().map((function(e,a){return r.a.createElement("li",{key:a,className:"item__details-row"},r.a.createElement("span",{className:"item__details-label"},"".concat(e.replace("_"," "),": ")),t[e])})))))},ne={getDragon:G},re=Object(p.b)((function(e){return{dragonsDetails:e.dragons.dragonsDetails,isFetching:e.basic.isFetching}}),ne)((function(e){var t=e.dragonsDetails,a=e.id,c=e.isFetching,i=e.getDragon;return Object(n.useEffect)((function(){i(a)}),[]),c?r.a.createElement(y,null):r.a.createElement(ae,{details:t,type:"dragons"})})),ce={getRocket:C},ie=Object(p.b)((function(e){return{isFetching:e.basic.isFetching,rocketDetails:e.rockets.rocketDetails}}),ce)((function(e){var t=e.id,a=e.isFetching,c=e.rocketDetails,i=e.getRocket;return Object(n.useEffect)((function(){i(t)}),[]),a?r.a.createElement(y,null):r.a.createElement(ae,{details:c,type:"rockets"})})),se=(a(77),function(e){var t=e.shipsDetails,a=t.active?"YES":"NO";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"ship-details animation-active"},r.a.createElement("div",{className:"ship-details__img-wrapper"},r.a.createElement("img",{className:"ship__img",src:t.image,alt:"ship"})),r.a.createElement("div",{className:"ship-details__info"},r.a.createElement("div",{className:"ship-details__row"},r.a.createElement("h1",{className:"ship-details__row--name"},t.ship_name)),r.a.createElement("div",{className:"ship-details__row"},r.a.createElement("h2",null,t.home_port)),r.a.createElement("div",{className:"ship-details__row"},"Mass ",t.weight_kg," (kg)"),r.a.createElement("div",{className:"ship-details__row"},"Birth of build ",t.year_built),r.a.createElement("div",{className:"ship-details__row"},"Active: ",a))))}),le={getShip:I},oe=Object(p.b)((function(e){return{isFetching:e.basic.isFetching,shipsDetails:e.ships.shipsDetails}}),le)((function(e){var t=e.id,a=e.isFetching,c=e.shipsDetails,i=e.getShip;return Object(n.useEffect)((function(){i(t)}),[]),a?r.a.createElement(y,null):r.a.createElement(se,{shipsDetails:c})})),ue=function(){return r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:O}),r.a.createElement(b.a,{path:"/rockets",exact:!0,component:U}),r.a.createElement(b.a,{path:"/rockets/:id",render:function(e){var t=e.match;return r.a.createElement(ie,{id:t.params.id})}}),r.a.createElement(b.a,{path:"/dragons",exact:!0,component:Y}),r.a.createElement(b.a,{path:"/dragons/:id",render:function(e){var t=e.match;return r.a.createElement(re,{id:t.params.id})}}),r.a.createElement(b.a,{path:"/ships",exact:!0,component:W}),r.a.createElement(b.a,{path:"/ships/:id",render:function(e){var t=e.match;return r.a.createElement(oe,{id:t.params.id})}}),r.a.createElement(b.a,{path:"/contact",exact:!0,component:Z}))},me=(a(78),function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-content"},r.a.createElement(h,null),r.a.createElement(_,null),r.a.createElement(v,null),r.a.createElement(ue,null)),r.a.createElement(g,null))}),pe=a(12),de=a(3),fe={isFetching:!1,currentPage:1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_IS_FETCHING":return Object(de.a)(Object(de.a)({},e),{},{isFetching:t.payload});case"SET_CURRENT_PAGE":return Object(de.a)(Object(de.a)({},e),{},{currentPage:t.payload});default:return e}},he={rockets:[],rocketDetails:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROCKETS_LOADED":return Object(de.a)(Object(de.a)({},e),{},{rockets:t.payload});case"ROCKETS_DETAILS_LOADED":return Object(de.a)(Object(de.a)({},e),{},{rocketDetails:t.payload});default:return e}},_e={ships:[],currentPage:1,shipsDetails:[]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHIPS_LOADED":return Object(de.a)(Object(de.a)({},e),{},{ships:t.payload});case"SHIP_DETAILS_LOADED":return Object(de.a)(Object(de.a)({},e),{},{shipsDetails:t.payload});case"SET_PAGE":return Object(de.a)(Object(de.a)({},e),{},{currentPage:t.payload});default:return e}},be={dragons:[],dragonsDetails:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRAGONS_LOADED":return Object(de.a)(Object(de.a)({},e),{},{dragons:t.payload});case"DRAGONS_DETAILS_LOADED":return Object(de.a)(Object(de.a)({},e),{},{dragonsDetails:t.payload});default:return e}},Ne=a(30),Oe=Object(pe.d)(Object(pe.c)({basic:Ee,rockets:ge,ships:ve,dragons:ke}),Object(pe.a)(Ne.a)),ye=a(31),De=a(34),je=a(32),Se=(a(79),function(){return r.a.createElement("div",{className:"error-wrapper"},r.a.createElement("h1",{className:"error-title"},"we have some problems..."),r.a.createElement("img",{className:"error-content",src:"https://cdnimg.rg.ru/i/photogallery/2019/11/22/ca8073339fbb00a/ca8073339fbb00a1574401994.JPG",alt:"Problems"}))}),we=function(e){Object(De.a)(a,e);var t=Object(je.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(ye.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(Se,null):this.props.children}}]),a}(n.Component),Ae=E;i.a.render(r.a.createElement(p.a,{store:Oe},r.a.createElement(Ae,null,r.a.createElement(we,null,r.a.createElement(l.a,null,r.a.createElement(me,null))))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ebca1fcb.chunk.js.map