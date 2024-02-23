class GerenciadoraClientes {
    constructor(clientesDoBanco) {
        this.clientesDoBanco = clientesDoBanco;
    }

    getClientesDoBanco() {
        return this.clientesDoBanco;
    }

    pesquisaCliente(idCliente) {
        for (let cliente of this.clientesDoBanco) {
            if (cliente.getId() === idCliente)
                return cliente;
        }
        return null;
    }

    adicionaCliente(novoCliente) {
        this.clientesDoBanco.push(novoCliente);
    }

    removeCliente(idCliente) {
        let clienteRemovido = false;

        for (let i = 0; i < this.clientesDoBanco.length; i++) {
            let cliente = this.clientesDoBanco[i];
            if (cliente.getId() === idCliente) {
                this.clientesDoBanco.splice(i, 1);
                clienteRemovido = true;
                break;
            }
        }

        return clienteRemovido;
    }

    clienteAtivo(idCliente) {
        let clienteAtivo = false;

        for (let cliente of this.clientesDoBanco) {
            if (cliente.getId() === idCliente) {
                if (cliente.isAtivo()) {
                    clienteAtivo = true;
                    break;
                }
            }
        }

        return clienteAtivo;
    }

    limpa() {
        this.clientesDoBanco = [];
    }

    validaIdade(idade) {
        if (idade < 18 || idade > 65)
            throw new Error("Idade inválida");
        return true;
    }
}

module.exports = GerenciadoraClientes;
