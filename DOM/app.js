


/*
let elemento = document.title;



console.log(elemento);

let elementoW = window;

console.log(`ELEMENTO DE WINDOWS ${elementoW}`)
*/
/*
let elementoId = document.getElementById('tituloDOM');
console.log(elementoId);
*/
/*
let opId1 = document.getElementById('p1')
opId1.innerHTML = "JavaScrip";

let opId2 = document.getElementById('p2')
opId2.innerHTML = "Kotlin";

let opId3 = document.getElementById('p3')
opId3.innerHTML = "C++"
*/
/*
let elementoClase = document.getElementsByClassName('lista');
console.log(elementoClase);
*/
/*
let elementoTag = document.getElementsByTagName('h2');
console.log(elementoTag);
*/
/*
let elementoQ = document.querySelector('ul');
//console.log(elementoQ.childElementCount);
//console.log(elementoQ.children);

//console.log(elementoQ.children[1]);

console.log(elementoQ.firstElementChild);

console.log(elementoQ.lastElementChild);

let elementoClase = document.querySelector('#p1');
console.log(elementoClase);

*/
/*
let elementoP = document.getElementsByTagName('p');
console.log(elementoP.length);

for(let i = 0; i < elementoP.length; i++){

    console.log(elementoP[i].textContent);
}

elementoP[2].innerHTML ='Prueba'

let opId = document.getElementById('p1');


opId.style.background = 'green';
opId.style.color = 'white';
opId.style.borderRadius ='8px'
opId.style.width ='250px'
opId.style.height ='20px'
opId.style.textAlign ='center'
*/

// ver fecha
function verFecha(){

    let fec = document.getElementById('resultado');
    fec.innerHTML = Date();
}

//quitar verFecha

function quitarFecha(){

let  Qfech = document.getElementById('resultado');
Qfech.innerHTML = "Ya no se ve la Fecha";
}


function temperatura(){

    let numero = parseFloat(document.getElementById('dato1').value);

    let calculo = numero - 273.15;

    let res1 = document.getElementById('res');
    res1.innerHTML =(`Resultado: ${calculo}°C`);

    alert(`La conversion es: ${calculo} °C` );
}
