(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n(28),r=n.n(s),i=(n(40),n(41),n(2)),o=n(16),l=n.n(o),j=n(29),u=n(8),d=n(13),b=n.n(d);b.a.defaults.baseURL="".concat("https://cors-anywhere.herokuapp.com/").concat("https://reigo-staging-dot-reigo-inv.appspot.com","/reigo");var O={createNewDeal:function(e){return b.a.post("dealsInputs",e)},getDeals:function(){return b.a.get("dealsInputs",{transformResponse:[function(e){var t=JSON.parse(e).body;return{tableHeaders:Object.keys(t[0]),deals:t}}]})}},p=n(30),h=n.n(p),f=(n(70),function(e){var t,n=e.tableHeaders,c=e.data,s=function(e,t){return e.includes("Address")?"address":isNaN(t)||e.includes("zipCode")?void 0:"number"},r=function(e,t){return n.map((function(n){return Object(a.jsx)("td",{className:s(n,e[n]),children:Object(a.jsx)(h.a,{properties:{target:"_blank"},children:e[n]})},"".concat(n).concat(t))}))};return Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:n.map((function(e,t){return Object(a.jsx)("th",{children:e},t)}))})}),Object(a.jsx)("tbody",{children:(t=c,t.map((function(e,t){return Object(a.jsx)("tr",{children:r(e,t)},t)})))})]})}),x=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),i=Object(u.a)(r,2),o=i[0],d=i[1],b=Object(c.useState)([]),p=Object(u.a)(b,2),h=p[0],x=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getDeals();case 2:t=e.sent,n=t.data,a=n.deals,c=n.tableHeaders,s(!1),d(a),x(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n?"AllDeals - loading...":Object(a.jsx)(f,{tableHeaders:h,data:o})},m=n(34),g=n(32),v=n.n(g),D=n(31),y=n.n(D),N={loanOriginatedDate:"yyyy-MM-dd",platformName:"string",externalId:"string"},w=(n(71),n(72),function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),i=Object(u.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(""),d=Object(u.a)(j,2),b=d[0],p=d[1],h=Object(c.useState)("Lets Create"),f=Object(u.a)(h,2),x=f[0],g=f[1];return Object(a.jsxs)("div",{className:"rowC",children:[Object(a.jsx)(m.a,{placeholder:N,onChange:function(e){var t=e.error,n=e.jsObject;s(!!t),l(n)},locale:v.a,height:"550px"}),Object(a.jsxs)("button",{className:"submit",disabled:n,onClick:function(){s(!0),p(),g("processing..."),O.createNewDeal(o).then((function(e){p(e),g("Lets Create")}),(function(e){p(e),g("Lets Create")}))},children:[" ",x]}),Object(a.jsx)(y.a,{data:b})]})}),C=function(){return Object(a.jsxs)(i.c,{children:[" ",Object(a.jsx)(i.a,{exact:!0,path:["/allDeals","/demo-app"],component:x}),Object(a.jsx)(i.a,{exact:!0,path:"/newDeal",component:w})]})},S=n(12),k=function(){return Object(a.jsx)("nav",{className:"navBar",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(S.b,{exact:!0,to:"/allDeals",children:"All Deals"})}),Object(a.jsx)("li",{children:Object(a.jsx)(S.b,{to:"/newDeal",children:"Add Deal"})})]})})};var L=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(k,{}),Object(a.jsx)(C,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(a.jsx)(S.a,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),A()}},[[76,1,2]]]);
//# sourceMappingURL=main.18aeaf35.chunk.js.map