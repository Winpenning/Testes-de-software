const GerenciadoraContas = require('../src/GerenciadoraContas')
const ContaCorrente = require('../src/ContaCorrente')

/*
* @author Paulo Henrique Ziemer dos Santos
* @chavePIX 47996592913
*/

describe('Testes da classe gerenciadora de contas', ()=>{
    test("Transfere valor",()=>{
        const contasDoBanco = [];
        const conta01 = new ContaCorrente(1, 150, true);
        const conta02 = new ContaCorrente(2, 20, true);
        contasDoBanco.push(conta01);
        contasDoBanco.push(conta02);

        gerConta = new GerenciadoraContas(contasDoBanco)

        const conta = gerConta.transfereValor(1,50,2)
        

        expect(conta).toBe(true);
        expect(gerConta.pesquisaConta(2).getSaldo()).toBe(70)
        expect(gerConta.pesquisaConta(1).getSaldo()).toBe(100)
    })
})