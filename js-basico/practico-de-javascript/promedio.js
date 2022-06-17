function calculoDeLaMediaAritmetica(lista) {
  let sumaLista = 0;
  for (i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }
  promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function contenerValores(conteo) {}

function agregarValor() {
  const input = document.getElementById('valoresApromediar');
  const valor = parseFloat(input.value);

  const lista = [];
  let listaAcumulada = lista.push(valor);

  document.getElementById('valoresApromediar').value = '';
  //document.getElementById('total').innerHTML = listaAcumulada;
  //document.getElementById('lista').innerHTML = lista;
}
