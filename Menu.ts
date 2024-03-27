import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    
    // Instanciando um novo Objeto da Classe Conta
    console.log("\nCriar o Objeto da Classe Conta")
    let c1: Conta = new Conta(1, 123, 1, "Natasha", 1000000);

    // Visualizando todos os dados da conta criada
    c1.visualizar();

    // Modificando o Saldo através do método set
    console.log("\nAlterar o Saldo para R$ 1500000.00")
    c1.set_saldo(1500000);

    // Recuperando o valor do Saldo através do método get
    console.log(`\nNovo Saldo da Conta: ${c1.get_saldo()}`);

    // Verificando se o Saque deu certo
    console.log(`\nSacar R$ 2000000.00 da conta: ${c1.sacar(2000000)}`);
    c1.visualizar();

    // Verificando se o Saque deu certo
    console.log(`\nSacar R$ 2000.00 da conta: ${c1.sacar(2000)}`);
    c1.visualizar();

    // Depositar dinheiro na conta
    console.log("\nDepositar R$ 5000.00 na Conta: ");
    c1.depositar(5000);
    c1.visualizar();

    while (true) {

        console.log(colors.fg.blue, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("       PagPapo - Pague enquanto troca um papo        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log(colors.fg.bluestrong,
            "Entre com a opção desejada: ");
            console.log(colors.reset, "");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.bluestrong, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.bluestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.bluestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.bluestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.bluestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.bluestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.bluestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.bluestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.bluestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}


function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Gabriel Aranda");
    console.log("Veja meus outros projetos:");
    console.log("github.com/Gabriel-Aranda1406");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();