(this.webpackJsonpsnippitmaker=this.webpackJsonpsnippitmaker||[]).push([[0],{48:function(e,t,a){e.exports=a(60)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=(a(53),a(54),a(19)),o=a(20),u=a(23),m=a(24),s=a(37),d=(a(55),a(95)),h=a(96),b=a(89),E=a(90),f=a(91);function p(e,t,a){return'\n    "'.concat(e,'": {\n        "prefix": ').concat(t,',\n        "body": [\n            "').concat(a,'"\n        ]\n    }\n    ')}var v=a(56),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.state={Name:"",Prefix:"",Code:"",Result:""},n}return Object(o.a)(a,[{key:"handleClear",value:function(){this.setState({Name:"",Prefix:"",Code:""})}},{key:"handleCopy",value:function(){v(p(this.state.Name,this.state.Prefix,this.state.Code))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{onChange:this.handleChange.bind(this)},l.a.createElement(b.a,{fluid:!0},l.a.createElement(E.a,{id:"main"},l.a.createElement(f.a,null,l.a.createElement(E.a,null,l.a.createElement(d.a,{name:"Name",label:"Snippit Name",variant:"outlined"}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(E.a,null,l.a.createElement(d.a,{name:"Prefix",label:"Snippit Prefix",variant:"outlined"}),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(f.a,null,l.a.createElement(E.a,{className:"Copy"},l.a.createElement(h.a,{color:"primary",variant:"outlined",onClick:this.handleClear.bind(this)},"Clear")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,{className:"Copy"},l.a.createElement(h.a,{color:"primary",variant:"outlined",onClick:this.handleCopy.bind(this)},"Copy Result"))))),l.a.createElement("br",null),l.a.createElement(d.a,{multiline:!0,id:"outlined-basic",variant:"outlined",rows:20,fullWidth:!0,rowsMax:20,label:"Snippit Code",name:"Code"})),l.a.createElement("div",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,{multiline:!0,id:"outlined-basic",variant:"outlined",rows:20,disabled:!0,fullWidth:!0,rowsMax:20,label:"Result",name:"Code",value:p(this.state.Name,this.state.Prefix,this.state.Code)}))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(y,null))}}]),a}(n.Component);function k(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main"},l.a.createElement(j,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.935b58cc.chunk.js.map