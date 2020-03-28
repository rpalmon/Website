(this.webpackJsonpchatroom=this.webpackJsonpchatroom||[]).push([[0],{236:function(e,t,a){e.exports=a(863)},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},254:function(e,t,a){},854:function(e,t,a){},855:function(e,t,a){},856:function(e,t,a){},863:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(230),i=a.n(o),c=(a(241),a(23)),r=a(24),l=a(29),u=a(28),h=a(30),d=(a(242),a(233)),g=a(48),m=(a(243),a(105)),p=a.n(m),f=new(function(){function e(){Object(c.a)(this,e),this.Code="",this.User="",this.JoC="",console.dir(this)}return Object(r.a)(e,[{key:"saveData",value:function(){localStorage.setItem("Data",JSON.stringify({User:this.User}))}},{key:"loadData",value:function(){return{Code:this.Code,User:this.User,JoC:this.JoC}}},{key:"setData",value:function(e,t){this.Code=e,this.User=t}},{key:"setCode",value:function(e){this.Code=e}},{key:"setUser",value:function(e){this.User=e}},{key:"getCode",get:function(){return this.Code}},{key:"getUser",get:function(){return this.User}},{key:"getData",get:function(){return{Code:this.Code,User:this.User}}}]),e}());a(253);p.a.initializeApp({apiKey:"AIzaSyARoXtJEIlDaKw966uNhUx0mPYcNGqvmBA",authDomain:"chat-application-564d6.firebaseapp.com",databaseURL:"https://chat-application-564d6.firebaseio.com",projectId:"chat-application-564d6",storageBucket:"chat-application-564d6.appspot.com",messagingSenderId:"725451449206",appId:"1:725451449206:web:87ea66422071f65c209057",measurementId:"G-NHSTVF6FRZ"});var v=p.a.firestore(),C=a(46),b=(a(254),a(255),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state=a.props,a.userIsSender=a.userIsSender.bind(Object(C.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"removeItem",value:function(){for(var e=JSON.parse(localStorage.getItem("msg")),t=0;t<e.length;t++)e[t].ID===this.props.ID&&e.splice(t,1);console.dir(e),v.collection("Rooms").doc("Chat").update({Messages:e})}},{key:"componentDidMount",value:function(){var e=this;v.collection("Rooms").doc("Chat").onSnapshot((function(t){e.forceUpdate()}))}},{key:"handleClick",value:function(){console.log("Chat",this.props.ID)}},{key:"userIsSender",value:function(e){return e===localStorage.getItem("User")?"Sender":"Admin"===e?"Admin":"Receiver"}},{key:"render",value:function(){return s.a.createElement("div",{id:"Container",onClick:this.handleClick.bind(this)},s.a.createElement("div",{id:"User",className:this.userIsSender(this.props.User)},this.props.User),s.a.createElement("div",{id:"msg"},this.props.Message),this.props.User===localStorage.getItem("User")&&s.a.createElement("button",{id:"delete",onClick:this.removeItem.bind(this)},"Delete"),s.a.createElement("br",null))}}]),t}(n.Component)),y=(a(854),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).postMessage=function(e,t){var n={Message:t,User:e,ID:Math.floor(9999999*Math.random())};a.state.DB.get().then((function(e){var t=e.data().Messages;t.push(n),a.state.DB.update({Messages:t})})),document.getElementById("messageB").value=""},a.state={Message:"",User:localStorage.getItem("User"),DB:v.collection("Rooms").doc("Chat")},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleTextChange",value:function(e){this.setState({Message:e.target.value})}},{key:"handleSubmit",value:function(){console.log(this.state),this.postMessage(this.state.User,this.state.Message)}},{key:"triggerTyping",value:function(){var e=!0;setTimeout((function(){e=!1,v.collection("Rooms").doc("Chat").update({typing:{typing:e,User:localStorage.getItem("User")}}),console.log("finished")}),5e3),e&&(v.collection("Rooms").doc("Chat").update({typing:{typing:e,User:this.state.User}}),console.log("typing"))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container",onChange:this.triggerTyping.bind(this)},s.a.createElement("textarea",{id:"messageB",onChange:this.handleTextChange.bind(this)}),s.a.createElement("button",{onClick:this.handleSubmit.bind(this)},"Send"))}}]),t}(n.Component)),U=(a(855),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).postMessage=function(e,t){var n={Message:t,User:e};a.state.DB.get().then((function(e){var t=e.data().Messages;t.push(n),a.state.DB.update({Messages:t})}))},a.postMessage=a.postMessage.bind(Object(C.a)(a)),a.state={DB:v.collection("Rooms").doc("Chat"),typing:!1,Typer:""},a.state.DB.onSnapshot((function(e){console.log(e.data().typing),a.setState({typing:e.data().typing.typing}),a.setState({Typer:e.data().typing.User})})),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"clearChat",value:function(){v.collection("Rooms").doc("Chat").set({Messages:[]})}},{key:"logOut",value:function(){setTimeout(this.postMessage("Admin","".concat(localStorage.getItem("User")," has left the chat")),1e3),localStorage.setItem("User",null),window.location.pathname=""}},{key:"render",value:function(){return s.a.createElement("div",{className:"TopBox"},s.a.createElement("div",{id:"typing"},this.state.typing?"".concat(this.state.Typer," is typing"):""),"Roee"===localStorage.getItem("User")?s.a.createElement("button",{id:"clearchat",onClick:this.clearChat.bind(this)},"Clear Chat"):"",s.a.createElement("button",{id:"logout",onClick:this.logOut.bind(this)},"Log Out"))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).postMessage=function(e,t,n){Math.floor(9999999*Math.random());var s={Message:t,User:e,ID:n};a.state.DB.get().then((function(e){var t=e.data().Messages;t.push(s),a.state.DB.update({Messages:t})})),localStorage.setItem("msg",JSON.stringify(a.state.Chat))},a.state={Code:"Chat",Chat:[],DB:v.collection("Rooms").doc("Chat")},console.dir(f.loadData()),a.state.DB.onSnapshot((function(e){var t=e.data().Messages;a.setState({Chat:t}),console.dir(a.state);var n=document.getElementById("style-3");n.scrollTop=n.scrollHeight})),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.DB.get().then((function(t){console.dir(t.data()),e.setState({Chat:t.data().Messages}),localStorage.setItem("msg",JSON.stringify(e.state.Chat)),e.forceUpdate()}))}},{key:"render",value:function(){return localStorage.setItem("msg",JSON.stringify(this.state.Chat)),s.a.createElement("div",null,s.a.createElement("div",{className:"Top"},s.a.createElement(U,null)),s.a.createElement("div",{className:"Chat",id:"style-3"},this.state.Chat.map((function(e){return s.a.createElement(b,{Message:e.Message,User:e.User,ID:e.ID})}))),s.a.createElement("div",{className:"Box"},s.a.createElement(y,null)))}}]),t}(s.a.Component),S=a(231),k=(a(856),a(864)),M=a(865),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).postMessage=function(e,t){var n={Message:t,User:e};a.state.DB.collection("Rooms").doc("Chat").get().then((function(e){var t=e.data().Messages;t.push(n),a.state.DB.update({Messages:t})}))},a.state={Data:e.Data,Code:"",User:"",DB:v.collection("Rooms").doc("Chat")},a.postMessage=a.postMessage.bind(Object(C.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"onChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"StartChat",value:function(e){"Join"===e.target.name&&(console.log("Join"),localStorage.setItem("User",this.state.User)),console.dir(this.state),window.location.pathname="/chat"}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(k.a,{onSubmit:this.StartChat.bind(this),onChange:this.onChange.bind(this),className:"Main"},s.a.createElement(k.a.Control,{className:"User",name:"User",placeholder:"Username"}),s.a.createElement("br",null),s.a.createElement(M.a,{className:"Button",onClick:this.StartChat.bind(this),name:"Join"},"Join")))}}]),t}(s.a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement(g.c,null,s.a.createElement(g.a,{exact:!0,path:"/",component:function(){return s.a.createElement(j,{Data:f})}}),s.a.createElement(g.a,{exact:!0,path:"/chat",component:function(){return s.a.createElement(O,{Data:f})}}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[236,1,2]]]);
//# sourceMappingURL=main.8fbac578.chunk.js.map