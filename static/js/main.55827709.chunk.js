(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n(28),r=n.n(s),i=(n(40),n(41),n(2)),o=n(16),j=n.n(o),u=n(29),l=n(8),d=n(13),b=n.n(d);b.a.defaults.baseURL="".concat("https://cors-anywhere.herokuapp.com/").concat("https://reigo-staging-dot-reigo-inv.appspot.com","/reigo");var O={createNewDeal:function(e){return b.a.post("dealsInputs",e)},getDeals:function(){return b.a.get("dealsInputs",{transformResponse:[function(e){var t=JSON.parse(e).body;return{tableHeaders:Object.keys(t[0]),deals:t}}]})}},p=n(30),h=n.n(p),f=(n(70),function(e){var t,n=e.tableHeaders,a=e.data,s=function(e,t){return e.includes("Address")?"address":isNaN(t)||e.includes("zipCode")?void 0:"number"},r=function(e,t){return n.map((function(n){return Object(c.jsx)("td",{className:s(n,e[n]),children:Object(c.jsx)(h.a,{properties:{target:"_blank"},children:e[n]})},"".concat(n).concat(t))}))};return Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{children:n.map((function(e,t){return Object(c.jsx)("th",{children:e},t)}))})}),Object(c.jsx)("tbody",{children:(t=a,t.map((function(e,t){return Object(c.jsx)("tr",{children:r(e,t)},t)})))})]})}),x=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),i=Object(l.a)(r,2),o=i[0],d=i[1],b=Object(a.useState)([]),p=Object(l.a)(b,2),h=p[0],x=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getDeals();case 2:t=e.sent,n=t.data,c=n.deals,a=n.tableHeaders,s(!1),d(c),x(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?"AllDeals - loading...":Object(c.jsx)(f,{tableHeaders:h,data:o})},g=n(34),m=n(32),v=n.n(m),y=n(31),D=n.n(y),N={loanOriginatedDate:"yyyy-MM-dd",platformName:"string",externalId:"string"},w=(n(71),n(72),function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),b=d[0],p=d[1],h=Object(a.useState)("Lets Create"),f=Object(l.a)(h,2),x=f[0],m=f[1];return Object(c.jsxs)("div",{className:"rowC",children:[Object(c.jsx)(g.a,{placeholder:N,onChange:function(e){var t=e.error,n=e.jsObject;s(!!t),j(n)},locale:v.a,height:"550px"}),Object(c.jsxs)("button",{className:"submit",disabled:n,onClick:function(){s(!0),p(),m("processing..."),O.createNewDeal(o).then((function(e){p(e),m("Lets Create")}),(function(e){p(e),m("Lets Create")}))},children:[" ",x]}),Object(c.jsx)(D.a,{data:b})]})}),C=function(){return Object(c.jsxs)(i.c,{children:[" ",Object(c.jsx)(i.a,{exact:!0,path:"/",component:x}),Object(c.jsx)(i.a,{exact:!0,path:"/newDeal",component:w})]})},S=n(12),k=function(){return Object(c.jsx)("nav",{className:"navBar",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(S.b,{exact:!0,to:"/",children:"All Deals"})}),Object(c.jsx)("li",{children:Object(c.jsx)(S.b,{to:"/newDeal",children:"Add Deal"})})]})})};var L=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(k,{}),Object(c.jsx)(C,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(c.jsx)(S.a,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),A()}},[[76,1,2]]]);
//# sourceMappingURL=main.55827709.chunk.js.map