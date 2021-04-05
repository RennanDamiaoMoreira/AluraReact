import {ContaCorrente} from "./Conta.js";
import{Cliente} from "./Cliente.js";
const cliente1 = new Cliente();
cliente1.nome="rennan";
cliente1.cpf= "11122233300";
const conta = new ContaCorrente();
conta.deposita(10);
console.log(cliente1,conta)