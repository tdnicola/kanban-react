(this["webpackJsonpkanban-react"]=this["webpackJsonpkanban-react"]||[]).push([[0],[,,,,,function(e,a,n){e.exports=n(12)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(4),l=n.n(o),c=(n(10),n(2)),i=n(1),s=function(e){var a=e.card,n=e.cardIndex,t=e.onDragStart,o=e.columnIndex,l=e.deleteTask;return r.a.createElement("div",{className:"card",draggable:!0,onDragStart:function(e){return t(e,a.name,n,o)}},r.a.createElement("span",{className:"title"},a.name),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(e){return l(e,o,n)},className:"btn deleteTaskButton"},"X")))},u=function(e){var a=e.createNewTask,n=e.onChange,t=e.columnIndex,o=e.input;return r.a.createElement("div",{className:"addTask"},r.a.createElement("input",{className:t,onChange:n,value:o,placeholder:"New Task"}),r.a.createElement("button",{className:"addTaskButton btn",onClick:function(e){return a(e,t)}},">"))},m=function(e){var a=e.column,n=e.columnIndex,t=e.onDragStart,o=e.onDragOver,l=e.onDrop,c=e.deleteColumn,i=e.createNewTask,m=e.onChange,d=e.input,g=e.deleteTask;return r.a.createElement("div",{className:"column",onDragOver:function(e){return o(e)},onDrop:function(e){return l(e,a.name,n)}},r.a.createElement("h2",null,a.name,r.a.createElement("button",{className:"btn deleteButton",onClick:function(e){return c(e,n)}},"X")),a.cards.map((function(e,a){return r.a.createElement(s,{card:e,cardIndex:a,columnIndex:n,onDragStart:t,key:e.name,deleteTask:g})})),r.a.createElement(u,{createNewTask:i,onChange:m,columnIndex:n,input:d}))},d=function(e){var a=e.toggleLogin,n=e.toggleRegistrationView;return r.a.createElement("div",{className:"loginView"},r.a.createElement("div",{className:"informationView"},r.a.createElement("h2",null,"Why Register? Because Below homie"),"Yar Pirate Ipsum Long boat flogging ballast bring a spring upon her cable belay grog blossom no prey, no pay topgallant nipperkin overhaul. Fathom killick hands heave to Chain Shot spyglass matey cog yardarm snow. Lugger heave down sloop prow hempen halter warp jib hardtack careen dead men tell no tales. Cog draft careen line provost cable splice the main brace spanker black spot grog blossom. No prey, no pay fire in the hole gunwalls starboard yardarm ballast grog blossom Buccaneer marooned gally. Strike colors smartly spike galleon warp lookout yawl bilge schooner ho."),r.a.createElement("div",{className:"credentials"},r.a.createElement("input",{placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"password"}),r.a.createElement("br",null),"Please Login or Register",r.a.createElement("button",{onClick:function(e){return a(e)}},"Login"),r.a.createElement("button",{onClick:function(e){return n(e)}},"Register")))},g=function(e){var a=e.toggleLogin,n=e.registrationView,t=e.toggleRegistrationView;return r.a.createElement("div",{className:"loginRegistrationView"},!n&&r.a.createElement("div",{className:"loginView"},r.a.createElement("div",{className:"informationView"},"Paroxysm of global death take root and flourish finite but unbounded worldlets circumnavigated rich in mystery. Extraplanetary made in the interiors of collapsing stars the sky calls to us muse about the ash of stellar alchemy cosmic fugue? Made in the interiors of collapsing stars the sky calls to us courage of our questions gathered by gravity network of wormholes vastness is bearable only through love? Kindling the energy hidden in matter the sky calls to us something incredible is waiting to be known descended from astronomers dispassionate extraterrestrial observer kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions."),r.a.createElement("div",{className:"credentials"},r.a.createElement("input",{placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"password"}),r.a.createElement("br",null),"Please Login or Register",r.a.createElement("button",{onClick:function(e){return a(e)}},"Login"),r.a.createElement("button",{onClick:function(e){return t(e)}},"Register"))),n&&r.a.createElement(d,{toggleLogin:a,toggleRegistrationView:t}))},p=function(e){var a=e.createNewColumn,n=e.toggleAddColumn,t=e.addNewColumnModal,o=e.onChange;return r.a.createElement("div",{className:"addTask"},r.a.createElement("button",{className:"btn addColumnButton",onClick:function(e){return n(e)}},"Add Column"),r.a.createElement("div",{className:"newTasks"},t&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-main"},"column testing",r.a.createElement("input",{onChange:o,placeholder:"New Task"}),r.a.createElement("button",{onClick:function(e){return a(e)}},"Add New Column"),r.a.createElement("button",{onClick:function(e){return n(e)}},"Close")))))};n(11);var b=function(){var e=Object(t.useState)([{name:"ToDo",cards:[{name:"card a"},{name:"card d"},{name:"card e"}]},{name:"InProgress",cards:[{name:"card b"}]},{name:"Completed",cards:[{name:"card c"}]}]),a=Object(i.a)(e,2),n=a[0],o=a[1],l=Object(t.useState)(!0),s=Object(i.a)(l,2),u=s[0],d=s[1],b=Object(t.useState)(!1),f=Object(i.a)(b,2),h=f[0],v=f[1],k=Object(t.useState)(!1),E=Object(i.a)(k,2),w=E[0],C=E[1],N=Object(t.useState)(!1),y=Object(i.a)(N,2),D=y[0],T=y[1],x=Object(t.useState)(""),I=Object(i.a)(x,2),O=I[0],j=I[1],S=function(e){e.preventDefault(),C(!w)},V=function(e){e.preventDefault(),T(!D)},B=function(e,a,n,t){e.dataTransfer.setData("id",a),e.dataTransfer.setData("cardIndex",n),e.dataTransfer.setData("startingColumnIndex",t),console.log("start ColumnIndex:"+t)},L=function(e){e.preventDefault()},R=function(e){j(e.currentTarget.value)},A=function(e,a){e.preventDefault();var t={name:O,key:O};n[a].cards.push(t),S(e),j(""),console.log(O)},P=function(e,a,t){e.preventDefault(),n[a].cards.splice(t,1),o(Object(c.a)(n))},M=function(e,a){e.preventDefault(),n.splice(a,1),o(Object(c.a)(n))},W=function(e,a,t){var r=e.dataTransfer.getData("id"),l=e.dataTransfer.getData("cardIndex"),i=e.dataTransfer.getData("startingColumnIndex"),s={name:r,key:r,cardIndex:l};n[i].cards.splice(l,1),n[t].cards.push(s),o(Object(c.a)(n))};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"The Kanban Board!"),!u&&r.a.createElement(g,{toggleLogin:function(e){e.preventDefault(),d(!u)},registrationView:h,toggleRegistrationView:function(e){e.preventDefault(),v(!h)}}),u&&r.a.createElement("div",{className:"loggedIn"},r.a.createElement(p,{toggleAddColumn:V,addNewColumnModal:D,createNewColumn:function(e){e.preventDefault();var a={name:O,cards:[]};n.push(a),V(e)},onChange:R}),r.a.createElement("div",{className:"columnGrid"},n.map((function(e,a){return r.a.createElement(m,{onDrop:W,column:e,columnIndex:a,onDragStart:B,onDragOver:L,toggleModalAddTaskClick:S,deleteColumn:M,createNewTask:A,onChange:R,input:O,deleteTask:P})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.3693f9da.chunk.js.map