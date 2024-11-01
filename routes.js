const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
router.get("/preguntas-frecuentes", (req, res) => {
  res.sendFile(__dirname + "/public/faq.html");
});
router.get("/participa", (req, res) => {
  res.sendFile(__dirname + "/public/registro.html");
});
router.get("/coc", (req, res) => {
  res.sendFile(__dirname + "/public/codigo.html");
});
module.exports = router;
