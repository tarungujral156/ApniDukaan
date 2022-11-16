import express from "express";
import signUpTemplate from "../models/signupModels.js";
import productTemplate from "../models/ProductModel.js";
// import path from 'path';
// import url from 'url';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const router = express.Router();

/* ------------------------------------------ SEND HOME PAGE AS RESPONSE ON GET REQUEST ------------------------------------------ */

// router
//   .get("/", (req, res) => {
//     console.log(    );
//   })
//   .post("/", (req, res) => {});

/* ------------------------------------------ ROUTE FOR USER SIGNUP  ------------------------------------------ */

router.post("/signup", (req, res) => {
  const signedUpUser = new signUpTemplate({
    Name: req.body.Name,
    Phone: req.body.Phone,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });

  // res.send("User Registered successfully");
});

/* ----------------------------------------------------PRODUCT API-------------------------------------------------- */
router.get("/products", (req, res) => {
  productTemplate.find(function (err, foundProducts) {
    if (!err) {
      res.send(foundProducts);
    } else {
      console.log(err);
    }
  });
});
router.post("/products", (req, res) => {
  const productSchema = new productTemplate({
    item: req.body.item,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    rating: req.body.rating,
    review: req.body.review,
    category: req.body.category,
    brand: req.body.brand,
  });

  productSchema
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

export default router;
