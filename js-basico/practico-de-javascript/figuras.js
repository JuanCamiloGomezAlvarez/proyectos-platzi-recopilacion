//console.log('hello, world!');

//calculando medidas en un cuadrado
/*
console.group('cuadrado');


const medida = prompt(
  'dame la medida de uno de los lados del cuadrado en centimetro: '
);

const ladoCuadrado = medida;
console.log('los lados de el cuadrado miden: ' + ladoCuadrado + 'cm');
*/

function perimetroCuadrado(medida) {
  return parseFloat(medida) * 4;
}

/*
perimetroCuadrado(medida);

console.log(
  'El perimetro del cuadrado es: ' + perimetroCuadrado(medida) + 'cm'
);
*/

function areaCuadrado(medida) {
  return medida * medida;
}

/*
console.log('El area del cuadrado es: ' + areaCuadrado(medida) + 'cm2');
console.groupEnd();
*/
//calculando medidas en un triangulo equilatero
/*
console.group('triangulo');


const ladoTriangulo1 = prompt(
  'ingresa la medidas de el lado 1 de el triangulo a calcular: '
);
const ladoTriangulo2 = prompt(
  'ingresa la medidas de el lado 2 de el triangulo a calcular: '
);
const ladoTriangulo3 = prompt(
  'ingresa la medidas de el lado 3(base) de el triangulo a calcular: '
);

console.log(
  'los lados del triangulo miden: lado uno: ' +
    ladoTriangulo1 +
    ' lado dos: ' +
    ladoTriangulo2 +
    ' lado tres: ' +
    ladoTriangulo3
);
*/

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3) {
  return (
    parseInt(ladoTriangulo1) +
    parseInt(ladoTriangulo2) +
    parseInt(ladoTriangulo3)
  );
}

/*
console.log(
  'El perimetro del triangulo mide: ' +
    perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3)
);
*/

const altura = Math.sqrt(
  ladoTriangulo1 * ladoTriangulo1 + ladoTriangulo3 * ladoTriangulo3
);
function areaTriangulo(ladoTriangulo3, altura) {
  return (ladoTriangulo3 + altura) / 2;
}
/*
console.log(
  'El area del triangulo mide: ' + areaTriangulo(ladoTriangulo3, altura)
);
console.groupEnd();

//calculando medidas de un circulo
console.group('Circulo');
//const radioCirculo = prompt('ingresa la medida del radio: ');
*/
const diametroCirculo = parseInt(radioCirculo) + parseInt(radioCirculo);
/*
console.log(
  'el radio del circulo mide ' +
    radioCirculo +
    ' y el diametro mide ' +
    diametroCirculo
);
*/
const PI = Math.PI;

function perimetroCirculo(radioCirculo) {
  return 2 * PI * radioCirculo;
}
function areaCirculo(radioCirculo) {
  return radioCirculo * radioCirculo * PI;
}
/*
console.log(
  'el perimetro del circulo es ' +
    perimetroCirculo(PI, radioCirculo) +
    ' el area del circulo es ' +
    areaCirculo(radioCirculo)
);
*/
//############################################33
//##############################################

//a continuacion crearemos las funciones que interactuaran con html

function calcularPerimetroCuadrado() {
  const input = document.getElementById('ladoCuadrado');
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  document.getElementById('resultadoCalculoPerimetro').innerHTML = perimetro;
}

function calcularAreaCuadrado() {
  const input = document.getElementById('ladoCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);
  document.getElementById('resultadoCalculoArea').innerHTML = area;
}

function alturaTrianguloIsosceles(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 != lado3) {
    const medioLado3 = lado3 / 2;
    const altura = Math.sqrt(medioLado3 * medioLado3 + lado2 * lado2);
    return altura;
  } else if (lado2 == lado3 && lado1 != lado2) {
    const medioLado1 = lado1 / 2;
    const altura = Math.sqrt(medioLado1 * medioLado1 + lado3 * lado3);
    return altura;
  } else if (lado1 == lado3 && lado1 != lado2) {
    const medioLado2 = lado2 / 2;
    const altura = Math.sqrt(medioLado2 * medioLado2 + lado1 * lado1);
    return altura;
  } else {
    const string = 'el triangulo no es isósceles';
    return string;
  }
}

function calcularAlturaTrianguloIsosceles() {
  const input1 = document.getElementById('ladosTrianguloIsosceles1');
  const value1 = parseFloat(input1.value);
  const input2 = document.getElementById('ladosTrianguloIsosceles2');
  const value2 = parseFloat(input2.value);
  const input3 = document.getElementById('ladosTrianguloIsosceles3');
  const value3 = parseFloat(input3.value);

  const alturaH = alturaTrianguloIsosceles(value1, value2, value3);
  document.getElementById(
    'resultadoCalculoAlturaTrianguloIsosceles'
  ).innerHTML = alturaH;
}
