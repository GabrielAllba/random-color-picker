(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],{16:function(t,e,o){"use strict";o.r(e);var n=o(2),r=o(3),i=o(4),c=o(6),a=o(5),s=o(1),l=o.n(s),u=o(10),h=o.n(u),p=(o(8),o(9),o(0)),f=function(t){Object(c.a)(o,t);var e=Object(a.a)(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return Object(p.jsx)("button",{className:this.props.light?"light-button":"dark-button",onClick:this.props.onClick,children:"Refresh"})}}]),o}(l.a.Component),b=function(t){Object(c.a)(o,t);var e=Object(a.a)(o);function o(t){var r;return Object(n.a)(this,o),(r=e.call(this,t)).state={color:[50,50,34]},r.handleClick=r.handleClick.bind(Object(i.a)(r)),r}return Object(r.a)(o,[{key:"formatColor",value:function(t){return"rgb("+t.join(", ")+")"}},{key:"applyColor",value:function(){var t=this.formatColor(this.state.color);document.body.style.background=t}},{key:"isLight",value:function(){return this.state.color.reduce((function(t,e){return t+e}))<381}},{key:"chooseColor",value:function(){for(var t=[],e=0;e<3;e++)t.push(Math.floor(256*Math.random()));return t}},{key:"handleClick",value:function(){this.setState({color:this.chooseColor()})}},{key:"render",value:function(){var t=this.formatColor(this.state.color);return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{className:this.isLight()?"white":"black",children:["Your color is ",t]}),Object(p.jsx)(f,{light:this.isLight(),onClick:this.handleClick})]})}},{key:"componentDidMount",value:function(){this.applyColor()}},{key:"componentDidUpdate",value:function(){this.applyColor()}}]),o}(l.a.Component);h.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))},8:function(t,e,o){},9:function(t,e,o){}},[[16,1,2]]]);
//# sourceMappingURL=main.5fc3d78a.chunk.js.map