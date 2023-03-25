let receitas = [
    {
      titulo: "Torta Alemã",
      imagem: "torta.jpeg",
      preparo: "Junte os ingredientes para fazer o creme. Depois, em um pote, alterne entre biscoito e creme. Finalize com o chocolate derretido.",
      ingredientes: ["Creme de leite", "Gemas", "Açúcar", "Manteiga", "Biscoito", "Chocolate"]
    },
    {
      titulo: "Pudim",
      imagem: "pudim.jpg",
      preparo: "Acrescente o leite condensado, o leite e os ovos no liquidificador. Após misturar bem, reserve na geladeira com o açucar caramelizado em uma forma de pudim. Assim que esfriar, estará pronto.",
      ingredientes: ["Leite Condensado", "Leite Integral", "Ovos", "Açucar (calda)", "Água (calda)"]
    },
    {
      titulo: "Panqueca",
      imagem: "panqueca.jpg",
      preparo: "Misture todos os ingredientes, despeje em uma frigideira quente e vire a panqueca após criar bolhas. Depois é só servir com alguma calda",
      ingredientes: ["Farinha", "Leite", "Ovos", "Açúcar", "Fermento", "Pitada de Sal"]
    }
  ];

function ingredientes(receita) {
let listaHTML = "<ul>";
listaHTML += receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((a, b) => a + b);
listaHTML += "</ul>";
return listaHTML;
}

function getCard(receita) {
    return `
      <div class='card' style='width: 250px'>
        <img src='${receita.imagem}' class='card-img-top'>
        <div class='card-body'>
          <h5 class='card-title'>${receita.titulo}</h5>
          <div class='card-text'>
            ${ingredientes(receita.ingredientes)}
            <hr>
            ${receita.preparo}
          </div>
        </div>
      </div>
    `;
  }  
    
function catalogo() {
let pnlCatalogo = document.getElementById("pnlCatalogo");
let catalogoHTML = receitas.map(receita => getCard(receita)).reduce((a, b) => a + b, "");
pnlCatalogo.innerHTML = catalogoHTML;
}

window.onload = function() {
catalogo();
}