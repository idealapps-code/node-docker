const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Backend endpoint");
});

app.set("trust proxy", true);

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
