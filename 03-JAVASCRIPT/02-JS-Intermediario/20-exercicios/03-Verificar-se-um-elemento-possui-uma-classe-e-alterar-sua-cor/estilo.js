const quadrado = document.querySelector('.quadrado');
quadrado.addEventListener('click', () => {
    classAzul = quadrado.classList.contains('azul');
    if (classAzul) {
        quadrado.classList.remove("azul");
    }else {
        quadrado.classList.add("azul");
    }
})

