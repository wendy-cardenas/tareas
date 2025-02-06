import React, { useState } from "react";

const Formulario = ({ agregarTarea }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion) return; // No hacer nada si alguno está vacío
    agregarTarea({ nombre, descripcion, completada: false });
    setNombre(""); // Limpiar campo nombre
    setDescripcion(""); // Limpiar campo descripcion
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre de la tarea"
      />
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción de la tarea"
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default Formulario;
