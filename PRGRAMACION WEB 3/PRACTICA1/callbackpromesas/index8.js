function saludo(callback) {
  console.log("hola mundoo");
  setTimeout(() => {
    callback();
  }, 2000); 
}
function despedida() {
  console.log("saludando 2 segundos");
};
saludo(despedida);