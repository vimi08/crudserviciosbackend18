import { Router } from "express";
import serviciosRouter from "./servicios.routes.js";

const router = Router();

// Registrar las rutas de servicios
router.use("/servicios", serviciosRouter);

export default router;