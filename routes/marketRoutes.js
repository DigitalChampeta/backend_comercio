import express  from "express";
import { getAllProducts } from "../controllers/marketControllers.js";
import {createProduct} from "../controllers/marketControllers.js";
import {updateProduct} from "../controllers/marketControllers.js";
import {deleteProduct} from "../controllers/marketControllers.js";


const router = express.Router();
router.get("/", getAllProducts);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.patch("/:id",updateProduct);
router.delete("/:id",deleteProduct)
// TODO: AÑADIR PUT PARA UPDATE BRAND
export default router;