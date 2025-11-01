const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Статикалық файлдарды қосу (CSS, сурет, т.б.)
app.use(express.static(path.join(__dirname, "public")));

// Негізгі бет
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Серверді іске қосу
app.listen(PORT, () => {
  console.log(`✅ Сервер жұмыс істеп тұр: http://localhost:${PORT}`);
});
