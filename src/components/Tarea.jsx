import React from "react";
import "./styles.css/tarea.css";
import { FcFullTrash } from "react-icons/fc";

export const Tarea = ({ tareas, eliminarTarea, estadoTarea, completada }) => {
  return (
    <>
      {tareas
        .filter((tarea) => tarea.done === completada)
        .map((tarea) => (
          <div className="tarea" key={tarea.id}>
            <FcFullTrash
              className="delete"
              size={25}
              onClick={() => eliminarTarea(tarea.id)}
            />

            <input
              checked={tarea.done}
              onChange={() => estadoTarea(tarea.id)}
              type="checkbox"
            />
            <h5 className={`${tarea.done == true ? "completada" : null}`}>
              {tarea.name}
            </h5>
          </div>
        ))}
    </>
  );
};
