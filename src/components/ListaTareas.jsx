import React from "react";
import { Tarea } from "./Tarea";

export const ListaTareas = ({
  tareas,
  eliminarTarea,
  estadoTarea,
  completada,
}) => {
  return (
    <div className="lista-tareas">
      <Tarea
        eliminarTarea={eliminarTarea}
        estadoTarea={estadoTarea}
        tareas={tareas}
        completada={completada}
      />
    </div>
  );
};
