(this["webpackJsonpmimiexplorer-app"]=this["webpackJsonpmimiexplorer-app"]||[]).push([[0],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},115:function(e,n,t){e.exports=t(116)},116:function(e,n,t){"use strict";t.r(n),function(e){var n=t(91),r=t(6),a=t.n(r),i=t(33),c=t.n(i),o=(t(154),t(97)),l=t(103);c.a.render(a.a.createElement(o.a,null),document.getElementById("root")),l.a(),e.display=function(e){Object(n.default)("#vis",e.VLspec,{actions:!1})}}.call(this,t(65))},154:function(e,n,t){},155:function(e,n,t){},97:function(e,n,t){"use strict";var r=t(6),a=t.n(r),i=(t(155),t(98));n.a=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,{id:"variablelist",name:"Values"}),a.a.createElement("div",{id:"vis",className:"graphic"}))}},98:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return m}));var r=t(4),a=t(7),i=t(8),c=t(6),o=t.n(c),l=t(162),s=t(163),u=t(160),d=t(161),m=function(n){Object(a.a)(c,n);var t=Object(i.a)(c);function c(n){var a;return Object(r.a)(this,c),(a=t.call(this,n)).renderTree=function(e){return console.dir("renderTree called with ".concat(JSON.stringify(e))),null!==e&&Array.isArray(e)&&0!==e.length?(console.dir("renderTree actually renders something"),e.map((function(e){return o.a.createElement(l.a,{key:e.id,nodeId:e.id,label:e.name},a.renderTree(e.children))}))):o.a.createElement("div",null)},a.setTreeChildren=function(e){return null},a.render=function(){return o.a.createElement(s.a,{className:"classes.root",defaultCollapseIcon:o.a.createElement(u.a,null),defaultExpanded:["root"],defaultExpandIcon:o.a.createElement(d.a,null)},a.renderTree(a.state.children))},a.state={id:n.id,name:n.name,children:new Array},e.setTreeChildren=a.setTreeChildren,a}return c}(o.a.Component);m.defaultProps={id:"",name:"",children:new Array}}).call(this,t(65))}},[[115,1,2]]]);
//# sourceMappingURL=main.a85b0594.chunk.js.map