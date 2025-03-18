import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getUsersForSidebar } from "../controllers/message.controller";
import { getMessages } from "../controllers/message.controller";
import { sendMessage } from "../controllers/message.controller";
const router = express.Router();

router.get("/users",protectRoute,getUsersForSidebar);
router.get("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);
export default router;