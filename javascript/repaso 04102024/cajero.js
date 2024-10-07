class Cuenta{
    constructor(){
        this._cuentas = new Array(3); // Array para alamacenar cuenta de usuarios
        this._saldos = new Array(3); // array para alamacenar saldos de las cuantas

    }

    // Metosos setters y getters

    setCuenta(index, cuenta){
        this._cuentas[index] = cuenta;
    }

    getCuenta(index){
        return this.cuentas[index];
    }

    setSaldo(index, saldo){
        this._saldos[index] = saldo;        
    }

    getSaldo(index){
        return this._saldos[index];
    }
    crearCuenta(){
        for (let i= 0; i < this._cuentas.length; i++) {         
        let cuenta = prompt(`Ingrese el Nuevo numero de Cuenta: ${i+1}`);
        let saldo = parseFloat(prompt(`Ingrese el Saldo para la nueva cuenta:  ${cuenta} `));

        this.setCuenta(i, cuenta);
        this.setSaldo(i, saldo);
        }
    }
    consultarSaldo(){
        let cuenta = prompt(`Ingrese el numero de Cuenta a consultar saldo: `);
        let index = this._cuentas.indexOf(cuenta); // Busca el indice del valor como argumento
        if(index !== -1){
            alert(`el saldo de la cuenta  ${cuenta} es de ${this.getSaldo(index)}`);
        }
        else{
        alert("Cuenta no existe")
        }

    }
    consignarCuenta(){
        let cuenta = prompt(`Ingrese el numero de Cuenta: `);
        let index = this._cuentas.indexOf(cuenta); // Busca el indice del valor como argumento
        if(index !== -1){
            let nuevoSaldo = parseFloat(prompt("Ingrese Valor a consignar"));
            this._saldos[index] = this._saldos[index]+nuevoSaldo
            alert(`Nuevo Saldo es ${this.getSaldo(index)}`);
        }
        else{
        alert("Cuenta no existe")
        }

    }

    retiroCuenta(){
        let cuenta = prompt(`Ingrese el numero de Cuenta: `);
        let index = this._cuentas.indexOf(cuenta); // Busca el indice del valor como argumento
        if(index !== -1){
            let nuevoSaldo = parseFloat(prompt("Ingrese Valor a retirar"));
            this._saldos[index] = this._saldos[index]-nuevoSaldo;
            if(this._saldos[index] < 0){
                alert("Saldo insuficiente, Debe pedir menos cantidad");
                this._saldos[index] = this._saldos[index]+nuevoSaldo
            }else{
            alert(`Nuevo Saldo es ${this.getSaldo(index)}`);
        }
            }
            else{
        alert("Cuenta no existe")

    }
        }

}



const cuenta = new Cuenta();


//Menu interactivo con el usuario

let opcion;

do{

    opcion = parseInt(prompt(`***** MENU CAJERO BANCAYA*****
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