import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {


    // Collection Array que aramzenará os Objetos das Classes
    // ContaCorrente e ContaPoupanca
    private listaContas: Array<Conta> = new Array<Conta>();
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\nConta não foi encontrada!")
    }
    

    // Collection Array que aramzenará os Objetos das Classes
    // ContaCorrente e ContaPoupanca
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }
    
    // Método para adicionar Objetos das Classes 
    // ContaCorrente e ContaPoupanca
    // na Collection listaContas
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!");
    }
    
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`A conta número ${conta.numero} foi atualizada com sucesso!`)
        }else
            console.log("\nConta não foi encontrada!")
    }
    
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1) // o 1 serve para apagar apenas ele, se colocasse 2 por exemplo, apagaria ele e o próximo
            console.log(`A conta número ${numero} foi excluída com sucesso!`)
        }else
            console.log("\nConta não foi encontrada!")
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

    //Métodos Auxiliares

    public gerarNumero(): number{
        return ++ this.numero
    }

    public buscarNoArray(numero: number): Conta | null{ // se ele achar, retorna o numero da conta, se n achar, retorna null
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }

}  