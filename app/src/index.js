const express = require("express");
const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello123",
  });
});
app.listen(port);
