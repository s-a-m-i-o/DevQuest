console.log(document) //DOCUMENTO TODO

let p = document.getElementById('paragrafo1')

console.log(p)

let inputsPorClasse = document.getElementsByClassName('tag-de-input');

console.log(inputsPorClasse[0])

let inputPorTag = document.getElementsByTagName('input')

console.log(inputPorTag)

let inputPorName = document.querySelectorAll("input[name='email']");

console.log(inputPorName[1])