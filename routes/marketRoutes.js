import express  from "express";
import { getAllProducts } from "../controllers/marketControllers.js";
import {createProduct} from "../controllers/marketControllers.js";
import {updateProduct} from "../controllers/marketControllers.js";
import {deleteProduct} from "../controllers/marketControllers.js";


const productsRouter = express.Router();
productsRouter.get("/", getAllProducts);
productsRouter.post("/",createProduct);
productsRouter.put("/:id",updateProduct);
productsRouter.patch("/:id",updateProduct);
productsRouter.delete("/:id",deleteProduct)

export default productsRouter; 