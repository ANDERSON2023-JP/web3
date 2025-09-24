function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: id, nombre: "Anderson" });
    }, 1000);
  });
}

function obtenerPedidos(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Pedidos de ${usuario.nombre} obtenidos`);
      resolve(["Pedido 1", "Pedido 2", "Pedido 3"]);
    }, 1000);
  });
}

function obtenerDetallesPedido(pedido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Detalles de ${pedido} obtenidos`);
      resolve({ pedido: pedido, total: 100 });
    }, 1000);
  });
}
obtenerUsuario(1)
  .then((usuario) => {
    return obtenerPedidos(usuario).then((pedidos) => {
      return obtenerDetallesPedido(pedidos[0]).then((detalles) => {
        console.log("Detalles finales:", detalles);
      });
    });
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
