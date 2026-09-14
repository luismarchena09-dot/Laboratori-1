function procesarPublicacion(publicacion) {
  if (!publicacion || typeof publicacion !== 'object') {
    console.error("Error: Entrada nula o tipo de dato incorrecto");
    return;
  }

  let titulo = publicacion.title;
  console.log("Procesando publicación:", titulo);
}

procesarPublicacion({ title: "Prueba de laboratorio" });