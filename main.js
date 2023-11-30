const alertcadastro = document.getElementById('alertcadastro')
const paineladmin = document.getElementById('admin')

/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const menu = document.getElementById('menulateral')
const mostrarmenu = document.getElementById('mostrarmenu')

    mostrarmenu.addEventListener('click', function () {
    menu.classList.toggle('show')
  })


/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('ul li')

for (const link of links) {
  link.addEventListener('click', function () {
    menu.classList.remove('show')
  })
}

/* alert compra quando clicar no botao comprar */
const botaocomprar = document.querySelector('comprar')
const alertcompra = document.getElementById('alertcompra')


function mostraralert() {
  alertcompra.classList.toggle('show')

  setTimeout(() => {
    alertcompra.classList.remove('show')
  }, 1000)
}

/* alert quando clicar no botao de filtrar A à Z */
const alertfiltro = document.getElementById('alertfiltro')

function mostraralertfiltro() {
  alertfiltro.classList.toggle('show')

  setTimeout(() => {
    alertfiltro.classList.remove('show')
  }, 3000)
}

/* botao filtrar por preço */
const fundo = document.getElementById('fundo')
const filtropreco = document.getElementById('filtropreco')
const botaofiltro = document.getElementById('botaofiltro')

botaofiltro.addEventListener('click', function () {
    fundo.classList.toggle('show')
    filtropreco.classList.toggle('show')
})

fundo.addEventListener('click', function () {
  fundo.classList.remove('show')
  filtropreco.classList.remove('show')
})

function sumirmenu() {
  fundo.classList.remove('show')
  filtropreco.classList.remove('show')
}


/* alert produto cadastrado */

function adicionarproduto() {
  paineladmin.classList.toggle('show')
}

function cadastrarproduto() {
  alertcadastro.classList.toggle('show')

  setTimeout(() => {
    alertcadastro.classList.remove('show')
  }, 3000)
}

function fecharpainel() {
  paineladmin.classList.remove('show')
}

/* FILTRAR */
 let produtos = {
  az: [
    `
      <div class="produto">
          <img src="/assets/images/produtos/acaicomfrutas.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Acaí com frutas</h2>
            <p class="descricao">(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 18,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/barcadeacai.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Barca de Açaí</h2>
            <p class="descricao">(Acaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 22,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/lanchedechurrasco.png" alt="">
        <div class="informacoes">
            <h2 class="titulo refrigerante">Lanche de Churrasco</h2>
            <p class="descricao">(Pão, hamburger, calabresa, iscas de carne, muçarela, cebola e picles)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 30,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>           

      <div class="produto">
            <img src="/assets/images/produtos/lanchexburguer.png" alt="">
        <div class="informacoes">
             <h2 class="titulo">Lanche X-Burguer</h2>
             <p class="descricao">(Pão, hamburguer, alface, tomate, queijo cheddar, cabeola e picles)</p>
        </div>
        <div class="comprar">
              <h2 class="titulo">R$ 22,00</h2>
              <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>
    
      <div class="produto">
              <img src="/assets/images/produtos/pizzademarguerita.png" alt="">
        <div class="informacoes">
              <h2 class="titulo pizza">Pizza de Marguerita</h2>
              <p class="descricao pizza">(Muçarela, tomate, manjericão, orégano)</p>
        </div>
        <div class="comprar">
              <h2 class="titulo">R$ 60,00</h2>
              <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
              <img src="/assets/images/produtos/pizzadestrogonofe.png" alt="">
        <div class="informacoes">
              <h2 class="titulo pizza strogonofe">Pizza de Strogonofe</h2>
              <p class="descricao pizza strogonofe">(Strogonofe, muçarela e orégano)</p>
        </div>
        <div class="comprar">
              <h2 class="titulo">R$ 65,00</h2>
              <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
              <img src="/assets/images/produtos/cocacola350ml.png" alt="">
        <div class="informacoes">
              <h2 class="titulo refrigerante">Refrigerante Coca-Cola 350ml</h2>
              <p class="descricao"></p>
        </div>
        <div class="comprar">
              <h2 class="titulo">R$ 6,00</h2>
              <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>  
      
      <div class="produto">
            <img src="/assets/images/produtos/cocacolazero350.png" alt="">
        <div class="informacoes">
            <h2 class="titulo refrigerante">Refrigerante Coca-Cola zero 350ml</h2>
            <p class="descricao"></p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 5,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/tortadeleiteninho.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Torta de Leite Ninho</h2>
            <p class="descricao">Massa de Baunilha; Creme de ninho Tradicional; Morango; Chantilly</p>
        </div> 
        <div class="comprar">
            <h2 class="titulo">R$ 70,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/tacadesonhovalsa.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Taça de sonho de valsa</h2>
            <p class="descricao">(Chocolate branco e preto, sonho de valsa, morango e leite condensado)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 15,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>
    `
    ],
    precoum: [
      `
      <div class="produto">
            <img src="/assets/images/produtos/cocacolazero350.png" alt="">
        <div class="informacoes">
            <h2 class="titulo refrigerante">Refrigerante Coca-Cola zero 350ml</h2>
            <p class="descricao"></p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 5,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>
    
      <div class="produto">
            <img src="/assets/images/produtos/cocacola350ml.png" alt="">
        <div class="informacoes">
            <h2 class="titulo refrigerante">Refrigerante Coca-Cola 350ml</h2>
            <p class="descricao"></p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 6,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/tacadesonhovalsa.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Taça de sonho de valsa</h2>
            <p class="descricao">(Chocolate branco e preto, sonho de valsa, morango e leite condensado)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 15,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>
          
      <div class="produto">
            <img src="/assets/images/produtos/acaicomfrutas.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Acaí com frutas</h2>
            <p class="descricao">(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 18,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/barcadeacai.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Barca de Açaí</h2>
            <p class="descricao">(Acaí, banana, morango, uva, leite ninho em pó e leite condensado)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 22,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/lanchexburguer.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Lanche X-Burguer</h2>
            <p class="descricao">(Pão, hamburguer, alface, tomate, queijo cheddar, cabeola e picles)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 22,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>
      `
    ],
    precodois: [
  `
      <div class="produto">
            <img src="/assets/images/produtos/lanchedechurrasco.png" alt="">
        <div class="informacoes">
            <h2 class="titulo refrigerante">Lanche de Churrasco</h2>
            <p class="descricao">(Pão, hamburger, calabresa, iscas de carne, muçarela, cebola e picles)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 30,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>     
  `
    ],
    precotres: [
      `
      <div class="produto">
            <img src="/assets/images/produtos/pizzademarguerita.png" alt="">
        <div class="informacoes">
            <h2 class="titulo pizza">Pizza de Marguerita</h2>
            <p class="descricao pizza">(Muçarela, tomate, manjericão, orégano)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 60,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/pizzadestrogonofe.png" alt="">
        <div class="informacoes">
            <h2 class="titulo pizza strogonofe">Pizza de Strogonofe</h2>
            <p class="descricao pizza strogonofe">(Strogonofe, muçarela e orégano)</p>
        </div>
        <div class="comprar">
            <h2 class="titulo">R$ 65,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>

      <div class="produto">
            <img src="/assets/images/produtos/tortadeleiteninho.png" alt="">
        <div class="informacoes">
            <h2 class="titulo">Torta de Leite Ninho</h2>
            <p class="descricao">Massa de Baunilha; Creme de ninho Tradicional; Morango; Chantilly</p>
        </div> 
        <div class="comprar">
            <h2 class="titulo">R$ 70,00</h2>
            <a class="botaocomprar" onclick="mostraralert()">Comprar</a>
        </div>
      </div>
      `
    ]
}

let products = {
    data: [
      {
        productName: "Pizza de Marquerita",
        description: "(Muçarela, tomate, manjericão, oréagno)",
        category: "Pizza",
        price: "60,00",
        image: "/assets/images/produtos/pizzademarguerita.png",
      },
      {
        productName: "Torta de Leite Ninho",
        description: "Massa de Baunilha, Creme de ninho Tradicional; Morango; Chantilly",
        category: "Sobremesa",
        price: "70,00",
        image: "/assets/images/produtos/tortadeleiteninho.png",
      },
      {
        productName: "Lanche X-Burguer",
        description: "(Pão, hamburger, alface, tomate, queijo cheddar, cebola e picles)",
        category: "Pastel",
        price: "22,00",
        image: "/assets/images/produtos/lanchexburguer.png",
      },
      {
        productName: "Pizza de Strogonofe",
        description: "(Strogonofe, muçarela e orégano)",
        category: "Pizza",
        price: "65,00",
        image: "/assets/images/produtos/pizzadestrogonofe.png",
      },
      {
        productName: "Açaí com frutas",
        description: "(Açaí, banana, morango, uva, leite ninho em pó e leite condensado)",
        category: "Açaí",
        price: "18,00",
        image: "/assets/images/produtos/acaicomfrutas.png",
      },
      {
        productName: "Refrigerante Coca-Cola 350ml",
        description: "",
        category: "Bebidas",
        price: "6,00",
        image: "/assets/images/produtos/cocacola350ml.png",
      },
      {
        productName: "Taça de sonho de valsa",
        description: "(Chocolate branco e preto, sonho de valsa, morango e leite condensado)",
        category: "Sobremesa",
        price: "15,00",
        image: "/assets/images/produtos/tacadesonhovalsa.png",
      },
      {
        productName: "Barca de Açaí",
        description: "(Açaí, banana, morango, uva, leite ninho em pó e leite condensado) ",
        category: "Açaí",
        price: "22,00",
        image: "/assets/images/produtos/barcadeacai.png",
      },
      {
        productName: "Refrigerante Coca-Cola zero 350ml",
        description: "",
        category: "Bebidas",
        price: "5,00",
        image: "/assets/images/produtos/cocacolazero350.png",
      },
      {
        productName: "Lanche de Churrasco", 
        description: "(Pão, hamburguer, calabresa, iscas de carne, muçarela, cebola e picles)",
        category: "Pastel",
        price: "30,00",
        image: "/assets/images/produtos/lanchedechurrasco.png",
      },
    ],
  };

  for(let i of products.data) {
    const produto = document.createElement("div")
    produto.classList.add("produto", i.category, "hide")

    /* Imagem */
    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    produto.appendChild(image)

    /* Div Informacoes */
    let informacoes = document.createElement("div")
    informacoes.classList.add("informacoes")

    /* Nome e Desricao */
    let nome = document.createElement("h2")
    nome.classList.add("titulo")
    nome.innerText = i.productName
    informacoes.appendChild(nome)

    let descricao = document.createElement("p")
    descricao.classList.add("descricao")
    descricao.innerText = i.description
    informacoes.appendChild(descricao)
    produto.appendChild(informacoes)

    /* Div Comprar */
    let comprar = document.createElement("div")
    comprar.classList.add("comprar")

    /* Preco e Botao Comprar */
    let preco = document.createElement("h2")
    preco.innerText = "R$" +  i.price
    preco.classList.add("titulo")
    comprar.appendChild(preco)

    let botaocomprar = document.createElement("a")
    botaocomprar.innerText = "Comprar"
    botaocomprar.classList.add("botaocomprar")
    botaocomprar.setAttribute("onclick", "mostraralert()")
    comprar.appendChild(botaocomprar)
    produto.appendChild(comprar)

    document.getElementById("produtos").appendChild(produto)
  }

  //parameter passed from button (Parameter same as category)
  const painelprodutos = document.getElementById('produtos')
  const produtosFiltro = document.getElementById('produtofiltro')

  function filtrarProduto(value) {
    //Button class code
    let buttons = document.querySelectorAll(".item-menu");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("selecionado");
      } else {
        button.classList.remove("selecionado");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".produto");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "Todos") {
        painelprodutos.classList.remove('hide')
        document.getElementById('produtofiltro').innerHTML = ""
        element.classList.remove("hide");
      } else {
          painelprodutos.classList.remove('hide')
          document.getElementById('produtofiltro').innerHTML = ""
          //Check if element contains category class
          if (element.classList.contains(value)) {
            //display element based on category
            element.classList.remove("hide");
          } else {
            //hide other elements
            element.classList.add("hide");
          }
        }
      
    });
  }

  //Initially display all products
  window.onload = () => {
    filtrarProduto("Todos");
  };

    function filtrarPrecoeAZ(valor) {
      painelprodutos.classList.add('hide')
  
      switch (valor) {
        case "AZ":
          produtosFiltro.innerHTML = produtos.az
          alertfiltro()
          break;
        
        case "5a25":
          produtosFiltro.innerHTML = produtos.precoum
          sumirmenu()
          break;
  
        case "26a45":
          produtosFiltro.innerHTML = produtos.precodois
          sumirmenu()
          break;
  
        case "46oumais":
          produtosFiltro.innerHTML = produtos.precotres
          sumirmenu()
          break;
  
        default:
          filtrarProduto("Todos");
          sumirmenu()
          break;
      }
    }
  