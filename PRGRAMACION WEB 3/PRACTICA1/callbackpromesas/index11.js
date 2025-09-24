function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: id, nombre: "Anderson" });
    }, 1000);
  });
}
function obtenerPedidos(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Pedidos de ${usuario.nombre} obtenidos`);
      resolve(["Pedido 1", "Pedido 2", "Pedido 3"]);
    }, 1000);
  });
}
obtenerUsuario(1)
  .then((usuario) => {
    return obtenerPedidos(usuario);
  })
  .then((pedidos) => {
    console.log("Lista de pedidos:", pedidos);
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
