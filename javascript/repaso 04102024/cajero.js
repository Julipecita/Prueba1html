class Cuenta{
    constructor(){
        this._cuentas = new Array(3); // Array para alamacenar cuenta de usuarios
        this._saldos = new Array(3); // array para alamacenar saldos de las cuantas

    }

    // Metosos setters y getters

    setCuenta(index, cuenta){
        this._cuentas[index] = cuentas;
    }

    getCuenta(index){
        return this.cuentas[index];
    }

    setSaldo(Index, cuenta){
        this._saldos[index] = saldo;        
    }

    getSaldo(index){
        return this._saldos[index];
    }
    crearCuenta(){
        for (let i= 0; i < this._cuentas.length; i++) {         
        let cuenta = prompt(`Ingrese el Nuevo numero de Cuenta: ${i+1}`);
        let saldo = parseFloat(prompt(`Ingrese el Saldo para la nueva cuanta:  ${cuenta} `));

        this.setCuenta(i, cuenta);
        this.setSaldo(i, saldo);
        }
    }
    consultarCuenta(){
        let cuenta = prompt(`Ingrese el numero de Cuenta a consultar saldo: `);
        let index = this._cuentas.indexOf(cuenta); // Busca el indice del valor como argumento
        if(index !== -1){
            alert(`el saldo de la cuanta  ${cuenta} es de ${this.getSaldo(index)}`);
        }
        else{
        alert("Cuenta no existe")
        }

    }
    consignarCuenta(){

    }

    retiroCuenta(){


    }

}

const cuenta = new Cuenta();

//Menu interactivo con el usuario

let opcion;

do{

    opcion =parseInt(prompt(`***** MENU CAJERO BANCAYA*****
        1. Crear Cuenta
        2. Consultar Saldos
        3. Consignacion
        4. Retiro
        5. Salir`));

        switch (opcion) {
            case 1:
                cuenta.crearCuenta();
                break;
            case 2:
                cuenta.consultarSaldo();
                break;
            case 3:
                cuenta.consignarCuenta();
                break;
            case 4:
                cuenta.retiroCuenta();
                break;
            case 5:
                
                break;

            default:
                alert("opcion no valida, intente nuevamente")
                break;
        }
}while(opcion !== 5)