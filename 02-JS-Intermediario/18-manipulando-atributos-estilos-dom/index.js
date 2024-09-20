function alterarCorFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');

    console.log(posts)

    let primeiroPost = posts[0];
    console.log('primeiroPost', primeiroPost)
    primeiroPost.style.backgroundColor = 'red';
    primeiroPost.style.color = '#fff'


  }

  function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('fonte-grande')

    console.log(textoPosts[1].classList)
  }

  function diminuirFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post');

    textoPosts[1].classList.add('fonte-pequena')
  }
  

  function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino');

    let radioFeminino = document.getElementById('genero-feminino');

    if(genero === 'M'){
      radioMasculino.checked = true;
    } else if(genero ==='F'){
      radioFeminino.checked = true;
    }
  }
  