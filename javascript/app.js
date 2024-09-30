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
}else if (compra >= 100001 && compra <= 300000){
    descuento = ( `${compra-(compra*0.05)} ,su descuento fue 5%`);
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
// opcion 1 del juego
/*
let alea = Math.floor(Math.random() * 50 ) + 1 ;
console.log(alea);
let num = 0;
let intentos = 0;



while(alea !== num){
    num = parseInt(prompt("EL JUEGO ES ADIVINA EL NUMERO...Vamos a jugar¡¡¡¡ \n Ingresa tu opcion de 1 a 50"));
    intentos ++;
    if (num <= 0 || num > 50){
        alert("intenta otra vez...ingresa un número del 1 al 50");
    } else if (num < alea){
       alert("Tu elección esta por debajo, intenta otra vez");
    } else if (num > alea){
        alert("tu elección esta por encima, intenta otra vez");
    } else if (num == alea){
        alert(`Adivinaste el número ${alea} en ${intentos} intentos`);
    } else {
        alert("Pon un número, quieres?");
    }
}
    */

// opcion 2 del juego
/*
let alea = Math.floor(Math.random() * 50 ) + 1 ;
console.log(alea);
let num = 0;
let intentos = 0;
let opcion = (parseInt(prompt("EL JUEGO ES ADIVINA EL NUMERO, Quieres jugar (ingreso 1 ó 2) \n 1. SI \n 2. No")));

switch(opcion){
    case 1:
        while(alea !== num){
                num = parseInt(prompt("Vamos a jugar¡¡¡¡ \n Ingresa tu opcion de 1 a 50"));
                intentos ++;
                if (num <= 0 || num > 50){
                alert("intenta otra vez...ingresa un número del 1 al 50");
                } else if (num < alea){
                alert("Tu elección esta por debajo, intenta otra vez");
                } else if (num > alea){
                alert("tu elección esta por encima, intenta otra vez");
                } else if (num == alea){
                alert(`Adivinaste el número ${alea} en ${intentos} intentos`);
                } else {
                alert("Pon un número, quieres?");
                }
            }
    break;
            
    case 2:
        alert("Hasta la próxima")
    break;

}
*/

// ESTRUCTURA DEL DO WHILE

//calculo de area de un circulo, cuadrado, triangulo

// Area de circulo = p1 *r*r

// area del cuadrado = L*L

// area triangulo = (B*H)/2

/*
let ac, acu, at;

let r, lado, b, h;

const pi = 3.1416;

let opcion;

let estado = true
do{

    opcion = parseInt(prompt(' 1. Area Circulo \n 2. Area Cuadrado \n 3. Area Trinangulo \n 4. Salir'));

    switch(opcion){
        case 1: alert("Area del Circulo");

        r = parseFloat(prompt("ingrese el valor del radio"));

        ac = pi * (r*r);

        alert(`El area del circulo es ${ac}`);

            break;
        
        case 2: alert("Area del Cuadrado");

        lado = parseFloat(prompt("ingrese el valor del lado"));

        acu = lado * lado

        alert(`El area del cuadrado es ${acu}`);
            break;

        case 3: alert("Area del tríangulo");

        b = parseFloat(prompt("ingrese el valor de la base"));
        h = parseFloat(prompt("ingrese el valor de la altura"));

        at = (b*h)/2;

        alert(`El area del triangulo es ${at}`);
            break;

        case 4:
            alert("Saliendo....");
            estado = false
            break;

        default:
        alert("opcion no valida");
        estado = false
    }
}while(estado)

*/

//Calculo de Cambio de temperatura
/*
let temp, conv;
let opcion;

let estado = true

do{

    opcion = parseInt(prompt('Convertir de \n 1. Kelvin a Celsius \n 2. Farenheit a Celsius \n 3. Celsius a Kelvin \n 4. Farenheit a Kelvin \n 5. Kelvin a Farenheit \n 6. Celsius a Farenheit'));

    switch(opcion){
        case 1: 

        temp = parseFloat(prompt("Elegiste Kelvin a Celsius, ingrese la temperatura a convertir"));

        conv = (temp-273.15);

        alert(`los grados son ${conv} Celsius`)toFixed(2);

            break;
        
        case 2: 

        temp = parseFloat(prompt("Elegiste Farenheit a Celsius, ingrese la temperatura a convertir"));

        conv = (5*(temp-32)/9);

        alert(`los grados son ${conv} Celsius`)toFixed(2);
            break;

        case 3: 

        temp = parseFloat(prompt("Elegiste Celsius a Kelvin, ingrese la temperatura a convertir"));

        conv = temp+273.15;

        alert(`los grados son ${conv} Kelvin`)toFixed(2);
            break;

        case 4: 

        temp = parseFloat(prompt("Elegiste Farenheit a Kelvin, ingrese la temperatura a convertir"));
    
        conv = (5*(temp-32)/9)+273.15;
    
        alert(`los grados son ${conv} Kelvin`)toFixed(2);
            break;

        case 5: 

        temp = parseFloat(prompt("Elegiste Kelvin a Farenheit, ingrese la temperatura a convertir"));

        conv = ((9*(temp-273.15)/5)+32);

        alert(`los grados son ${conv} Farenheit`).toFixed(2);
            break;

        case 6: 

        temp = parseFloat(prompt("Elegiste Celsius a Farenheit, ingrese la temperatura a convertir"));
    
        conv = (((9*temp)/5)+32);
    
        alert(`los grados son ${conv} Farenheit`);
                break;

        default:
        alert("sin rango conocido");
        estado = false
          
    }
}while(estado)

*/


//1.dibujar un trinagulo
/*
let dim;
let triangulo = '';


dim = parseInt(prompt("Introduce un numero de 1 a 20"));

for(let i=1; i<=dim; i++){
    triangulo += '*' .repeat(i) + '\n';
}
console.log(triangulo);

____________________________________________

let dim;
let a = '';
i = 1;


dim = parseInt(prompt("Introduce un numero de 1 a 20"));

while(i<= dim){
    a =  "*" .repeat(i);
    console.log(a)
    i = i+1;
}
*/

// 2.Contraseña de acceso
/*
let password_C = "SweetHome";
let int = 0;
let int_max = 3;

while (int < int_max){
    let password_U = prompt("introduce contraseña de usuario");
    if(password_C === password_U) {;
        alert("Acceso concedido");
        break;

    }else {
        int++;
        if(int < int_max) {
            alert("Acceso denegado, introduce contraseña de usuario correcta");
        }else {
            alert("Alerta, intruso tratando de acceder...")
        }
}

}
*/

//3. Letras repatidas
//_______________________________________________________________________________________
/*
let letra;
let opcion;
let num;
estado = true;

do{
    opcion = parseInt(prompt("Entre X y Z cual eliges? \n 1. X \n 2. Z \n 3. Salir"));

    switch(opcion){
        case 1: 
            num = parseInt(prompt("introduce las veces que quieres que se repita X"));
            for(let i=1; i<=num; i++){
                letra = 'X' .repeat(i);
                 }
                console.log(letra);
              break;
                                
        case 2:
            num = parseInt(prompt("introduce las veces que quieres que se repita Z"));
            for(let i=1; i<=num; i++){
                letra = 'Z' .repeat(i);
                 }
                 console.log(letra);
            break;

        case 3:
            alert("saliedo....");
            estado = false;
            break;
            
        default:
            alert("no elegiste X o Z");
            estado = false;


    }
}while(estado)
*/


//Ejemplo 1 de funciones
/*
saludar("Pedro");

functionsaludar(nombre){
    alert(`Hola ${nombre}`);
}

// Ejemplo 2

function raiz(numero){
    return Math.sqrt(numero);
}

console.log(raiz(18))
*/
//Ejemplo 3
/*
function exponente(base, cuadrado){
   return Math.pow(base, cuadrado);

}

console.log(`EL CUADRADO ES: ${exponente(12, 6)}`);
*/


// convertir temperatura  con funciones

/*
let temp;
let opcion;

let estado = true

do{

    opcion = parseInt(prompt('Convertir de \n 1. Kelvin a Celsius \n 2. Farenheit a Celsius \n 3. Celsius a Kelvin \n 4. Farenheit a Kelvin \n 5. Kelvin a Farenheit \n 6. Celsius a Farenheit \n 7. Salir'));

    switch(opcion){
        case 1: 

            temp = parseFloat(prompt("Elegiste Kelvin a Celsius, ingrese la temperatura a convertir"));

            alert(`la conversion es  ${Kelvin_Celsius(temp)} Celsius`);
            break;
        
        case 2: 

            temp = parseFloat(prompt("Elegiste Farenheit a Celsius, ingrese la temperatura a convertir"));
       
            alert(`la conversion es ${Farenheit_Celsius(temp)} Celsius`);
            break;

        case 3: 

            temp = parseFloat(prompt("Elegiste Celsius a Kelvin, ingrese la temperatura a convertir"));
     
            alert(`la conversion es ${Celsius_Kelvin(temp)} Kelvin`);
            break;

        case 4: 

            temp = parseFloat(prompt("Elegiste Farenheit a Kelvin, ingrese la temperatura a convertir"));
            
            alert(`la conversion es ${Farenheit_Kelvin (temp)} Kelvin`);
            break;

        case 5: 

            temp = parseFloat(prompt("Elegiste Kelvin a Farenheit, ingrese la temperatura a convertir"));

            alert(`la conversion es ${Kelvin_Farenheit(temp)} Farenheit`);
            break;

        case 6: 

            temp = parseFloat(prompt("Elegiste Celsius a Farenheit, ingrese la temperatura a convertir"));
    
            alert(`la conversion es ${Celsius_Farenheit(temp)} Farenheit`);
            break;

        case 7:
            alert("saliendo");
            estado = false
            break;
            

        default:
            alert("sin rango conocido");
            estado = false
          
    }
}while(estado)

    function Kelvin_Celsius (temp){

        return temp-273.25;
    }

    function Farenheit_Celsius (temp){

        return (5*(temp-32)/9);
    }

    function Celsius_Kelvin (temp){

        return temp+273.15;
    }

    function Farenheit_Kelvin (temp){

        return (5*(temp-32)/9)+273.15;
    }

    function Kelvin_Farenheit(temp){

        return ((9*(temp-273.15)/5)+32);
    }

    function Celsius_Farenheit(temp){

        return (((9*temp)/5)+32);
    }
    */
   
    //FUNCION TRAICIONAL
    //Forma 1
/*
    function multiplicacion(a, b){
        return (a*b);

    }

    console.log(multiplicacion(a,b));

    //funcion flecha

    // FORMA 2

    let multiplicacion1 = (a, b)=>{
        return a*b;

    }
    console.log(multiplicacion1(6,3));

    //FORMA 3

    let multiplicacion2 = (a,b) => a*b

    console.log(multiplicacion2(3,7));

    //Otro Ejercicio

    function raiz(numero){
        return Math.sqrt(numero);
    }
    
    console.log(raiz(18))
//-------------
    let ra = (numero) => Math.sqrt(numero);

    console.log(ra(25));

    let funcion = () => console.log("hola, soy uan funcion sin parametros"); // sinfion sin parametros

    funcion();

*/


//Arreglos----------------
/*
let estudiantes = ["laura", "Julian", "Andres", "Oscar", "Paola"];

console.log(estudiantes);

//anadir un elementos al final

console.log(estudiantes.push ("Ricardo"));
console.log(estudiantes);

//Agregar elemetnos al principio

console.log(estudiantes.unshift("Esmeralda"));
console.log(estudiantes);

//agregar un lelemtno en culaquie rposicion

console.log(estudiantes.splice(2 , 0, "Sofia"));
console.log(estudiantes);

// Eliminar el ultimo elemento

console.log(estudiantes.pop());
console.log(estudiantes);

// Elimminar elemento en una posicion

console.log(estudiantes.splice(2, 1));

//Eliminar el primer elemento

console.log(estudiantes.shift());
console.log(estudiantes);

//saber posicion de un elemento

console.log(estudiantes.indexOf("Andres"));
console.log(estudiantes);




//recorrer el arreglo

//opcion 1

estudiantes.forEach((est) => {

    console.log(est);

});


//buscar 1 elemento


estudiantes.forEach((est) => {

    if (est === estudiantes[3]){
        console.log(est)
    }

});
/*
for(let est of estudiantes){
    console.log(est)
}
*/


/*
let vector = [];

vector[0] = 15;
vector[1] = 63;
vector[2] = 48;

console.log(vector);
 */

/*
let vector = [];

//recorrer para llenarlo

for(let i=0; i< 5; i++){

    vector.push(i+1);
}

// recorro para mostrar
for (let i=0; i<5; i++){
    console.log(vector[i]);
}

*/

// sumar los numero del arreglo
// For tradicional
/*
let numero = [12,18,16,19,23];
let suma = 0;

for(let i = 0; i < numero.length; i++){;

suma += numero[i];

}

console.log(`LA SUMA ES ${suma}`);
*/
// ForEach

/*
numero.forEach((nu)=> {

    suma += nu;
});

console.log(`LA SUMA ES : ${suma}`);
*/

/*
let numero = [12,18,16,19,23];
let suma1 = 0
let suma2 = 0


for(i=0 ; i < numero.length; i++)

    if(numero[i] % 2 === 0){
            
            suma1 += numero[i];
    }else {
            suma2 += numero[i];
}

console.log(`La suma de los pares es: ${suma1}`);
console.log(`La suma de los impares es: ${suma2}`);
*/


// Hallar mayor y menor
/*
let numero = [12,18,16,19,23];
let mayor = numero[0];
let menor = numero[0];

for(i=0 ; i < numero.length; i++)

if (numero[i] > mayor){

    mayor = numero[i];

 }else if(numero[i] < menor){
    menor = numero[i]

 };

console.log(`El mayor es : ${mayor}`);
console.log(`el menor es : ${menor}`);
*/

// arreglos

/*
let num = new Array(5);

for(let i = n0; i> numero.length; i++){

num[i] = parseInt(prompt("ingrese el numero entero"));

}

for (let i = 0; i>num.length; i++){

    console.log(`${num[i]}`)
}
*/

// primer arreglo

/*
let tamanio =parseInt(prompt("ingrese la cantidad de estudiantes"));
let calificaciones = new Array(tamanio);

for(let i = 0; i< tamanio; i++){

    calificaciones[i] = parseFloat(prompt("ingrese las notas del estudiante"));

}

for(i = 0; i < tamanio; i++){
console.log(calificaciones[i]);
}
*/
// segundo arreglo
/*
let tamanio =parseInt(prompt("ingrese la cantidad de estudiantes"));
let calificaciones = new Array(tamanio);
let sum = 0;
let mayor = 0;

for(let i = 0; i< calificaciones.length; i++){

    calificaciones[i] = parseFloat(prompt("ingrese las notas del estudiante"));
    sum += calificaciones[i]; 
}

for(i = 0; i < calificaciones.length; i++){
    console.log(`Calificacion ${i+1} : ${calificaciones[i]}`);
}

for (i = 0; i < calificaciones.length; i++){
    if (calificaciones[i] > mayor){

        mayor = calificaciones[i]; 
    } 
}

console.log(`Suma de las notas ${sum}`);
console.log(`promedio : ${sum / tamanio}`);
console.log(`la Nota mas alta es : ${mayor}`);

*/

// Objetos Clave - Valor 30092024
/*
let carro1 = {
    marca : "Ford",
    modelo : "Fiesta",
    color : "Rojo",
    anio : "2018",
    placa : "ABC123",
 
}

let carro2 = {
    marca: "Renault",
    modelo: "Logan",
    color : "Rojo",
    anio : "2019",
    placa : "XYZ321",
    acelarar(){
      return ("el carro 2 esta acelerando")  
    }
}

console.log("Datos Carro 1" , carro1);
console.log("Datos Carro 2" , carro2);

console.log(`LA MARCA DEL VEHICULO 1 ES: ${carro1.marca}`);
console.log(`LA MARCA DEL VEHICULO 2 ES: ${carro1.placa}`);

carro1.marca = "Toyota";
carro1.color = "Gris";

console.log("LOS DATOS DE VEHICULO 1 SON: ", carro1);

console.log(carro2.acelarar());

*/

class persona{

    constructor(nombre, edad){

        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = this.nombre;
    }
    
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = this.edad;

    }
    saludar(){
        console.log(`Hola soy ${this._nombre} y tengo ${this._edad} años`)
    }
}

const per1 = new persona("Juan", 25);

per1.saludar();

const per2 = new persona("Andres", 28);


per1._nombre = "lorena";

per2._edad = 45;

per1.saludar();

per2.saludar();