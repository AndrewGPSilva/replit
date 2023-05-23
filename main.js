const text = "ANDREW SILVA";
const delay = 300;

let i = 0;
const typingEffect = () => {
  if (i < text.length) {
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, delay);
  }
};

typingEffect();
