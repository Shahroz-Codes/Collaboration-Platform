import express from "express"
import { CreateProject, GetProjects, DeleteProject } from "../controllers/project.controller.js"
import {protectRoute} from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/", protectRoute, CreateProject);
router.get("/", protectRoute, GetProjects);
router.post("/:id", protectRoute, DeleteProject);


export default router;