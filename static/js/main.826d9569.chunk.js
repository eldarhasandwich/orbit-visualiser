(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{66:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(20),a=n.n(c),o=(n(66),n(58)),s=n(27),u=n(74),j=n(75),b=n(11),d=function(e){var t=e.addOrbitFn,n=Object(i.useState)(0),r=Object(s.a)(n,2),c=r[0],a=r[1],o=Object(i.useState)(0),d=Object(s.a)(o,2),l=d[0],O=d[1],f=Object(i.useState)(0),g=Object(s.a)(f,2),x=g[0],h=g[1],m=Object(i.useState)(0),p=Object(s.a)(m,2),v=p[0],A=p[1],C=Object(i.useState)(0),F=Object(s.a)(C,2),y=F[0],S=F[1],B=Object(i.useState)(0),P=Object(s.a)(B,2),I=P[0],k=P[1],w=function(e){return parseInt(e.replace(/\D/g,""))||0};return Object(b.jsxs)(u.a,{size:"small",title:"Orbit",style:{width:300},extra:Object(b.jsx)("a",{onClick:function(){t({eccentricity:c,semimajorAxis:l,inclination:x,longitudeOfAscendingNode:v,argumentOfPeriapsis:y,trueAnomaly:I}),a(0),O(0),h(0),A(0),S(0),k(0)},children:"Create"}),children:[Object(b.jsx)(j.a,{addonBefore:"Eccentricity",value:c,onChange:function(e){return a(w(e.target.value))}}),Object(b.jsx)(j.a,{addonBefore:"Semimajor Axis",value:l,onChange:function(e){return O(w(e.target.value))}}),Object(b.jsx)(j.a,{addonBefore:"Inclination",value:x,onChange:function(e){return h(w(e.target.value))}}),Object(b.jsx)(j.a,{addonBefore:"Long. of Acend.",value:v,onChange:function(e){return A(w(e.target.value))}}),Object(b.jsx)(j.a,{addonBefore:"Arg. of Peri.",value:y,onChange:function(e){return S(w(e.target.value))}}),Object(b.jsx)(j.a,{addonBefore:"True Anomaly",value:I,onChange:function(e){return k(w(e.target.value))}})]})},l=function(e){var t=e.id,n=e.orbit,i=e.rmOrbitFn;return Object(b.jsxs)(u.a,{size:"small",title:"Orbit",style:{width:300},extra:Object(b.jsx)("a",{onClick:function(){i(t)},children:"Delete"}),children:[Object(b.jsxs)("p",{children:[" Eccentricity ",n.eccentricity," "]}),Object(b.jsxs)("p",{children:[" Semimajor Axis ",n.semimajorAxis," "]}),Object(b.jsxs)("p",{children:[" Inclination ",n.inclination," "]}),Object(b.jsxs)("p",{children:[" Longitude of Ascending Node ",n.longitudeOfAscendingNode," "]}),Object(b.jsxs)("p",{children:[" Argument of Periapsis ",n.argumentOfPeriapsis," "]}),Object(b.jsxs)("p",{children:[" True Anomaly ",n.trueAnomaly," "]})]})},O=function(e){var t=e.orbits,n=e.addOrbitFn,i=e.rmOrbitFn;return Object(b.jsxs)("div",{children:[t.map((function(e){return Object(b.jsx)(l,{id:e.id,orbit:e.orbit,rmOrbitFn:i})})),Object(b.jsx)(d,{addOrbitFn:n})]})},f=n(77);var g=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(b.jsx)("div",{children:Object(b.jsx)(O,{orbits:n,addOrbitFn:function(e){r([].concat(Object(o.a)(n),[{id:Object(f.a)(),orbit:e}]))},rmOrbitFn:function(e){r(n.filter((function(t){return t.id!==e})))}})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),x(console.log)}},[[71,1,2]]]);
//# sourceMappingURL=main.826d9569.chunk.js.map