// No cambies los nombres de las funciones.

//for, es una herramienta que te permite ir elemento por elemento de por ejemplo una serie de numeros, 
// o ir caracter por carcter de un string. lo que te permite es tomar ese elemento y hacer algo con el 
//como por ejemplo imprimerolo en pantalla, tabien podes dependiendo si son numeros hacer operaciones 
// o simplemente modificarlo.

// && || !, son operadores logicos esto quiere decir que operan sobre la veracidad de dos premisas
// (en el caso de && ||) y en el caso de NOT (!) cambia el valor de verdad de una premisa o varias 
// && como en lo coloquial para que algo suceda o sea verdadero las dos premisas deben ser verdaderas,
// por ejemplo que tu mama o papa te diga si haces tu tarea Y limpias tu habitacion ENTONCES
//podras salir para que poder salir sea verdadero las dos premisas como condicion tienen que ser verdaderas
// || (o) en cambio en 'o' alguna de las dos tiene que ser verdadero solamente.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x===y){return x}
  {return Math.max(x,y)}
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma=='aleman'){return "Guten Tag!"}
  else if (idioma=='mandarin'){return "Ni Hao!"}
  else if (idioma=="ingles"){return "Hello!"}
  {return "Hola!"}
  
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero==5 || numero == 10){return true}
    {return false}
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero<50 && numero>20){return true}
  return false
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var checkea_int = Math.round(numero)
  if(numero===checkea_int){return true}
  return false

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if(numero%5===0 && numero%3==0){return "fizzbuzz"}
  else if (numero%3===0){return 'fizz'}
  else if (numero%5===0){return 'buzz'}
  return numero
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero > 2)return false;
  if (numero === 2) return true;
  for (let i = 2 ; i< numero ; i ++) {
    if (numero % i === 0){
      return false;
    }
  }
  return true;
} 
    

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
