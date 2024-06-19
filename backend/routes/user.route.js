import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Api is working fine" });
});


router.get('/' , test)

export default router;
