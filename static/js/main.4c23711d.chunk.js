(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),i=a(6),r=a(7),c=a(2),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),d=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],u=a(9),m=a.n(u),h=(a(15),a(0)),p=function(e){var t=e.user;return Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)("h2",{className:"user__title",children:t.name}),Object(h.jsx)("a",{className:"user__email",href:"mailto:".concat(t.email),children:t.email})]})},b=(a(17),function(e){var t=e.todo;return Object(h.jsxs)("div",{className:"todo",children:[t.user&&Object(h.jsx)(p,{user:t.user}),Object(h.jsx)("h2",{className:"todo__title",children:t.title}),Object(h.jsx)("p",{className:"todo__status",children:t.completed?"Is done":"in progress"})]})}),j=(a(18),function(e){var t=e.todos;return Object(h.jsx)("ul",{className:"list",children:t.map((function(e){return Object(h.jsx)("li",{className:m()("list__item",{"list__item--not-ready":!e.completed}),children:Object(h.jsx)(b,{todo:e})},e.id)}))})}),g=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(o.useState)(""),u=Object(c.a)(s,2),m=u[0],p=u[1],b=Object(o.useState)(""),g=Object(c.a)(b,2),y=g[0],f=g[1],O=Object(o.useState)(""),x=Object(c.a)(O,2),_=x[0],v=x[1],S=Object(o.useState)(d),w=Object(c.a)(S,2),k=w[0],N=w[1],C=l.find((function(e){return e.name===m})),z=k.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))||null})}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App__title",children:"Add todo form"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"App__form",children:[Object(h.jsx)("input",{type:"text",name:"title",className:"input App__input",value:a,placeholder:"Enter the title, please",onChange:function(e){var t=e.target;return n(t.value)}}),Object(h.jsx)("div",{className:"App__error-container",children:Object(h.jsx)("p",{className:"App__error App__error--title",children:_})}),Object(h.jsxs)("select",{name:"users",className:"select",value:m,onChange:function(e){var t=e.target;return p(t.value)},children:[Object(h.jsx)("option",{value:"",disabled:!0,children:"Choose a name"}),Object(i.a)(new Array(l.length)).map((function(e,t){return Object(h.jsx)("option",{value:l[t].name,children:l[t].name},l[t].id)}))]}),Object(h.jsx)("div",{className:"App__error-container",children:Object(h.jsx)("p",{className:"App__error",children:y})}),Object(h.jsx)("button",{type:"submit",className:"button is-primary",onClick:function(){C&&a&&N([].concat(Object(i.a)(z),[{userId:C.id,id:k.length+1,title:a,completed:!1}])),0===a.length?v("Please enter the title"):v(""),0===m.length?f("Please choose a user"):f(""),m&&p(""),a&&n("")},children:"Add"})]}),Object(h.jsxs)("p",{className:"App__task-counter",children:[Object(h.jsx)("span",{children:"Tasks left to do: "}),k.length]}),Object(h.jsx)(j,{todos:z})]})};s.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4c23711d.chunk.js.map