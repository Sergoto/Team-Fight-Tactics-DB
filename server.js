const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("I'm working here!");
});

const PORT = process.env.PORT || 4022;

app.listen(PORT, () => {
  console.log(`Now live on ${PORT}`);
});
