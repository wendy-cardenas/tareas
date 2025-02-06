import React, { useState } from "react";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";

const App = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  const cambiarEstado = (index) => {
    const nuevasTareas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <Formulario agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        cambiarEstado={cambiarEstado}
      />
    </div>
  );
};

export default App;
