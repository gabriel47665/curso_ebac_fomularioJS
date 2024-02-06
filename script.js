function validarFormulario() {
  var valorA = parseFloat(document.getElementById("campoA").value);
  var valorB = parseFloat(document.getElementById("campoB").value);

  if (valorB > valorA) {
    document.getElementById("mensagem").innerHTML = "Formulário válido!";
    document.getElementById("mensagem").style.color = "green";
  } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido! Campo B deve ser maior que o campo A.";
    document.getElementById("mensagem").style.color = "red";
  }
}