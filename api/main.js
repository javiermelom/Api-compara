import { consumirApi, comparar } from "./controllers/controllers.js";
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
const btn = document.getElementById("send");
consumirApi().then(function (dataParseada) {
  dataParseada.forEach((opcion) => {
    op1.innerHTML += `<option value = "${opcion}">${opcion}</option>`;
    op2.innerHTML += `<option value = "${opcion}">${opcion}</option>`;
  });
});
btn.addEventListener("click", function (event) {
  event.preventDefault();
  let opc1 = op1.value;
  let opc2 = op2.value;
  comparar(opc1, opc2).then(function (dataCompare){
    let resultado = document.getElementById("result");
    resultado.innerHTML = `El ganador es: ${dataCompare.winner}`;
  })
});