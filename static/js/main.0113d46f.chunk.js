(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),c=s.n(r),i=s(5),o=s(6),a=s(9),l=s(7),u=s(8),h=s(2),b=s.n(h),d=s(1),p=(s(14),s(15),s(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var y=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlph=function(){t.setState({sortType:n.ALPABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=this.sortByAlph,c=this.sortByLength,i=this.reverse,o=this.reset,a=function(t,e){var s=e.sortType,r=e.isReversed,c=Object(u.a)(t);return c.sort((function(t,e){switch(s){case n.ALPABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}(j,{sortType:s,isReversed:e});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":s!==n.ALPABET}),onClick:r,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":s!==n.LENGTH}),onClick:c,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!1===e}),onClick:i,children:"Reverse"}),(s!==n.NONE||!1!==e)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:o,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:a.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(d.Component);c.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0113d46f.chunk.js.map