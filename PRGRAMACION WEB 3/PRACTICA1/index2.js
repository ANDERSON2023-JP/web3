//Crear una función que invierta el orden de las palabras en una frase.
function miFuncion(palabras){
  let NuevaPalabra= "";
  for(let i=palabras.length-1;i>=0;i--){
    NuevaPalabra +=palabras[i];
  }
  return NuevaPalabra;

}
let cad = miFuncion("abcd");
console.log(cad); 
