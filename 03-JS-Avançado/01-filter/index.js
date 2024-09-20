let pessoas = [
    {nome:"Samio", idade: 33},
    {nome:"Jayne", idade: 27},
    {nome:"Alguem", idade: 33}
]

// let pessoasComIdadeDe33Anos = []
// for(let i = 0; i < pessoas.length; i++) {
//     if(pessoas[i].idade === 33){
//         pessoasComIdadeDe33Anos.push(pessoas[i])
//     }
// };

// console.log(pessoasComIdadeDe33Anos);

let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)

console.log(pessoasComIdadeDe33Anos);