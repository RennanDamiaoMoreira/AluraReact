class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if (valor<this.saldo){
            this.saldo=this.saldo-valor;
        }else{
            console.log("erro ao sacar saldo inferior ao pedido, gostaria de fazer um empréstmo?");
        }
    }
}
const conta1 = new ContaCorrente();
conta1.saldo=1;
conta1.sacar(10);
conta1.saldo=10;
conta1.sacar(2);
console.log(conta1.saldo)