(this["webpackJsonpspace-x-launch-viewer"]=this["webpackJsonpspace-x-launch-viewer"]||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(21),r=a.n(n),l=(a(58),a(59),a.p+"static/media/spacex-logo.e755fcbf.png"),i=a.p+"static/media/launch-home.b539e3f9.png",o=a.p+"static/media/launch-home@2x.2ac07a63.png",u=a.p+"static/media/launch-home@3x.8f2f8d9e.png",j={LOGO:l,SPACE_X_IMAGE:i,SPACE_X_RETINA_IMAGES:"".concat(i," 1x, ").concat(o," 2x, ").concat(u," 3x"),SPACE_X_API:"https://api.spacexdata.com/v3/launches",INCREMENT:1},d={LAUNCHES:"Launches",ASC:"Sort Ascending",DESC:"Sort Descending",FILTER_BY_YEAR:"Filter By Year",RELOAD:"Reload Data",LOADING:"Loading...",ERROR:"Sorry, there has been an error trying to load SpaceX data."},h=a(1),b=function(e){var t=e.classes,a=e.label,c=e.onClick;return Object(h.jsx)("button",{onClick:c,className:t,children:a})},m=a(31),p=a(46),x=a(8),O={listLaunches:Function,items:[],sort:!1,setSort:Boolean,filter:"",setFilter:Function,loading:!1,setLoading:Function,hasError:!1,setError:Function},f=s.a.createContext(O),_=function(){return s.a.useContext(f)},v=function(e){var t=e.children,a=s.a.useState([]),c=Object(x.a)(a,2),n=c[0],r=c[1],l=s.a.useState(!1),i=Object(x.a)(l,2),o=i[0],u=i[1],j=s.a.useState(""),d=Object(x.a)(j,2),b=d[0],O=d[1],_=s.a.useState(!1),v=Object(x.a)(_,2),g=v[0],N=v[1],S=s.a.useState(!1),E=Object(x.a)(S,2),A=E[0],C=E[1];return Object(h.jsx)(f.Provider,{value:{listLaunches:s.a.useCallback(Object(p.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(""),N(!0),u(!1),e.prev=3,e.next=6,fetch("https://api.spacexdata.com/v4/launches").then((function(e){return e.json()}));case 6:t=e.sent,Promise.all(t.map(function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=t.rocket,fetch("https://api.spacexdata.com/v4/rockets/"+c).then((function(e){return e.json()}));case 2:a=e.sent,t.rocket_name=a.name;case 4:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(){N(!1),r(t)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),C(!0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])}))),[]),items:n,sort:o,setSort:u,filter:b,setFilter:O,hasError:A,setLoading:N,loading:g},children:t})},g=function(){var e=_().listLaunches;return Object(h.jsxs)("header",{className:"app__header",children:[Object(h.jsxs)("div",{className:"app__logo",children:[Object(h.jsx)("img",{src:j.LOGO,className:"app__logo-image",alt:""}),Object(h.jsx)("span",{className:"app__logo-txt",children:d.LAUNCHES})]}),Object(h.jsx)(b,{onClick:function(){return e()},classes:"button button--reload",label:d.RELOAD})]})},N=a(14),S=a(25),E=a.n(S),A=a(36),C=a.n(A),k=a(49),Y=function(e){var t=e.className,a=e.launch_success,c=e.details,s=e.article;return Object(h.jsx)("div",{className:t,children:Object(h.jsxs)("div",{className:"accordion-content",children:[Object(h.jsxs)("span",{children:["Launch Status:"," ",a?"This launch was a success":"This launch was unsuccessful"]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["Launch Details:"," ",null===c?"There are no details on this launch.":c]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),null===s?Object(h.jsx)("p",{children:"No articles yet published regarding this launch"}):Object(h.jsxs)("span",{children:["Launch Coverage:\xa0",Object(h.jsx)("a",{className:"article-link",target:"_blank",href:s,rel:"noreferrer",children:"Available article on launch"})]})]})})},L=a(86),I=a(85),D=a(88),w=function(e){var t=e.index,a=e.activeId,c=(e.onClick,e.flight_number),s=e.name,n=e.date_utc,r=e.rocket_name,l=e.launch_success,i=e.details,o=e.article;return s.length>25&&(s=s.substring(0,25)+"..."),Object(h.jsxs)(L.a,{className:"launch-item",children:[Object(h.jsxs)(I.a,{expandIcon:Object(h.jsx)(k.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"flight-number",children:"#".concat(c)}),Object(h.jsx)("span",{className:"flight-name",children:"".concat(s)})]}),Object(h.jsx)("div",{className:"end-container",children:Object(h.jsxs)("span",{className:"item-details",children:[Object(h.jsx)("span",{className:"launch-date",children:E()(n).format("Do MMMM YYYY")}),Object(h.jsx)("span",{className:"rocket-name",children:r})]})})]}),Object(h.jsx)(D.a,{children:Object(h.jsx)(Y,{className:C()("launch-details",{active:a===t}),launch_success:l,details:i,article:o})})]})},M=function(e){var t=e.launchItems,a=e.filter,c=e.sort,n=e.hasError,r=e.loading,l=s.a.useState(void 0),i=Object(x.a)(l,2),o=i[0],u=i[1],j=Object(N.a)(t).sort((function(e,t){var a=E()(e.date_utc).format("YYYYMMDD"),s=E()(t.date_utc).format("YYYYMMDD");return c?Number(s)-Number(a):Number(a)-Number(s)}));return""!==a&&(j=j.filter((function(e){return E()(e.date_utc).format("YYYY")===a}))),n?Object(h.jsx)("span",{className:"launch-list-error-msg",children:Object(h.jsx)("p",{children:"Error requesting data from the SpaceX API."})}):r?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("div",{className:"lds-dual-ring"})}):Object(h.jsx)("ul",{className:"launch-list",children:j.map((function(e,t){return Object(h.jsx)(w,{index:t,activeId:o,onClick:function(){var e;u((e=t)===o?void 0:e)},flight_number:e.flight_number,name:e.name,date_utc:e.date_utc,rocket_name:e.rocket_name,launch_success:e.success,details:e.details,article:e.links.article},t)}))})},R=function(e){var t=e.label,a=e.classes,c=e.error,s=e.allowDisabledState,n=_(),r=n.setFilter,l=n.filter,i=n.items,o=[],u=C()(a,{disabled:s?c:""});return i.map((function(e,t){var a=e.date_utc;return o.push(new Date(a).getFullYear().toString())})),o=Object(N.a)(new Set(o)),Object(h.jsxs)("select",{name:t,className:u,onChange:function(e){r(e.target.value)},value:l,children:[Object(h.jsx)("option",{value:"",children:t}),o.map((function(e,t){return Object(h.jsx)("option",{children:e},t)}))]})},F=function(){var e=_(),t=e.filter,a=e.setSort,c=e.sort,s=e.items,n=e.hasError,r=e.loading;return Object(h.jsxs)("div",{className:"app__body",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:j.SPACE_X_IMAGE,srcSet:j.SPACE_X_RETINA_IMAGES,className:"app__main-image",alt:"Launch Home"})}),Object(h.jsxs)("div",{className:"app__launches",children:[Object(h.jsxs)("div",{className:"app__filters",children:[Object(h.jsx)(R,{classes:"select",label:d.FILTER_BY_YEAR,error:!1,allowDisabledState:!1}),Object(h.jsx)(b,{classes:"button button--sort",onClick:function(){return a(!c)},label:c?d.ASC:d.DESC})]}),Object(h.jsx)(M,{launchItems:s,filter:t,sort:c,hasError:n,loading:r})]})]})},P=function(){var e=_().listLaunches;return s.a.useEffect((function(){e()}),[e]),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(g,{}),Object(h.jsx)(F,{})]})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{children:Object(h.jsx)(P,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.17c3a97a.chunk.js.map