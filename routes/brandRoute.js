import express  from "express";
import { getAllBrands } from "../controllers/brandsControllers.js";
import {createBrand} from "../controllers/brandsControllers.js";
import {updateBrand} from "../controllers/brandsControllers.js";
import {deleteBrand} from "../controllers/brandsControllers.js";


const router = express.Router();
router.get("/", getAllBrands);
router.post("/",createBrand);
router.put("/:id",updateBrand);
router.patch("/:id",updateBrand);
router.delete("/:id",deleteBrand)

export default router;