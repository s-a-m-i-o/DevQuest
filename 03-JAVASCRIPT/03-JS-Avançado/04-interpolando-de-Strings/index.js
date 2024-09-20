// const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {
//     return "Primeiro nome: " + primeiroNome+ " Último Nome: " + ultimoNome+ ", Idade " + idade;
// }
// console.log(imprimirInformacoesPessoas ("Samio", "Azeredo", 34));

const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade. ${idade}`;
}
// console.log(imprimirInformacoesPessoas ("Samio", "Azeredo", 34));

console.log(`${imprimirInformacoesPessoas("Samio", "Azeredo", 34)} Vai ser um dos melhores Devs`);
console.log(`soma ${10+20}`); // tmb podemos fazer operações matemáticas