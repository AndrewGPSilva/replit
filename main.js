const text = "ANDREW"; // Insira seu nome aqui
const delay = 300; // Delay em milissegundos entre cada caractere

let i = 0;
const typingEffect = () => {
  if (i < text.length) {
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, delay);
  }
};

typingEffect();
