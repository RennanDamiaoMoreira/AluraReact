class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if (valor<saldo){
            saldo=saldo-valor;
        }else{
            console.log("erro ao sacar saldo inferior ao pedido, gostaria de fazer um empréstmo?");
        }
    }
}