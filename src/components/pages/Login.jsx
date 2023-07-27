import React from "react";
import { useNavigate } from "react-router-dom";
import "./pages-styles/login.css";
import img from "./img.svg";
export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="contenedor-login">
      <div className="landing">
        <h1 id="loginh1">Bienvenido a tu App de tareas</h1>
        <p id="loginp">
          Está aplicación será tu compañera durante tu día a día. No dejes que
          se te escape nada... Acá te ayudamos!
        </p>
        <div>
          <button
            className="boton"
            onClick={() => {
              navigate("app");
            }}
          >
            Comenzar
          </button>
        </div>
      </div>
      <div className="landing2">
        <div id="circulo">
          <img id="img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
