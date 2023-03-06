window.addEventListener("load", function() {
  numAnimation(190880140, ".numbers-1");
  numAnimation(371882681, ".numbers-2");
  numAnimation(737187243, ".numbers-3");
  });
  
function numAnimation(valoreFinale, selettoreNumero) {
  let numeri = document.querySelectorAll(selettoreNumero);
  let count = 0;
  let differenza = valoreFinale - count;
  let incremento = differenza / 100;
  let interval = setInterval(function () {
    count += incremento;
    for (var i = 0; i < numeri.length; i++) {
      numeri[i].innerHTML = count.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (count >= valoreFinale) {
      clearInterval(interval);
      numeri[0].innerHTML = valoreFinale.toLocaleString();
    }
  }, 10);
}