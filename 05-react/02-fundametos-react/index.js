const root = document.getElementById("root"); // o roort esta pegando o elemento do HTML e guardadndo na variavel ROOT

const p = React.createElement("p", null, "Olá Mundo!!!") // Está criando um paragrafo que contenha o elemento olá mundo ( o primeiro argumento é o tipo de elemento, aqui o "p", o sugundo são os atributos, como não tem nenhum colocamos null, e o terceito é o conteudo do elemento  )

const reactRoot = ReactDOM.createRoot(root); // Está criando a raiz do elemento e associando a raiz do HTML

reactRoot.render(p) //Está rendenizando do o elemento p no html