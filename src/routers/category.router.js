const express = require('express')
const { getAllCategories } = require("../controllers/category.controllers")

const categoryRouter = express.Router();

categoryRouter.route("/")
              .get(categoryRouter)


module.exports = categoryRouter