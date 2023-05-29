const btnsobre = document.getElementById('sobre');
const btnform = document.getElementById('form');
const btnobj = document.getElementById('obj');

const card = document.getElementById("card-um");
const card2 = document.getElementById("card-dois");
const card3 = document.getElementById("card-tres");

btnsobre.addEventListener('click', () => {
  if (card.style.display === 'none') {
    card.style.display = 'flex';
    card.style.justifyContent = "center";
    btnsobre.style.background = 'green';
    btnform.style.background = '#73beff';
    btnobj.style.background = '#73beff';
    card2.style.display = 'none';
    card3.style.display = 'none';
  } else {
    card.style.display = 'none';
    btnsobre.style.background = '#73beff';
  }
});

btnform.addEventListener('click', () => {
  if (card2.style.display === 'none') {
    card2.style.display = 'flex';
    card2.style.justifyContent = "center";
    btnform.style.background = 'green';
    btnsobre.style.background = '#73beff';
    btnobj.style.background = '#73beff';
    card.style.display = 'none';
    card3.style.display = 'none';
  } else {
    card2.style.display = 'none';
    btnform.style.background = '#73beff';
  }
});

btnobj.addEventListener('click', () => {
  if (card3.style.display === 'none') {
    card3.style.display = 'flex';
    card3.style.justifyContent = "center";
    btnobj.style.background = 'green';
    btnform.style.background = '#73beff';
    btnsobre.style.background = '#73beff';
    card.style.display = 'none';
    card2.style.display = 'none';
  } else {
    card3.style.display = 'none';
    btnobj.style.background = '#73beff';
  }
});

var botaoModoEscuro = document.getElementById("alternar-cor");
var body = document.body;
var art1 = document.getElementById("art1-sobre");
var habilidades = document.getElementById("habilidades");

botaoModoEscuro.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  art1.classList.toggle('art11');
  habilidades.classList.toggle('art12');
});