//
function calculoPorcentajeDescuento(valor, descuento, cupon) {
  const descuentoCupon = 100 - cupon;
  const descuentoAplicado = 100 - descuento;
  const sumaDescuentos = descuentoCupon + descuentoAplicado;
  const valorFinal = (valor * sumaDescuentos) / 100;
  return valorFinal;
}

function porcentejeDescuento() {
  const input1 = document.getElementById('totalOriginalProducto');
  const valor = parseFloat(input1.value);

  inputCupon = document.getElementById;

  const input2 = document.getElementById('descuentoProducto');
  const descuento = parseFloat(input2.value);

  const retorno = calculoPorcentajeDescuento(valor, descuento);

  document.getElementById('valorFinalDeseado').innerHTML = retorno;
}
