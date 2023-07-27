import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const recuperarTareas = () => {
  let data = localStorage.getItem("tareas");
  if (data) {
    return JSON.parse(localStorage.getItem("tareas"));
  } else {
    return [];
  }
};

export const useTareas = () => {
  const [tareas, settareas] = useState(recuperarTareas());

  const guardarTarea = (texto) => {
    settareas([...tareas, { id: uuidv4(), name: texto, done: false }]);
  };

  const eliminarTarea = (id) => {
    settareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const estadoTarea = (id) => {
    settareas(
      tareas.map((tarea) =>
        tarea.id == id ? { ...tarea, done: !tarea.done } : tarea
      )
    );
  };

  useEffect(() => {
    window.localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return {
    guardarTarea,
    eliminarTarea,
    estadoTarea,
    tareas,
  };
};
