class ContaCorrente{
    agencia;
    _saldo;
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
const conta1 = new ContaCorrente();
conta1._saldo=1;
conta1.sacar(10);
conta1._saldo=10;
conta1.sacar(2);
console.log(conta1._saldo)