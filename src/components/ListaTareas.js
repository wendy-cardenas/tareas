import React from "react";

const ListaTareas = ({ tareas, eliminarTarea, cambiarEstado }) => {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>
          <span style={{ textDecoration: tarea.completada ? "line-through" : "" }}>
            {tarea.nombre} - {tarea.descripcion}
          </span>
          <button onClick={() => cambiarEstado(index)}>
            {tarea.completada ? "Desmarcar" : "Marcar como Completada"}
          </button>
          <button onClick={() => eliminarTarea(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaTareas;
