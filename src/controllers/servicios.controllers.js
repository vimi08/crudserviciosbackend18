import Servicio from "../models/servicio.js";

export const prueba = (req, res) => {
  console.log("prueba de mi primer controlador");
  res.status(200).json({ mensaje: "Primer controlador exitoso" });
};

export const crearServicio = async (req, res) => {
  try {
    console.log(req.body);
    const servicioNuevo = new Servicio(req.body);
    //guardar en labase de datos 
    await servicioNuevo.save();
    res.status(201).json({ mensaje: "Servicio creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al intentar crear el servicio" });
  }
};