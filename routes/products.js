import { Router } from "express";
import * as controllers from "../controllers/products.js";

const router = Router()


router.get("/", controllers.getProducts);
router.get("/:title", controllers.getProductByName);
router.post("/", controllers.createProduct);
router.put("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);


export default router