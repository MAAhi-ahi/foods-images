const express = require("express");
const path = require("path");

const app = express();
const PORT = 30010;

app.use("/burger", express.static(path.join(__dirname, "public/burger")));
app.use("/pizza", express.static(path.join(__dirname, "public/pizza")));
app.use("/tacobar", express.static(path.join(__dirname, "public/tacobar")));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
