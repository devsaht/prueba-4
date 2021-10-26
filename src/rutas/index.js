const express = require("express");
const router = express.Router();
const funciones = require("../public/main")

let resultado = {};

// Ruta para ingresar datos
router.get("/", async (req, res) => {
  res.render("index");
});

// Ruta para mostrar el resultado
router.get("/resultado", async (req, res) => {
  res.send(JSON.stringify(resultado));
});

// enviar la matriz de array, tipo post
router.post("/rotar", async (req, res) => {
  let { matriz } = req.body;
  resultado = funciones.conversion(matriz);
  res.send(JSON.stringify(resultado));
});

// exportar las rutas
module.exports = router;
