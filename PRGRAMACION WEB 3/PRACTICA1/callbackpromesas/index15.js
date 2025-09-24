function obtenerDatos(callback) {
  setTimeout(() => {
    const exito = true;
    if (exito) {
      callback(null, "Datos obtenidos correctamente");
    } else {
      callback("Error al obtener datos");
    }
  }, 1000);
}
obtenerDatos((error, datos) => {
  if (error) {
    console.error(error);
  } else {
    console.log(datos);
  }
});
