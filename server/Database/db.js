const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/eccomerce")
  .then(() => console.log("DB Connect"))
  .catch((e) => {
    console.log(e);
  });
