
// definicion e inicializacion de variable sy arreglos
/*
function imprimaProducto(prod, prec, tot_art){
// mostar los productos, los precios y el total de lo comprado
    for(let i = 0; i < tot_art; i++){
        console.log(`Producto: ${prod[i]} : Precio : ${prec[i]}`)
    }

}

let productos = new Array(10);
let precios = new Array(10);
let cantidad = 0;
function caja(){
    let total_fact = 0;

    //solicitar el nombre del producto su precio
    for(let i = 0; i < productos.length; i++){
        // pedir producto
        let nombre_p = prompt(" ingrese el nombre de producto: ");
        let precio_p =parseInt(prompt("Ingrese el precio del producto: "));

        productos[i] = nombre_p;
        precios[i] = precio_p;
        cantidad++;

        // Sumando los precios de los productos
        total_fact += precio_p;

        //Preguntar al susrio si desea seguir fecturando
        masArticulos = confirm("desea seguir facturando mas articulos..? ");
        if(masArticulos == false){
            imprimaProducto(productos, precios, cantidad);
            break;
        }        
      
    }
    console.log(`Total a pagar: ${total_fact}`)

}
caja();
*/


// Utilizando funciones, ciclos y Arrays, desarrolle un script que 
// determina si la letra que se le pasa como primer argumento se 
// encuentra contenida dentro de un array de letras que se le pasa 
// como segundo argumento. 
// Intente resolverlo sin utilizar métodos de Array. (array.push())
/*
function letraEnArray(letra, arrayLetras) {
    // Recorremos el array de letras
    for (let i = 0; i < arrayLetras.length; i++) {
        // Comparamos cada elemento del array con la letra dada
        if (arrayLetras[i] === letra) {
            return true; // Si encontramos la letra, retornamos true
        }
    }
    return false; // Si no encontramos la letra, retornamos false
}

// Ejemplo de uso
const letra = 'a';
const arrayLetras = ['w', 'r', 'i', 'x', 'a'];

const resultado = letraEnArray(letra, arrayLetras);
console.log(resultado); // Debería imprimir true
*/

//Desarrolla una función que reciba como argumento una letra y devuelva verdadero o 
//falso (tru o false) dependiendo de si es una vocal o no. Debe funcionar igual con 
//mayúsculas y con minúsculas. Las vocales están almacenadas en un Array.
//Solo se aceptan letras internacionales

/*
function esVocal(letra) {
    // Definimos un array con las vocales en minúsculas y mayúsculas
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Recorremos el array de vocales
    for (let i = 0; i < vocales.length; i++) {
        // Comparamos la letra dada con cada vocal en el array
        if (letra === vocales[i]) {
            return true; // Si encontramos la letra, retornamos true
        }
    }
    return false; // Si no encontramos la letra, retornamos false
}

// Ejemplo de uso
console.log(esVocal('a')); // Debería imprimir true
console.log(esVocal('B')); // Debería imprimir false
console.log(esVocal('E')); // Debería imprimir true
console.log(esVocal('z')); // Debería imprimir false
*/

// Desarrolla el código que tenga una función la cual reciba como argumento un array 
// y que devuelva una cadena de caracteres formada por los elementos del array 
// separados por un guion

function unirConGuion(array) {
    // Inicializamos una cadena vacía para almacenar el resultado
    let resultado = '';

    // Recorremos el array
    for (let i = 0; i < array.length; i++) {
        // Añadimos el elemento actual a la cadena de resultado
        resultado += array[i];

        // Si no es el último elemento, añadimos un guion
        if (i < array.length - 1) {
            resultado += '-';
        }
    }

    return resultado; // Devolvemos la cadena resultante
}

// Ejemplo de uso
const colores = ['rojo', 'verde', 'azul'];
console.log(unirConGuion(colores)); // Debería imprimir "rojo-verde-azul"

