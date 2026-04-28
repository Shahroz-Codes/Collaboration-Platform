import express from "express";
import { createTask, getTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import {protectRoute} from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/:projectId/tasks", protectRoute, createTask);
router.get("/:projectId/tasks", protectRoute, getTask);
router.patch("/:projectId/tasks/:taskId", protectRoute, updateTask);
router.delete("/:projectId/tasks/:taskId", protectRoute, deleteTask);

export default router;
