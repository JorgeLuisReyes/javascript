/**
 * Comentar el código
 * 
 * Comentar el código es una de las caracteristicas más importantes que debes adoptar temprano en tu carrer acomo programador.
 * 
 * Muchas personas dicen que el buen código habla por si solo, decir algo asi es como decir que un buen libro es cuando sabes en que página y que parrafo esta una frase, podrás recordarlo a la semana o al mes, pero no lo vas a recordar en 6 meses o un año.
 * 
 * Existen 2 tipos de comentarios, de una linea o de múltiples lineas.
 */

/** 
 * Comentar
 * multiples
 * lineas
 */

// Comentar una linea

// Todos los navegadores tienen una consola de Javascript, las mejores sin duda son firefox y Chrome
// La consola es muy útil ya que podrás observar tu código JS, resultados y seleccionar elementos

/**
 * Impreme por cpnsola hola mundo
 */
console.log(`hola mundo`);

/**
 * Se pueden crear variables hola e imprimirlas su contenido en la consola
 */
const hola = "Hola desde la consola";
console.log(hola);

/**
 * También se pueden crear arreglos
 */
console.log([1, 2, 3, 4]);

/**
 * De la misma forma se pueden crear objetos
 */
let obj = { nombre: "juan", profesion: "Desarrollador Web" }
console.log( obj );

/**
 * También se pueden imprimir resultados como tabla
 */
console.table([1, 2, 3, 4]);

/**
 * o mostrar algún error
 */
console.error("Algo salió mal");

/**
 * O enviar advertencias
 */
console.warn("Eso no esta permitido");

/**
 * Limpiar la consola
 */
 console.clear();

/**
 * JavaScript tiene una caracteristica, a diferencia de otros lenguajes de programación el ; al final  no es obligatorio salvo que tengas 2 líneas de código en una misma.
 * 
 * ejemplo:
 */
console.log('Hola ')
console.log('Mundo 1')

/**
 * va a funcionar, pero si tienes un código desordenado; no va a funcionar salvo que pongas ; 
 */
console.log('Hola '); console.log('Mundo 2');

/**
 * Como recomendación siempre pon una instrucción por linea, no es obligatorio salvo el caso que vimos anteriormente pero va a facilitar mucho tu código.
 */