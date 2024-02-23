const GerenciadoraClientes = require('../src/GerenciadoraClientes')
const Cliente = require('../src/Cliente')

/*
* @author Paulo Henrique Ziemer dos Santos
* @chavePIX 47996592913
*/

describe('Teste da classe GerenciadoraClientes', () => {
    test('Pesquisa Clientes', () => {
        const clientesDoBanco = [];
        const cliente01 = new Cliente(1, "Eduardo Gomes", 42, "eduardo.gomes@ifsc.edu.br",1, true);
        const cliente02 = new Cliente(2, "Jose da Silva", 34, "josesilva@gmail.com",2, true);
        clientesDoBanco.push(cliente01);
        clientesDoBanco.push(cliente02);
        
        gerClientes = new GerenciadoraClientes(clientesDoBanco);

        const idCliente = 1;
        const cliente = gerClientes.pesquisaCliente(idCliente)

        expect(cliente.getId()).toBe(1);
        expect(cliente.getEmail()).toBe("eduardo.gomes@ifsc.edu.br");
        expect(cliente.getIdade()).toBe(42);
    })

    test('Remover Clientes', () => {
        const clientesDoBanco = [];
        const cliente01 = new Cliente(1, "Eduardo Gomes", 42, "eduardo.gomes@ifsc.edu.br", 1, true);
        const cliente02 = new Cliente(2, "Jose da Silva", 34, "josesilva@gmail.com", 2, true);
        clientesDoBanco.push(cliente01);
        clientesDoBanco.push(cliente02);
        
        gerClientes = new GerenciadoraClientes(clientesDoBanco);

        const idCliente = 1;
        const clienteRemovido = gerClientes.removeCliente(idCliente);

        //toBeTruthy
        expect(clienteRemovido).toBeTruthy();

        expect(gerClientes.pesquisaCliente(idCliente)).toBeNull();
    })

})