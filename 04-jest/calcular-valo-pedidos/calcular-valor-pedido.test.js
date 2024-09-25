const { it } = require("node:test");
const calcularValorPedido =require("./calcular-valor-pedido");


it("Não deve cobrar valor de frete quando valor dos produtos for superior a 500", () => {
    //AAA - 3 passos de criação de um teste

    //ARANGE - arrumar / organizar - OBJETO DE TESTE
    const meuPedido = {
        itens: [
            { nome: "Arco encantado", valor:2000},
            { nome: "Entrega", valor:100, entrega: true}
        ]
    }
    //ACT - ação - o que queremos testar
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT - asserção - resultado esperado
    expect(resultado).toBe(2000)
})

it("deve cobrar valor de frete quando valor dos produtos for menor que 500", () =>{
    //ARANGE
    const meuPedido = {
        itens: [
            { nome: "Sanduiche", valor:50},
            { nome: "Entrega", valor:100, entrega: true}
        ]
    };

    //ACT
    const resultado = calcularValorPedido(meuPedido);

    //ASSERT
    expect(resultado).toBe(150);
});

it("Deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500", () =>{
    const meuPedido = {
        itens: [
            { nome: "Sanduiche bem caro", valor:500},
            { nome: "Entrega", valor:100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600);
});

//CASO OS ESTADOR DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESSCIDO UM VALOR DE 30% NA ENRREGA
it("deve adicionar um acrescimo de20% no valor da entrega do pedido caso o estado seja RS", () => {
    const pedidoComEstadoRs = {
        estado: "RS",
        itens: [
            { nome: "Sanduiche bem caro", valor:500},
            { nome: "Entrega", valor:120, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRs);

    expect(resultado).toBe(620);
})

it(" deve adicionar um acrescimo de20% no valor da entrega do pedido caso o estado seja RS", () => {
    const pedidoComEstadoSC = {
        estado: "SC",
        itens: [
            { nome: "Sanduiche bem caro", valor:500},
            { nome: "Entrega", valor:120, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620);
});

it("Não deve adicionar um acrescimo de20% no valor da entrega do pedido caso o estado seja RS", () => {
    const pedidoComEstadoSP = {
        estado: "SC",
        itens: [
            { nome: "Sanduiche bem caro", valor:500},
            { nome: "Entrega", valor:100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600);
});