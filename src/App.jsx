import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AgregarTarea } from "./components/AgregarTarea";
import { useTareas } from "./hooks/useTareas";
import { ListaTareas } from "./components/ListaTareas";
import { FcTodoList, FcCustomerSupport } from "react-icons/fc";

export const App = () => {
  const { guardarTarea, eliminarTarea, tareas, estadoTarea } = useTareas();

  return (
    <div className="contenedor">
      <header>
        <div className="header">
          <FcCustomerSupport size={40} />
          <h3 className="saludo">Hola!</h3>
        </div>
        <p className="aviso">
          Tienes {tareas.filter((tarea) => tarea.done == false).length}{" "}
          <span>{`${
            tareas.filter((tarea) => tarea.done == false).length == 1
              ? "tarea"
              : "tareas"
          }    `}</span>
          pendientes
        </p>
      </header>
      <div className="usuario">
        <h1>
          Lista de Tareas <FcTodoList size={40} />
        </h1>
      </div>

      <AgregarTarea guardarTarea={guardarTarea} />

      <div className="contenedor-lista-tareas">
        <div>
          <ListaTareas
            completada={false}
            tareas={tareas}
            eliminarTarea={eliminarTarea}
            estadoTarea={estadoTarea}
          />
        </div>

        <div>
          <ListaTareas
            completada={true}
            tareas={tareas}
            eliminarTarea={eliminarTarea}
            estadoTarea={estadoTarea}
          />
        </div>
      </div>
    </div>
  );
};
