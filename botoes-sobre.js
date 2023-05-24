const btnsobre = document.getElementById('sobre');
const btnform = document.getElementById('form');
const btnobj = document.getElementById('obj');

const card = document.getElementById("card-um");

btnsobre.addEventListener('click', () => {
  card.style.display = 'block';
  btnsobre.style.background = 'green';
});

var botaoModoEscuro = document.getElementById("alternar-cor");
var body = document.body;

botaoModoEscuro.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});
