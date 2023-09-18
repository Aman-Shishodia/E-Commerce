const express = require("express");

const router = express.Router();

const Product = require("../Schema/productschema");

router.post("/addproduct", async (req, res) => {
  // console.log(req.body);
  try {
    const { productname, productprice, productimage, payment } = req.body;
    const data = await Product({
      productname,
      productprice,
      productimage,
      payment,
    }).save();
    // console.log(productname);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/orders",async(req,res)=>{
  try {
    const data = await Product.find({})
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router;
