const express = require('express')
const { getAllCategories, createCategory } = require("../controllers/category.controllers")

const categoryRouter = express.Router();

categoryRouter.route("/")
              .get(getAllCategories)
              .post(createCategory)


module.exports = categoryRouter