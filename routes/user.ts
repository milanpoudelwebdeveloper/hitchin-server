import express from "express";
import { verifyAuth } from "../middlewares/verifyAuth.js";
import { updateUser } from "../controllers/updateUser.js";

const router = express.Router();

router.put("/", verifyAuth, updateUser);

export default router;
