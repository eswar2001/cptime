(this.webpackJsonpcptime=this.webpackJsonpcptime||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),s=r(0),c=r(4),i=(r(1),r(5)),m=r.n(i);r(13);var l,o=function(e){var t,r,n=new Date(1e3*e.startTime).toLocaleString(),a=new Date(1e3*e.endTime).toLocaleString();return e.status?(t="ongoing col-12 col-sm-8 col-md-6 col-lg-4",r="card mb-3 border-danger"):(t="upcoming col-12 col-sm-8 col-md-6 col-lg-4",r="card mb-3 border-primary"),Object(s.jsx)("div",{className:t,children:Object(s.jsxs)("div",{className:r,style:{minWidth:"20rem",minHeight:"20rem"},children:[Object(s.jsxs)("span",{className:"card-header",style:{},children:[" ",e.platform," "]}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("h3",{className:"card-title",children:[" ",e.name," "]}),Object(s.jsxs)("p",{className:"card-text",children:["Start Time:",n]}),Object(s.jsxs)("p",{className:"card-text",children:["End Time:",a]}),Object(s.jsx)("a",{href:e.url,className:"card-link ",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("button",{className:"btn btn-primary",children:"Register Now"})})]})]})})},d=r(6),p=r.n(d);function u(){return(u=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cplistapi.herokuapp.com/",e.next=3,p()("https://cplistapi.herokuapp.com/");case 3:return t=e.sent,e.next=6,t.json();case 6:l=e.sent;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return u.apply(this,arguments)})().then((function(){var e=l.results.upcoming,t=l.results.ongoing;m.a.render(Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[e.map((function(e){return Object(s.jsx)(o,{status:0,name:e.name,platform:e.platform,startTime:e.startTime,endTime:e.endTime,url:e.url},e.name)})),t.map((function(e){return Object(s.jsx)(o,{status:1,name:e.name,platform:e.platform,startTime:e.startTime,endTime:e.endTime,url:e.url},e.name)}))]})})}),document.getElementById("root"))}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c16d1bc8.chunk.js.map