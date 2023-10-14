// Quando o usuário rola para baixo 20px do topo, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role suavemente para o topo
function topFunction() {
  // Velocidade de rolagem em pixels por segundo (quanto menor, mais lento)
  var scrollSpeed = 15;
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, currentScroll - currentScroll / scrollSpeed);
  }
}
