const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Service started at http://localhost:${port}`);
});
