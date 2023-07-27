import React, { useState } from "react";
import "./styles.css/agregarTarea.css";
import Alert from "@mui/material/Alert";
export const AgregarTarea = ({ guardarTarea }) => {
  const [texto, settexto] = useState("");
  const [success, setSuccess] = useState();

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto == "") {
      setSuccess("false");
    } else {
      settexto(texto);
      guardarTarea(texto);
      setSuccess("true");
      settexto("");
    }
  };

  return (
    <div className="contenedor-formulario">
      <form className="formulario" onSubmit={manejarSubmit} action="">
        <input
          className="input"
          value={texto}
          onChange={(e) => settexto(e.target.value)}
          type="text"
        />
        <button className="boton-submit" type="submit">
          Agregar Tarea
        </button>

        {success == "true" ? (
          <Alert
            onClose={() => {
              setSuccess("");
            }}
            variant="outlined"
            severity="success"
          >
            Tarea creada con exito!
          </Alert>
        ) : success == "false" ? (
          <Alert
            onClose={() => {
              setSuccess("");
            }}
            variant="outlined"
            severity="error"
          >
            Por favor ingresar un texto!
          </Alert>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
