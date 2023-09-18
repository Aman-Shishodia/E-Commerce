const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 6002;

const userrouter = require("./Router/userrouter");
const productrouter = require("./Router/productrouter");

require("./Database/db");

app.use(cors());
app.use(express.json());
app.use(userrouter);
app.use(productrouter);

app.get("/", (req, res) => {
  res.send("helo");
});

app.listen(PORT, () => {
  console.log(`Server runs on PORT ${PORT}`);
});
