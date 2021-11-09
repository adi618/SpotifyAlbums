import express from "express";
import { makeFavourite, getFavourites } from "../controllers/songs.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/fav", auth, getFavourites);
router.post("/fav", auth, makeFavourite);

export default router;
