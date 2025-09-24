function tarea(ms, nombre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(nombre + " completada");
      resolve();
    }, ms);
  });
}
async function ejecutarTareas() {
  await tarea(1000, "Tarea 1");
  await tarea(1000, "Tarea 2");
  await tarea(1000, "Tarea 3");
  console.log("Todas las tareas completadas");
}
ejecutarTareas();
