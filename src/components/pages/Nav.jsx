import "./pages-styles/Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav-contenedor">
      <nav className="navegacion">
        <Link id="about" to="about">
          About
        </Link>

        <Link id="app" to="app">
          App
        </Link>
      </nav>

      <div className="logout">
        <Link id="logout-link" to="/">
          Logout
        </Link>
      </div>
    </div>
  );
};
