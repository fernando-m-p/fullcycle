import Calculadora from "./calculadora"

describe("calculadora unit test", ()=>{
    it("Teste soma", ()=>{
        let calculadora = new Calculadora();
        calculadora.soma(1,5);
        expect(calculadora.getResultado()).toBe(6);
    })

    it("Teste subtracao", ()=>{
        let calculadora = new Calculadora();
        calculadora.subtracao(5,1);
        expect(calculadora.getResultado()).toBe(4);

    })
    it("Teste multiplicacao", ()=>{
        let calculadora = new Calculadora();
        calculadora.multiplicacao(5,4);
        expect(calculadora.getResultado()).toBe(20);

    })

})

