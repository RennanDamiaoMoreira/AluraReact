class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if (valor<=this.saldo){
            this.saldo-=valor;
        }else{
            console.log("erro ao sacar saldo inferior ao pedido, gostaria de fazer um empréstmo?");
        }
    }
    deposita(valor){
        if (valor>0){
            this.saldo+=valor
        }
    }
}
const conta1 = new ContaCorrente();
conta1.saldo=1;
conta1.sacar(10);
conta1.saldo=10;
conta1.sacar(2);
console.log(conta1.saldo)