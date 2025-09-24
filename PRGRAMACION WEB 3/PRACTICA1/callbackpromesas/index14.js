function sumarNumeros(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject("Ambos deben ser números");
    }
  });
}
function sumarConCallback(a, b, callback) {
  sumarNumeros(a, b)
    .then(resultado => callback(null, resultado)) 
    .catch(error => callback(error));           
}
sumarConCallback(5, 3, (error, resultado) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Resultado:", resultado);
  }
});
