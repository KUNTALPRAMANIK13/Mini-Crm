import { Router } from "express";
import { createCustomer } from "../controllers/customer.Controller.js";

const router = Router();

router.route("/").post(createCustomer);


export default router;
