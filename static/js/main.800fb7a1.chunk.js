(this["webpackJsonpdemo-tdd"]=this["webpackJsonpdemo-tdd"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(4),r=a.n(n),l=a(2),d=(a(9),a(0)),i=function(){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("h5",{className:"navbar-brand",children:"HTTP States"})})})},j=function(e){var t=e.status;return Object(d.jsxs)("div",{className:"card my-3 p-4",children:[Object(d.jsx)("img",{src:"https://http.cat/".concat(t),alt:"Cat Status"}),Object(d.jsxs)("h4",{className:"text-center my-3",children:["Status ",t]})]})},b=function(e){var t=e.setStatus,a=Object(s.useState)(""),c=Object(l.a)(a,2),n=c[0],r=c[1],i=Object(s.useState)(!0),j=Object(l.a)(i,2),b=j[0],o=j[1];return Object(d.jsx)("div",{className:"card text-white bg-dark my-3 p-3",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),n.match(/^[0-9]{3}$/)?(o(!0),t(n),r("")):o(!1)},children:[Object(d.jsx)("h4",{className:"card-title text-center",children:"B\xfasqueda de status"}),Object(d.jsxs)("div",{className:"form-group my-4",children:[Object(d.jsx)("label",{className:"form-label",htmlFor:"status",children:"Status (3 d\xedgitos)"}),Object(d.jsx)("input",{id:"status",className:"form-control",type:"number",placeholder:"Ingrese el status...",value:n,onChange:function(e){r(e.currentTarget.value),o(!0)}}),Object(d.jsx)("div",{style:{display:b?"none":"block"},className:"invalid-feedback",children:"El n\xfamero ingresado debe estar en el formato especificado"})]}),Object(d.jsx)("button",{className:"btn btn-primary w-100",type:"submit",children:"Mostrar"})]})})})};var o=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("aside",{className:"col-12 col-md-5",children:Object(d.jsx)(b,{setStatus:c})}),Object(d.jsx)("main",{className:"col-12 col-md-7",children:Object(d.jsx)(j,{status:a})})]})})]})};a(11);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(o,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.800fb7a1.chunk.js.map