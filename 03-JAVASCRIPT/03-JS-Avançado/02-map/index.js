let pessoas = [
    {nome:"Samio", idade: 33},
    {nome:"Jayne", idade: 27},
    {nome:"Alguem", idade: 33}
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas);

let nomeDasPessoas =  pessoas.map((pessoa) => pessoa.nome + " tem " + pessoa.idade + " anos de idade"
)

console.log(nomeDasPessoas);