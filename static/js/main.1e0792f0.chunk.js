(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(8),r=a.n(c),i=(a(16),a(11)),o=a(3),l=a(4),d=a(2),j=a(6),b=a(5),h=(a(17),a(9)),m=a(10),u=a(0),p=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={title:"",responsable:"",description:"",priority:"low"},e.handleInput=e.handleInput.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"handleInput",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(m.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTodo(this.state),console.log("sendig data...")}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"card mt-4",children:Object(u.jsxs)("form",{className:"card-body",onSubmit:this.handleSubmit,children:[Object(u.jsx)("div",{className:"form-group m-1",children:Object(u.jsx)("input",{type:"text",name:"title",onChange:this.handleInput,className:"form-control",placeholder:"title"})}),Object(u.jsx)("div",{className:"form-group m-1",children:Object(u.jsx)("input",{type:"text",name:"responsable",onChange:this.handleInput,className:"form-control",placeholder:"Responsable"})}),Object(u.jsx)("div",{className:"form-group m-1",children:Object(u.jsx)("input",{type:"text",name:"description",onChange:this.handleInput,className:"form-control",placeholder:"description"})}),Object(u.jsx)("div",{className:"form-group m-2",children:Object(u.jsxs)("select",{name:"priority",className:"form-control",onChange:this.handleInput,children:[Object(u.jsx)("option",{children:"Low"}),Object(u.jsx)("option",{children:"Medium"}),Object(u.jsx)("option",{children:"High"})]})}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})}}]),a}(n.Component),O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={todos:h.a},e.agregarTarea=e.agregarTarea.bind(Object(d.a)(e)),e}return Object(l.a)(a,[{key:"agregarTarea",value:function(e){this.setState({todos:[].concat(Object(i.a)(this.state.todos),[e])})}},{key:"borrarTarea",value:function(e){this.setState({todos:this.state.todos.filter((function(t,a){return a!==e}))})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t,a){return Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsxs)("div",{className:"card mt-4",children:[Object(u.jsxs)("div",{className:"card-header",children:[Object(u.jsx)("h3",{children:t.title}),Object(u.jsx)("span",{className:"badge bg-danger badge-pill ml-2",children:t.priority})]}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{children:t.description}),Object(u.jsx)("p",{children:t.responsable})]}),Object(u.jsx)("div",{className:"card-footer",children:Object(u.jsx)("button",{className:"btn btn-danger",onClick:e.borrarTarea.bind(e,a),children:"Borrar"})})]})})}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(u.jsxs)("a",{href:"#",className:"text-white",children:["Asks",Object(u.jsx)("span",{className:"badge badge-pill",children:this.state.todos.length})]})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row m-t4",children:[Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)(p,{onAddTodo:this.agregarTarea})}),Object(u.jsx)("div",{className:"col-md-9",children:Object(u.jsx)("div",{className:"row",children:t})})]})})]})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()},9:function(e){e.exports=JSON.parse('{"a":[]}')}},[[19,1,2]]]);
//# sourceMappingURL=main.1e0792f0.chunk.js.map