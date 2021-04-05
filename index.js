import {ContaCorrente} from "./Conta.js";
import{Cliente} from "./Cliente.js";
const cliente1 = new Cliente();
cliente1.nome="rennan";
cliente1.cpf= "11122233300";
const conta = new ContaCorrente("123","100",cliente1);
const conta2 = new ContaCorrente("123","100",cliente1);
conta.deposita(10);
console.log(conta,conta2)
conta.sacar(4);
console.log(conta,conta2)
conta.transferir(11,conta2);
console.log(conta,conta2)