import express from "express";
import mongoose from "mongoose";
import taskRouter from "../routes/tareas.js";
class Server {
  constructor() {
    this.app = express();
    this.port = 8080;
    this.tareasPath = "/app";
    this.dbConection();
    this.middlewares();
    this.routes();
  }

  // Middlewares

  middlewares() {
    this.app.use(express.json());
  }

  // conexion BD

  async dbConection() {
    try {
      await mongoose.connect(
        "mongodb+srv://ricardocg21:nokia3220@todolistcluster.vquhm4o.mongodb.net/"
      );
      console.log("conexion exitosa");
    } catch (error) {
      console.log("no se pudo conectar a la base de datos");
    }
  }

  // rutas de la aplicacion
  routes() {
    this.app.use(this.tareasPath, taskRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(` servidor ${this.port} en linea `);
    });
  }
}

export default Server;
