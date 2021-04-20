const { mediaIntersecao, numeroPerfeito } = require('./../index')
describe('Testes do arquivo index.js', () => {
    // Função numeroPerfeito
    it('numeroPerfeito - Deve retornar null quando receber numero null', () => {
        expect(numeroPerfeito(null)).toEqual(null)
    })

    it('numeroPerfeito - Deve retornar true quando receber numero 28', () => {
        expect(numeroPerfeito(28)).toEqual(true)
    })

    it('numeroPerfeito - Deve retornar false quando receber numero 27', () => {
        expect(numeroPerfeito(27)).toEqual(false)
    })

    // Função mediaIntersecao
    it('mediaIntersecao - Deve retornar null quando receber vetores null', () => {
        expect(mediaIntersecao(null, null)).toEqual(null)
    })

    it('mediaIntersecao - Deve retornar 5 quando receber vetores que só tem o valor 5 como em comum', () => {
        expect(mediaIntersecao([19, 5, 2, 6], [5, 0, 9, 4, 18, 56])).toEqual(5)
    })

    it('mediaIntersecao - Deve retornar 2 quando receber vetores que só tem os valores 3 e 1 como em comum', () => {
        expect(mediaIntersecao([1, 3, 2, 6], [7, 0, 9, 4, 3, 1])).toEqual(2)
    })

    it('mediaIntersecao - Deve retornar 2 quando receber vetores que não possuem valores em comum', () => {
        expect(mediaIntersecao([11, 33, 2, 6], [7, 0, 9, 4, 3, 1])).toEqual(0)
    })
})
