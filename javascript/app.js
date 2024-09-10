// Comentario de una linea

/**
 Comentario multilinea
 */

console.log("Hola Mundo");

//variables

let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion;

const pi = 3.14156;

let estado = true;

let numero3=78;

let direccion = "calle 11 #40-60";

numero3 =125;

console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(direccion)

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;

console.log(suma);

//concatenar valores

console.log('EL PRIMER VALOR ES:'+ numero1);
console.log('EL SEGUNDO VALOR ES:'+ numero2);
console.log('LA SUMA DE '+ numero1 +' Y ' + numero2 + ' ES ' + suma);
console.log('LA SUMA DE ', numero1 , ' Y ', numero2 , ' ES ' , suma);

//LITERAL TEMPLATE

console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`);
console.log(`LA RESTA ES ${numero1} Y ${numero2} ES: ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`);

