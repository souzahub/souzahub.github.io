// Quando o usuário rola para baixo 20px do topo, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role para o topo
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
