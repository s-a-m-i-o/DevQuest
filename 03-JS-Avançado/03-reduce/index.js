let ordens = [
    {cliente: "Samio", tipo:"compra", quantidade:56, ativo: "NFLX32" },
    {cliente: "Ricardo", tipo:"compra", quantidade:76, ativo: "AAPL34" },
    {cliente: "Roberto", tipo:"venda", quantidade:21, ativo: "GOGL34" },
]

// let quantidadeDeOrdens = 0
// for(let i = 0; i <ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log("A soma de todos é " + quantidadeDeOrdens);

let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => somaDasOrdens + ordem.quantidade
,0)

console.log(quantidadeDeOrdens);