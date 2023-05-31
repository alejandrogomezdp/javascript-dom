// 2. Selecting Elements in JavaScript DOM
let nav = document.querySelector("nav");
console.log(nav);

let active = document.querySelector(".active");
console.log(active);

let first = document.querySelector("#first");
console.log(first);

let headerAndParagraphs = document.querySelectorAll("h1, p");
console.log(headerAndParagraphs[0].innerHTML);

//Previous Sibling siguiente hacia arriba.
//Next Sibling siguiente hacia abajo.

firstLi = document.querySelector("h1");
console.log(firstLi);

let header = document.querySelector("header");
console.log(header);
console.log(header.children);
console.log(header.childNodes);

let navigation = document.querySelector("nav");
console.log(nav.firstElementChild); // Escoje la selección completa de la etiqueta.

let lastLi = document.querySelector("li:last-child");
console.log(lastLi); // Escoje el último li de la lista.

let h1 = document.querySelector("h1");
console.log(h1.nextElementSibling); // Escoje el siguiente elemento.

let ultimo = document.body.lastElementChild;
console.log(ultimo); // Escoje el último elemento del body (body no necesita QuerySelector).

let lastlist = document.querySelector("ul")
console.log(lastlist.lastElementChild); // Escoje el último elemento de la lista.
console.log(lastlist.children[0].children[0].nodeValue); // Escoje el último elemento de la lista.
console.log(lastlist.childElementCount); // Cuenta los elementos de la lista.   
console.log(lastlist.childNodes); // Cuenta los elementos de la lista.

console.log(nav.nodeName); // Muestra el nombre de la etiqueta.
