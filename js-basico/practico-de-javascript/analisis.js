//helpers
//con esta funcion quiero saber si un numero es par o impar
function esPar(numero) {
  return numero % 2 === 0;
}

// Esta es mi funcion para calcular la media aritmetica
// (la funcion reduce me permite sumar valores que esten contenidos en un array)

function calcularMediaAritmerica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//con estas lineas de codigo lo que quiero es calcular mi (mediana) para cada una de las listas de salarios en cada pais

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const mitadUno = lista[mitad - 1];
    const mitadDos = lista[mitad];
    const mediana = calcularMediaAritmerica([mitadUno, mitadDos]);
    return mediana;
  } else {
    const mediana = lista[mitad];
    return mediana;
  }
}

// con  estas lineas de codigo lo que quiero es optener un array con los salarios
const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

// con estas lineas de codigo lo que quiero es optener una lista ordenada de menor a mayor en este caso los salarios
const salariosColSorted = salariosCol.sort(function (a, b) {
  return a - b;
});

const medianaGeneral = medianaSalarios(salariosColSorted);

// las lineas de codigo a continuacuion me permiten calcular el top 10% de salarios de mi nueva lista salariosColSorted
// para esto utilizamos el metodo (.slice)

//sliceStart es la posicion en la que empieza mi top 10
const sliceStart = (salariosColSorted.length * 90) / 100;
// sliceEnd es la posicion final de mi array
const sliceEnd = salariosColSorted.length;

const salariosTop10Slice = salariosColSorted.slice(sliceStart, sliceEnd);

const salariosTop10 = salariosTop10Slice.sort(function (a, b) {
  return a - b;
});

const medianaTop10 = medianaSalarios(salariosTop10);
