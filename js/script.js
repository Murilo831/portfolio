function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("overlay").style.display = "none";
}

/* Gera o texto automatico */

document.addEventListener("DOMContentLoaded", function() {
  var codeElement = document.getElementById('code');
  if (!codeElement) return; // Se o elemento não existir, saia da função

  var code = `// Código de exemplo
function sayHello() {
  console.log('Hello, world!');
}

sayHello();`;

  var i = 0;
  var speed = 50; // Velocidade de digitação em milissegundos

  function typeCode() {
      if (i < code.length) {
          codeElement.innerHTML += code.charAt(i);
          i++;
          setTimeout(typeCode, speed);
      }
  }

  typeCode(); // Inicia a função de digitação
});

/*
 JS to toggle scroll axis styles
*/
const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});




