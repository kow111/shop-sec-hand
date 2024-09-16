const {
  createProductService,
  getProductService,
} = require("../service/product.service");
const { validationResult } = require("express-validator");

const postCreateProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ DT: null, EM: errorMessages[0] });
  }
  try {
    const {
      productName,
      description,
      size,
      category,
      quantity,
      images,
      price,
    } = req.body;
    let data = {
      productName,
      description,
      size,
      category,
      quantity,
      images,
      price,
    };

    let rs = await createProductService(data);
    return res.status(200).json({
      DT: rs,
      EM: "Create product successfully",
    });
  } catch (error) {
    return res.status(400).json({
      DT: null,
      EM: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const { query } = req;

    const searchQuery = query.search;

    let rs = await getProductService({
      search: searchQuery,
      sortOrder: query.sortOrder,
    });
    return res.status(200).json({
      DT: rs,
      EM: "Search products successfully",
    });
  } catch (error) {
    return res.status(400).json({
      DT: null,
      EM: error.message,
    });
  }
};

module.exports = {
  postCreateProduct,
  getProduct,
};
