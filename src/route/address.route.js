const express = require("express");

const {
    postCreateAddress,
    putUpdateAddress,
    deleteAddress,
    getAddressByUser,
    setDefaultAddress,
    checkAddress
} = require("../controller/address.controller");
const { auth } = require("../middleware/auth");

const routerAPI = express.Router();

routerAPI.post("/", auth, postCreateAddress);
routerAPI.put("/:addressId", auth, putUpdateAddress);
routerAPI.delete("/:addressId", auth, deleteAddress);
routerAPI.get("/", auth, getAddressByUser);
routerAPI.put("/default/:addressId", auth, setDefaultAddress);
routerAPI.get("/checkAddress", checkAddress);
module.exports = routerAPI;