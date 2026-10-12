//const express = require('express');
import express from "express";
import cors from "cors";
import morgan from "morgan";
class Server {
  constructor() {
    // definen las propiedades
    this.app = express();
    this.port = process.env.port || 3000; // puerto despues rceamos la variable de entorno en .env
  }
  // metodos de la clase
  middlewares() {
    //hay que configurar cors para permitir la comunicacion de diferentes dominios
    this.app.use(cors());
    this.app.use(morgan("dev")); //muestra por terminal informacion de la comunicacion http
    this.app.use(express.json()); // podemos leer los datos en formato json que llegan en el body del request
    //configurar un archivo estatico
  }
  listen() {
    this.app.listen(this.port, () => {
      console.info(`Servidor activo en http://localhost:${this.port}`);
    });
  }
}
export default Server;
