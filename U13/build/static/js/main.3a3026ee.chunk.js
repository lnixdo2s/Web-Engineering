(this["webpackJsonpu13-app"]=this["webpackJsonpu13-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"name":"Alan Turing","password":"1337at$","desc":"was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/330px-Alan_Turing_Aged_16.jpg"},{"name":"Katherine Johnson","password":"abcdef$","desc":"was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/330px-Katherine_Johnson_1983.jpg"},{"name":"Heinz Nixdorf","password":"abcdef$","desc":"was a German computing pioneer, businessman and founder of Nixdorf Computer AG.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/NIXDORF_SW.jpg/330px-NIXDORF_SW.jpg"},{"name":"Grace Hopper","password":"abcdef$","desc":"was an American computer scientist and United States Navy rear admiral.","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/330px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"}]')},function(e,a,t){},,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(9),r=t.n(s),o=(t(15),t(1)),c=t(2),l=t(5),m=t(4),d=t(3),u=(t(7),t(6)),p=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={value:""},n.handleChangeName=n.handleChangeName.bind(Object(l.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(t,[{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this,t=!1;u.forEach((function(e){a.state.name===e.name&&a.state.password===e.password&&(a.props.onLogin(),t=!0)})),t||alert('Password was wrong! Try: "'+u[0].name+'" and "'+u[0].password+'" !')}},{key:"render",value:function(){return i.a.createElement("div",{className:"login"},i.a.createElement("h1",null," ",this.props.name),i.a.createElement("div",{className:"form"},i.a.createElement("label",null,"Nutzername "),i.a.createElement("input",{type:"text",name:"Nutzername",value:this.state.name,onChange:this.handleChangeName}),i.a.createElement("label",null,"Passwort "),i.a.createElement("input",{type:"password",name:"Passwort",value:this.state.password,onChange:this.handleChangePassword}),i.a.createElement("button",{name:"Login",onClick:this.handleSubmit},"Login")))}}]),t}(i.a.Component),h=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"List"},i.a.createElement("ul",null,u.map((function(e){return i.a.createElement("li",null,i.a.createElement("div",null,"Name: ",e.name),i.a.createElement("div",null,"Description: ",e.desc),i.a.createElement("img",{src:e.image,alt:e.name}))}))))}}]),t}(i.a.Component),g=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isLoggedIn:!1},n}return Object(c.a)(t,[{key:"onLogin",value:function(e){this.setState({isLoggedIn:!0})}},{key:"render",value:function(){return this.state.isLoggedIn?i.a.createElement("div",{className:"home"},i.a.createElement(h,null)):i.a.createElement("div",{className:"home"},i.a.createElement(p,{onLogin:this.onLogin.bind(this)}))}}]),t}(i.a.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.3a3026ee.chunk.js.map