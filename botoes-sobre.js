const btnsobre = document.getElementById('sobre');
const btnform = document.getElementById('form');
const btnobj = document.getElementById('obj');

const card = document.getElementById("card-um");

btnsobre.addEventListener('click', () => {
  card.style.display = 'block';
  btnsobre.style.background = 'green';
});