//variables y valores
/* var nombre = 'Juan Camilo Gomez';
console.log(nombre);
var edad;
edad = 28;
edad;
var elementos = ['computadora', 'celular', 'pantalla', 'playstation'];
console.log(elementos);
var persona = {
  nombre: 'Juan',
  edad: 30,
};
// funciones

saludarEstudiante('Camilo');

function saludarEstudiante(estudiante) {
  console.log('hola ' + estudiante);
}

saludarEstudiante('Juan');

// valores Truthy y Falsy

Boolean(0); // False
Boolean(1); // True
Boolean(NaN); // False
Boolean(undefined); // False
Boolean(''); // False
Boolean(' '); // True
Boolean([]); // True
Boolean({}); // True
Boolean(function () {}); // True

// condicionales

if (true) {
  console.log('hola soy un if verdadero');
}

if (false) {
  console.log('no aplico ');
} else {
  console.log('yo aplico por ser un if falso');
}

//ejemplo de if

var edad = 18;

if (edad === 18) {
  console.log('puedes votar');
} else if (edad > 18) {
  console.log('puedes votar');
} else {
  console.log('no puedes votar');
}

elementos.push('tablet');
console.log(elementos);

//ciclos
var estudiantes = [
  'juan',
  'camilo',
  'brenda',
  'geraldine',
  'luisa',
  'fernanda',
];
for (var i = 0; i < estudiantes.length; i++) {
  console.log('hola estudiante ' + estudiantes[i]);
}
console.log('aqui empieza while');
while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  console.log('hola estudiante ' + estudiante);
}

//objects

function ciudadano(nombre, edad, genero) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
}
var camilo = new ciudadano('camilo', 29, 'masculino');

console.log(camilo.nombre);

//metodos de recorridos de Arrays

//.filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.
//map : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//find: este metodo me permite encontrar y seleccionar un objeto de mi array este va a ser el primero de su tipo y solo se tomara ese vslor
// forEach este metodo me permite retornar de un array todo los elementes de un parametro  predeterminado de los obejtos en dicho array no me genera un nuevo array
// some este metodo es parecido a filter pero en ves de retornarme un array me retorna un booleano que me dice si existe  o no determinsdo elemento

var articulos = [
  { nombre: 'bici', costo: 3000 },
  { nombre: 'tv', costo: 2500 },
  { nombre: 'libro', costo: 320 },
  { nombre: 'celular', costo: 10000 },
  { nombre: 'laptop', costo: 20000 },
  { nombre: 'teclado', costo: 500 },
  { nombre: 'audifonos', costo: 1700 },
];

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

console.log(articulosFiltrados);

var nombresArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log(nombresArticulos);

var encontrarElemento = articulos.find(function (articulo) {
  return articulo.nombre === 'laptop';
});

console.log(encontrarElemento);

var paraCada = articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

var exiteArticulo = articulos.some(function (articulo) {
  return articulo.costo >= 700;
});

console.log(exiteArticulo);

1 = "1"


for (let i = 0; i < 5; i++) {
  console.log('El valor de i es: ' + i);
}

i = 0;
while (i < 5) {
  console.log('El valor de i es: ' + i);
  i++;
}

// ejemplo con funciones, array y objetos
// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
var estudiantes = [
  'juan',
  'camilo',
  'brenda',
  'geraldine',
  'luisa',
  'fernanda',
];
function retorno(primerElemento) {
  return console.log(primerElemento[0]);
}
retorno(estudiantes);


//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
var estudiantes = [
  'juan',
  'camilo',
  'brenda',
  'geraldine',
  'luisa',
  'fernanda',
];

function retorno(todosLosElementos) {
  for (var i = 0; i < todosLosElementos.length; i++) {
    console.log(todosLosElementos[i]);
  }
}
retorno(estudiantes);


//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var articulos = [
  { nombre: 'bici', costo: 3000 },
  { nombre: 'tv', costo: 2500 },
  { nombre: 'libro', costo: 320 },
  { nombre: 'celular', costo: 10000 },
  { nombre: 'laptop', costo: 20000 },
  { nombre: 'teclado', costo: 500 },
  { nombre: 'audifonos', costo: 1700 },
];

var inventario = articulos.forEach(function (articulos) {
  console.log('nombre: ' + articulos.nombre + ' costo: ' + articulos.costo);
});
*/
