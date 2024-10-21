import { healthCheck } from "../controllers/healthCheck.controller.js";
import { Router } from "express";

const router = Router();

router.route("/").get(healthCheck);

export default router;
