class Cliente {
    constructor(id, nome, idade, email, idContaCorrente, ativo) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.idContaCorrente = idContaCorrente;
        this.ativo = ativo;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getIdade() {
        return this.idade;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    isAtivo() {
        return this.ativo;
    }

    setAtivo(ativo) {
        this.ativo = ativo;
    }

    getIdContaCorrente() {
        return this.idContaCorrente;
    }

    setIdContaCorrente(idContaCorrente) {
        this.idContaCorrente = idContaCorrente;
    }

    toString() {
        let status = this.ativo ? "Ativo" : "Inativo";
        return `=========================
Id: ${this.id}
Nome: ${this.nome}
Email: ${this.email}
Idade: ${this.idade}
Status: ${status}
=========================`;
    }
}

module.exports = Cliente;
