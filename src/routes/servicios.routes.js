import { Router } from "express";
import { prueba } from "../controllers/servicios.controllers.js";
const router = Router();

router.get("/test", (req, res) => {
  console.log("Prueba de mi primer controlador");

  res.status(200).json({
    mensaje: "Primer controlador exitoso"
  });
});

export default router;