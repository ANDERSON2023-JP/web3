//Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés).
//let band = miFuncion(“oruro”)
//console.log(band) // true
//let band = miFuncion(“hola”)
//console.log(band) // false
function miFuncion(cadena) {
  let reverso = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    reverso += cadena[i];
  }
  return cadena === reverso;
}
let band1 = miFuncion("oruro");
console.log(band1);
let band2 = miFuncion("hola");
console.log(band2); 