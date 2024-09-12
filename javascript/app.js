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

/*let anio;

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

let edad = 28

/*
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
    
