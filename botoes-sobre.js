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
var art1 = document.getElementById("art1-sobre");
var habilidades = document.getElementById("habilidades");

botaoModoEscuro.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});

botaoModoEscuro.addEventListener('click', function() {
  art1.classList.toggle('art11');
  habilidades.classList.toggle('art12');
});
