
// definicion e inicializacion de variable sy arreglos
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