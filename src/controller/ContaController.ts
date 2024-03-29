import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {


    // Collection Array que aramzenará os Objetos das Classes
    // ContaCorrente e ContaPoupanca
    private listaContas: Array<Conta> = new Array<Conta>();
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    

    // Collection Array que aramzenará os Objetos das Classes
    // ContaCorrente e ContaPoupanca
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }
    
    // Método para adicionar Objrtos das Classes 
    // ContaCorrente e ContaPoupanca
    // na Collection listaContas
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!");
    }
    
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

}  