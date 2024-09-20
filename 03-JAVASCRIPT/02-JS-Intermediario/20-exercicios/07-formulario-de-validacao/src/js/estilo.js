
const changeColor = (element) => {
    const input = element.target
    console.log(input)
    if (input.value?.trim()?.length<=3) {
        input.classList.add('red')
        input.classList.remove('green')

    }else  {
        input.classList.add('green')
        input.classList.remove('red')

    }
}

function addinputinvalidationEvent (input) {
    
    input.addEventListener ("blur", changeColor);

}
const formulario = document.querySelectorAll('input');

formulario.forEach(addinputinvalidationEvent);

// não entendi da linha 3  a 11
