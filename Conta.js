class Conta {
    cliente;
}
export class ContaCorrente extends Conta {
    constructor(agencia,saldo, cliente){
        super();
        super.cliente=cliente;
        this.agencia=agencia;
        this._saldo=saldo;
    }
    agencia;
    _saldo = 0;
    sacar(valor){
        if (valor<=this._saldo){
            this._saldo-=valor;
            return valor;
        }else{
            console.log("erro ao sacar _saldo inferior ao pedido, gostaria de fazer um empréstmo?");
        }
    }
    deposita(valor){
        if (valor>0){
            this._saldo+=valor
        }
    }
}