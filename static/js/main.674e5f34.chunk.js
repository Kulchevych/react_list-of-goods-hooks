(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(4),o=n.n(c),r=n(2),s=n(1),a=(n(9),n(0)),i=function(t){var e=t.good;return Object(a.jsx)("li",{className:"Goods__item",children:e})},l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=Object(s.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(s.useState)("none"),u=Object(r.a)(o,2),b=u[0],j=u[1],h=[].concat(l);h.sort((function(t,e){switch(b){case"alph":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),n&&h.reverse();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",onClick:function(){c(!1),j("alph")},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",onClick:function(){c(!1),j("length")},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",onClick:function(){c(!n)},children:"Reverse"}),Object(a.jsx)("button",{type:"button",onClick:function(){c(!1),j("none")},children:"Reset"}),Object(a.jsx)("ul",{className:"Goods",children:h.map((function(t){return Object(a.jsx)(i,{good:t},t)}))})]})},b=function(){var t=Object(s.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(a.jsx)("div",{className:"App",children:n?Object(a.jsx)(u,{}):Object(a.jsx)("button",{type:"button",onClick:function(){c(!0)},children:"Start"})})};o.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.674e5f34.chunk.js.map