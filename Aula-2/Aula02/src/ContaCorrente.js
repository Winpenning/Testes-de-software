class ContaCorrente {
    constructor(id, saldo, ativa) {
        this.id = id;
        this.saldo = saldo;
        this.ativa = ativa;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }

    isAtiva() {
        return this.ativa;
    }

    setAtiva(ativa) {
        this.ativa = ativa;
    }

    toString() {
        let status = this.ativa ? "Ativa" : "Inativa";
        return `=========================
Id: ${this.id}
Saldo: ${this.saldo}
Status: ${status}
=========================`;
    }
}

module.exports = ContaCorrente;
