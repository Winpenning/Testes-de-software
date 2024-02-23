const chalk = require('chalk')
const readlineSync = require('readline-sync');
const GerenciadoraClientes = require('./src/GerenciadoraClientes');
const GerenciadoraContas = require('./src/GerenciadoraContas');
const Cliente = require('./src/Cliente');
const ContaCorrente = require('./src/ContaCorrente');

let gerClientes;
let gerContas;

function main() {
    inicializaSistemaBancario(); // Criando algumas contas e clientes fictícios

    let continua = true;
    while (continua) {
        printMenu();
        const opcao = readlineSync.questionInt("Escolha uma alternativa: ");
        switch (opcao) {
            case 1:
                const idCliente = readlineSync.questionInt("Digite o ID do cliente: ");
                const cliente = gerClientes.pesquisaCliente(idCliente);
                if (cliente !== null)
                    console.log(chalk.magenta(cliente.toString()));
                else
                    console.log(chalk.red("Cliente não encontrado!"));
                break;

            case 2:
                const idConta = readlineSync.questionInt("Digite o ID da conta: ");
                const conta = gerContas.pesquisaConta(idConta);
                if (conta !== null)
                    console.log(chalk.magenta(conta.toString()));
                else
                    console.log(chalk.red("Conta não encontrada!"));
                break;

            case 3:
                const idClienteAtivar = readlineSync.questionInt("Digite o ID do cliente: ");
                const clienteAtivar = gerClientes.pesquisaCliente(idClienteAtivar);
                if (clienteAtivar !== null) {
                    clienteAtivar.setAtivo(true);
                    console.log(chalk.magenta("Cliente ativado com sucesso!"));
                } else {
                    console.log(chalk.red("Cliente não encontrado!"));
                }
                break;

            case 4:
                const idClienteDesativar = readlineSync.questionInt("Digite o ID do cliente: ");
                const clienteDesativar = gerClientes.pesquisaCliente(idClienteDesativar);
                if (clienteDesativar !== null) {
                    clienteDesativar.setAtivo(false);
                    console.log(chalk.magenta("Cliente desativado com sucesso!"));
                } else {
                    console.log(chalk.red("Cliente não encontrado!"));
                }
                break;

            case 5:
                console.log(chalk.yellow.bgRed("################# Sistema encerrado #################"));
                continua = false;
                break;

            default:
                console.log("\n\n\n\n\n");
                break;
        }
    }
}

function printMenu() {
    console.log(chalk.blue.bgYellow("\nO que você deseja fazer? \n"));
    console.log(chalk.green("1) Consultar por um cliente"));
    console.log(chalk.green("2) Consultar por uma conta corrente"));
    console.log(chalk.green("3) Ativar um cliente"));
    console.log(chalk.green("4) Desativar um cliente"));
    console.log(chalk.red("5) Sair"));
    console.log();
}

function inicializaSistemaBancario() {
    const contasDoBanco = [];
    const clientesDoBanco = [];

    const conta01 = new ContaCorrente(1, 150, true);
    const conta02 = new ContaCorrente(2, 20, true);
    contasDoBanco.push(conta01);
    contasDoBanco.push(conta02);

    const cliente01 = new Cliente(1, "Eduardo Gomes", 42, "eduardo.gomes@ifsc.edu.br", conta01.getId(), true);
    const cliente02 = new Cliente(2, "Jose da Silva", 34, "josesilva@gmail.com", conta02.getId(), true);
    clientesDoBanco.push(cliente01);
    clientesDoBanco.push(cliente02);

    gerClientes = new GerenciadoraClientes(clientesDoBanco);
    gerContas = new GerenciadoraContas(contasDoBanco);
}

main();
