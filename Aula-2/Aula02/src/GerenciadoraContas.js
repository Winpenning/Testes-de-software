class GerenciadoraContas {
    constructor(contasDoBanco) {
        this.contasDoBanco = contasDoBanco;
    }

    getContasDoBanco() {
        return this.contasDoBanco;
    }

    pesquisaConta(idConta) {
        for (let contaCorrente of this.contasDoBanco) {
            if (contaCorrente.getId() === idConta)
                return contaCorrente;
        }
        return null;
    }

    adicionaConta(novaConta) {
        this.contasDoBanco.push(novaConta);
    }

    removeConta(idConta) {
        for (let i = 0; i < this.contasDoBanco.length; i++) {
            let conta = this.contasDoBanco[i];
            if (conta.getId() === idConta) {
                this.contasDoBanco.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    contaAtiva(idConta) {
        for (let conta of this.contasDoBanco) {
            if (conta.getId() === idConta && conta.isAtiva()) {
                return true;
            }
        }
        return false;
    }

    transfereValor(idContaOrigem, valor, idContaDestino) {
        let contaOrigem = this.pesquisaConta(idContaOrigem);
        let contaDestino = this.pesquisaConta(idContaDestino);

        if (!contaOrigem || !contaDestino) {
            return false;
        }

        if (contaOrigem.getSaldo() >= valor) {
            contaOrigem.setSaldo(contaOrigem.getSaldo() - valor);
            contaDestino.setSaldo(contaDestino.getSaldo() + valor);
            return true;
        }

        return false;
    }
}

module.exports = GerenciadoraContas;
