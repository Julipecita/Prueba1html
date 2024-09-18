// Comentario de una linea

/*
 Comentario multilinea
 */

console.log("Hola Mundo");

//variables

/*
let numero1 = 45;
let numero2 = 39;
let suma, resta, multiplicacion, mod;

const pi = 3.14156;

let estado = true;

let numero3=78;

let direccion = "calle 11 #40-60";

let nulo = null;

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
mod = numero1 % numero2;

console.log(suma);

//concatenar valores

console.log('EL PRIMER VALOR ES:'+ numero1);
console.log('EL SEGUNDO VALOR ES:'+ numero2);
console.log('LA SUMA DE '+ numero1 +' Y ' + numero2 + ' ES: ' + suma);
console.log('LA SUMA DE ', numero1 , ' Y ', numero2 , ' ES: ' , suma);

//LITERAL TEMPLATE

console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`);
console.log(`LA RESTA ES ${numero1} Y ${numero2} ES: ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`);
console.log(`LA DIVISION MODULO DE ${numero1} y ${numero2} ES: ${mod}`);

console.log(typeof(estado));
console.log(typeof(direccion));
console.log(typeof(numero3));
console.log(typeof(nulo));

let nu1 = parseInt(prompt("Ingrese el primre valor"));

let nu2 = parseFloat(prompt("ingrese el segundo valor"));

let s = nu1 + nu2;

console.log(`EL PRIMER VALOR INGRESADO ES: ${nu1} Y EL SEGUNDO VALOR ES ${nu2}`);
console.log(`LA SUMA : ${s}`);


//Generacion de numeros alaeatorios
//Numero aleatorio entre 1 - 50


let alea = Math.floor(Math.random() * 50 ) + 1 ;

console.log(alea);

//Numero aleatorio entre 1 - 100

let alea1 = Math.floor(Math.random() * 100 );

console.log(alea1)


*/
//estructura del IF

/*
let edad = 20;

if(edad >=18){
    console.log("es mayor de edad");
} else{
    console.log("es menor de edad")
};
*/

//ejercicio 2

/*
let calificacion;

calificacion = parseFloat(prompt("ingrese calificacion"))

if(calificacion < 3.0){
    console.log("REPROBO");
}else{
    console.log("PASO EL AÑO")
}
    */
/*
let calificacion;

calificacion = parseFloat(prompt("ingrese calificacion"))

if(calificacion < 3.0){
    console.log("REPROOBO");
}else if(calificacion < 4.0){
    console.log("Estudiante paso el Año")
}else{
    console.log("El estudiante es muy bueno")
}
/*
Y LOGICO && - SE CUMPLEN LAS DOS CONDICIONES
O LOGICO || - SE CUMPLE UNA DE LAS 2 CONDICONES
*/

/* COMPLETAR ESTA PARTE DEL CODIGO SEGUN LA GRABACION
let calificacion;

calificacion = parseFloat(prompt("ingrese calificacion"))

if(calificacion < 3.0){
    console.log("REPROBO");
}else if(calificacion < 4.0){
    console.log("Estudiante paso el Año")
}else{
    console.log("El estudiante es muy bueno")
}
    */

/*
let anio;

anio = parseInt(prompt("Año de Nacimiento entre 1883 y 2025"));

if(anio >= 1883 && anio <= 1900){
    console.log("Eres Generacion Perdida")
}else if (anio >= 1901 && anio <= 1924){
    console.log("Eres Generacion Grandiosa")
}else if (anio >= 1925 && anio <= 1945){
    console.log("Eres Generacion Silenciosa")
}else if (anio >= 1946 && anio <= 1964){
    console.log("Eres Baby Boomer")
}else if (anio >= 1965 && anio <= 1980){
    console.log("Eres Generacion X")
}else if (anio >= 1981 && anio <= 1996){
    console.log("Eres Generacion Y")
}else if (anio >= 1997 && anio <= 2012){
    console.log("Eres Generacion Z")
}else if(anio >= 2013 && anio <= 2025){
    console.log("Eres Generacion Grandiosa")
}else{
    console.log("Estas fuera del rango, ingresa año entre 1883 y 2025")
}*/

/*let edad = 20;


if(edad >=18){
    console.log("es mayor de edad");
} else{
    console.log("es menor de edad")
};*/

//Operador ternario

/*

let res = (edad>=18)? "Es mayor de edad" : "Es menor de edad";

console.log(res)
*/
/*
let edad = 28


if(edad >=0 && edad <= -5){;
console.log("Eres un infante");
}else if(edad >=6 && edad <=11){
    console.log("Eres un niño");
}else if(edad >=12 && edad <=17){
    console.log("Eres un Adolecente");
}else if(edad >=18 && edad <=29){
    console.log("Eres un joven");
}else if(edad >=30 && edad <=59){
    console.log("Eres un Adulto");
}else{
    console.log("Eres un Adulto mayor")
}
*/

/*
if(edad >=0 && edad <= -5){;
    console.log("Eres un infante");
    }else if(edad <=11){
        console.log("Eres un niño");
    }else if(edad <=17){
        console.log("Eres un Adolecente");
    }else if(edad <=29){
        console.log("Eres un joven");
    }else if(edad <=59){
        console.log("Eres un Adulto");
    }else{
        console.log("Eres un Adulto mayor")
    }
*/

// estructura del Swich case

/*
let dia = 3

switch(dia){
case 1: console.log("Imprimir lunes");
break;
case 2: console.log("Imprimir martes");
break;   
case 3: console.log("Imprimir miercoles");
break;
case 4: console.log("Imprimir jueves");
break;
default: console.log("dia no existe");
}
*/

// Otro ejemplo del switch

/*
let operador = "+";

switch(operador){

    case "+":

    break;

    case "-":

    break;

    case "*":

    break;

    case "/":

    break;

    default: console.log("Operador no existe");

}
*/
/*
let moneda = parseInt(prompt("Que cantidad de dinero quiere cambiar"));
let divisa = parseInt(prompt("Que divisa quiere cambiar: \n1.Dolar; \n2. Euro; \n3. Libra Esterlina"));
let ddolar = 4280;
let deuro = 4728;
let dlibraesterlina = 5601;

switch (divisa){
    case 1: 
        console.log(`tu cambio de divisas es: ${moneda / ddolar }`);
    break;
    case 2:
        console.log(`tu cambio de divisas es: ${moneda / deuro }`);
    break;
    case 3:
        console.log(`tu cambio de divisas es: ${moneda / dlibraesterlina }`);
    break;
    default: console.log(`Esa Divisa no la tengo`)
}
  */
 //Estructura del FOR

 //for(inicio; limite; incremento / decremento)

 /*for (let i = 1; i<=10; i++){
    console.log(i);
 }
 console.log ("-----------------------------------")
 //decremento

 for (let j = 20; j>=1; j-=1)
    {
    console.log(j);
 }
*/

// Variable acomuladora
/*let n = parseInt(prompt("introduce un nuemro positivo"));
let sum = 0

for (let i =1; i<= n; i++){
    sum +=i;
}

console.log(`la suma de los numeros del 1 al ${n} es: ${sum}`);
*/

/*
 let tabla
 tabla = parseInt(prompt("Ingresa la tabla de multiplicar que quieres obtener"));
 for (let i = 0; i<=10; i++){
    console.log(` ${tabla} * ${i} = ${tabla*i}`);
 }
*/


// Ejercico repaso Ing Fabian

/*
let num = 0
let nun = parseInt(prompt("Entrar numero entero"));
let res = num % 2;
let par = res==0;
console.log("Es par" + par);

const temperatura = 18;
const lluvia = false;
*/
/*
let menu = parseInt(prompt("Que plato principal quiere elegir? \n1.Carne \n2.Pescado \n3 Ensalada "));


switch(menu){
    case 1:
        console.log(prompt('Con su carne quiere Vino Tinto?'));
        break;
    case 2:
        console.log(prompt('Con su pescado quiere Vino Blanco?'));
        break;
    case 3:
        console.log(prompt('Con su Ensalda quiere Agua?'));
        break;
    default:
        console.log(prompt('Plato principal no seleccionado'));

}
*/
/*
let nMes, estacion;
nMes = parseInt(prompt("ingresa # mes del año del 1 a 12 "));
switch(nMes){
    case 12: 
    case 1:
    case 2:
        estacion = "invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Otoño";
        break;
}
alert("la Estacion del año es " +estacion)
*/
// Tarea punto 4 
/*
let credito, salas
credito = parseInt(prompt("Bienbenido a tu sala de juegos favorita¡¡¡ \n Cuantos creditos tienes hoy para jugar?"));

switch (credito){
    case 1: 
    salas ="tienes derecho a ingresar a la sala de Consolas";
    break;
    case 2: 
    salas ="tienes derecho a ingresar a las salas de Consolas y Juegos 2D";
    break;
    case 3: 
    salas ="tienes derecho a ingresar a las salas de Consolas, juegos 2D y juegos 3D";
    break;
    case 4: 
    salas ="tienes derecho a ingresar a las salas de Consolas, juegos 2D, juegos 3D y Realidad Virtual";
    break;
    case 0: 
    salas ="Sin credito no puedes jugar";
    break;
}
alert(salas);
*/
// Tarea punto 5 
/*
let compra, descuento;

compra = parseInt(prompt("Para saber el monto a pagar ingrese el valor de su compra"));

if(compra <= 100000){
    descuento = `${compra} "No hay descuento" `;
}    else if (compra >= 100001 && compra <= 300000){
    descuento = ( `${compra-(compra*0.05)} ,su descuento fue 5%`);pars
}else if (compra > 300000 && compra <= 40000){
    descuento = (`${compra-(compra*0.10)} ,su descuento fue 10%`);
}else if (compra >400000){
    descuento = (`${compra-(compra*0.15)} ,su descuento fue 15%`);
}else{
    console.log("ingresa Valor de la compra");
}
alert("El valor final a pagar es "  +descuento+ "\n Gracias por su compra") ;
*/

/*let tabla
tabla = 1;
*/

//revisar agrabacion 
/*
for (let i = 1; i<=10; i++){
    for(let j =1; j<=10; j++){
   console.log(` ${i} * ${j} = ${(i * j)}`);
}
console.log(" ")
}
*/
// ejercicio

/*
let sum = 0

for (let i =1; i<200; i+=2){
       sum +=i;
    console.log(`la suma de lso primero 100 numeros impares es: ${sum}`);
}


let suma = 0
let contador = 0
for (let i = 1; contador <100; i+=2){
    suma +=i;
    contador++;
}
console.log(`La suma de los primeros 100 numero impares es: ${suma}`);
*/

//for
/*
for(let i=1; i<= 10; i++){
console.log(i);
}
*/

//while

/*
console.log("------------------------------");

let numero = 1;

while(numero <=10){
    console.log(numero)
    numero++;
}
*/
// SUMER NUMEROS POSITIVOS

//Aporte de Juliana Perez
/*
let n = 1 
let sum=0;
while (n > 0){
    n = parseInt(prompt("Ingrese un numero positivo"));
    sum += n;
    console.log(sum)
}

console.log(`La suma de sus numeros es ${sum+(n * -1)}`);
*/
/*
let n = 1 
let sum=0;
while (n > 0){
    n = parseInt(prompt("Ingrese un numero positivo"));
    sum += n;
}

console.log(`La suma de sus numeros es ${sum+(n * -1)}`);
*/
//ejercicio jorge
/*
let num;
let sum = 0;
while ((num = parseInt(prompt("Ingrese un numero positivo: "))) > 0) {
  sum += num;
  console.log(sum);
}
console.log("la suma total es:", sum);

*/
/*
//Desarrollar menu de opciones

let opcion;
let estado = true;
let coseno, seno, raiz, numero;

// opciones realizar un calculo automatico

// 1.Raiz
//2. Seno
//3. Coseno

while (estado){

opcion = (parseInt(prompt(`SELECCIONE OPCION: \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno de N1 ?\n 4. Salir`)));

switch(opcion){

    case 1: alert("Seleciono Raiz");

    numero = (parseFloat(prompt('ingrese el numero para calcular Raiz')));

    raiz = Math.sqrt(numero);

    alert(`LA RAIZ DE ${numero} ES: ${raiz}`);

    break;

    case 2: alert("Selecciono Seno N1");

    numero = (parseFloat(prompt('ingrese el numero para calcular Seno')));

    seno = Math.sin(numero);

    alert(`EL SENO DE ${numero} ES: ${seno}`);

    break;

    case 3: alert("Selecciono Coseno N1");

    numero = (parseFloat(prompt('ingrese el numero para calcular Coseno')));

    coseno = Math.cos(numero);

    alert(`EL Coseno DE ${numero} ES: ${coseno}`);

    break;

    case 4: alert("Saliendo");
    estado = false;
    break;

    default:
        alert("la opcion no existe");

    
}

}
*/

let estado = true

let alea = Math.floor(Math.random() * 50 ) + 1 ;

console.log(alea);

let numero = parseInt(prompt("Adivina el numero de 1 a 50, Ingresa tu opcion"));

while(estado)
    if (numero < alea) {
        console.log("Tu opcion es menor");
    } else if (numero > alea){
        console.log("tu opcion es mayor");
    } else if (numero === alea){
        console.log("Adivinaste el numero")
    }




