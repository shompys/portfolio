(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c(1),s=c.n(i),n=c(5),o=c.n(n),r=(c(22),c(23),c(12)),d=c(42),l=c(16),m=(c(34),c.p+"static/media/home.fa65a591.svg"),j=c.p+"static/media/contact.e747065b.svg",b={home:m,about:c.p+"static/media/about-me.018bbe7e.svg",conocimiento:c.p+"static/media/conocimiento.956454e7.svg",code:c.p+"static/media/code.fd990bab.svg",contact:j,linkedin:c.p+"static/media/linkedin.022923a2.svg",github:c.p+"static/media/github.1e1f6991.svg",html5:c.p+"static/media/html5-brands.b0be280a.svg",css3:c.p+"static/media/css3-alt-brands.81a64fbd.svg",js:c.p+"static/media/js-square-brands.fedf7539.svg",node:c.p+"static/media/node-brands.7d9ce7f8.svg",php:c.p+"static/media/php-brands.b8779c19.svg",database:c.p+"static/media/database-solid.f489c9f8.svg",react:c.p+"static/media/react-brands.8f10abb0.svg",npm:c.p+"static/media/npm-brands.972145a7.svg"},u=function(){var e=[{id:Object(d.a)(),src:b.home,alt:"home",item:"Inicio",className:" nav-options fix-end"},{id:Object(d.a)(),src:b.about,alt:"about me",item:"Sobre m\xed",className:" nav-options"},{id:Object(d.a)(),src:b.conocimiento,alt:"conocimientos",item:"Conocimientos",className:" nav-options"},{id:Object(d.a)(),src:b.code,alt:"code",item:"Proyectos",className:" nav-options"},{id:Object(d.a)(),src:b.contact,alt:"contact",item:"Contacto",className:" nav-options fix-start"}],t=s.a.useState(!1),c=Object(r.a)(t,2),i=c[0],n=c[1],o=s.a.useState(!1),m=Object(r.a)(o,2),j=m[0],u=m[1],f=function(){console.log("botoncito"),n(!i),u(!j)};return Object(a.jsxs)("header",{children:[Object(a.jsx)("div",{className:"toggle ".concat(i?"close":""),onClick:f,children:Object(a.jsx)("span",{})}),Object(a.jsx)("nav",{className:"nav ".concat(j?"show":""),children:e.map((function(e){return Object(a.jsxs)("div",{className:e.className,children:[Object(a.jsx)("img",{src:e.src,alt:e.alt}),Object(a.jsx)(l.Link,{className:"span",onClick:f,activeClass:"active",to:e.item,spy:!0,smooth:!0,offset:"Inicio"===e.item?0:120,duration:700,children:e.item})]},e.id)}))})]})},f=c.p+"static/media/human.628d4228.jpg",p=(c(35),function(){Object(i.useEffect)((function(){document.querySelector(".inicio-content").classList.add("opacity1")}));var e=[{id:Object(d.a)(),className:"i-linkedin",href:"https://www.linkedin.com/in/jonathangomezit/",src:b.linkedin,alt:"linkedin"},{id:Object(d.a)(),className:"i-github",href:"https://github.com/shompys",src:b.github,alt:"github"}];return Object(a.jsx)("section",{id:"Inicio",className:"inicio-section",children:Object(a.jsxs)("div",{className:"inicio-content",children:[Object(a.jsxs)("p",{className:"inicio-p",children:["Hola, me llamo Jonathan y quiero ser desarrollador web.",Object(a.jsx)("br",{}),"Front-end, back-end o full stack."]}),Object(a.jsx)("div",{className:"inicio-icons",children:e.map((function(e){return Object(a.jsx)("a",{className:e.className,href:e.href,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:e.src,alt:e.alt})},e.id)}))}),Object(a.jsx)("img",{className:"inicio-img",src:f,alt:"student"})]})})}),h=(c(36),function(){return Object(a.jsxs)("footer",{className:"footer-content",children:[Object(a.jsx)("span",{children:"Creditos del material usado para mi portfolio: "}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://www.freepik.es/vectores/cafe",children:"Vector de Caf\xe9 creado por catalyststuff - www.freepik.es"})]})}),O=(c(37),c(38),function(e){var t=e.src,c=e.alt,i=e.name;return Object(a.jsxs)("div",{className:"item-content effectScroll",children:[Object(a.jsx)("img",{src:t,alt:c}),Object(a.jsx)("span",{children:i})]})}),v=function(){var e=[{id:Object(d.a)(),src:b.html5,alt:"html",name:"HTML5"},{id:Object(d.a)(),src:b.css3,alt:"css3",name:"CSS3"},{id:Object(d.a)(),src:b.js,alt:"javaScript",name:"javaScript"},{id:Object(d.a)(),src:b.node,alt:"node",name:"NODE"},{id:Object(d.a)(),src:b.npm,alt:"npm",name:"NPM"},{id:Object(d.a)(),src:b.react,alt:"react",name:"REACT"},{id:Object(d.a)(),src:b.php,alt:"php",name:"PHP"},{id:Object(d.a)(),src:b.database,alt:"database",name:"MYSQL"}];return Object(a.jsxs)("section",{id:"Conocimientos",className:"conocimientos-section",children:[Object(a.jsx)("h1",{className:"effectScroll",children:"Conocimientos"}),Object(a.jsx)("div",{className:"conocimientos-content",children:e.map((function(e){return Object(a.jsx)(O,{src:e.src,alt:e.alt,name:e.name},e.id)}))})]})},x=(c(39),function(e){var t=e.title,c=e.info1;return Object(a.jsxs)("div",{className:"structure-content effectScroll",children:[Object(a.jsx)("h3",{className:"structure-h3",children:t}),Object(a.jsx)("p",{className:"structure-p",children:c})]})}),g=(c(40),function(){var e=[{id:Object(d.a)(),title:"An\xe1lista de Sistemas",info1:"Soy estudiante del Instituto de Formaci\xf3n T\xe9cnica Superior N\xb0 12, con fecha de finalizaci\xf3n estimada para el 21/12/2020 ."},{id:Object(d.a)(),title:"Futuro Licenciado en Gesti\xf3n de Tecnolog\xeda.",info1:"Continuar\xe9 mis estudios en la sede de la Universidad Nacional de la Matanza."},{id:Object(d.a)(),title:"\xbfDe donde soy?",info1:"Vivo en Argentina, Ciudad Aut\xf3noma de Buenos Aires."},{id:Object(d.a)(),title:"\xbfA qu\xe9 me dedico?",info1:"Trabajo en una cl\xednica, en el sector administrativo."},{id:Object(d.a)(),title:""}];return Object(a.jsxs)("section",{id:"Sobre m\xed",className:"sobreMi-section",children:[Object(a.jsx)("h1",{className:"effectScroll",children:"Sobre m\xed"}),Object(a.jsx)("div",{className:"sobreMi-content",children:e.map((function(e){return Object(a.jsx)(x,{title:e.title,info1:e.info1},e.id)}))})]})}),N=function(){Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){var e=document.querySelectorAll(".effectScroll"),t=document.documentElement.scrollTop,c=.9*window.innerHeight;e.forEach((function(e){e.offsetTop-c<t&&(e.style.opacity=1,e.classList.add("show-effect"))}))}))}))};var S=function(){return N(),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsx)(p,{}),Object(a.jsx)(g,{}),Object(a.jsx)(v,{}),Object(a.jsx)(h,{})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.850ea0d6.chunk.js.map