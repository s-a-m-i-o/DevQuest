let selectDeEstado = document.querySelector("select[name='estado']");

selectDeEstado.addEventListener('change', function (){
    alert('Mudou o select')
})

console.log(selectDeEstado)