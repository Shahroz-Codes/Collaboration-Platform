import Task from "../models/task.model.js";
import Project from "../models/project.model.js"
import mongoose from "mongoose";

export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const { projectId } = req.params
    try {
        const project = await Project.findOne({ _id: projectId, userId: req.user._id })
        if (!project) return res.status(403).json({ message: "Not authorized to add tasks to this project" })
        const task = new Task({
            title,
            description,
            projectId,
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.log("error in createTask controller");
        return res.status(500).json({ message: "error , project.controller.createTask" })

    }
}

export const getTask = async (req, res) => {
    try {
        const { projectId } = req.params;

        const project = await Project.findOne({ _id: projectId, userId: req.user._id });
        if (!project) return res.status(403).json({ message: "Not authorized to view tasks for this project" });

        const tasks = await Task.find({ projectId });
        res.json(tasks);
    } catch (error) {
        console.error("Error in getTasks:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const updates = req.body; // { title?, description?, completed? }

        const { projectId } = req.params;

        const project = await Project.findOne({ _id: projectId, userId: req.user._id });
        if (!project) return res.status(403).json({ message: "Not authorized to update tasks for this project" });

        const task = await Task.findOneAndUpdate(
            { _id: taskId, projectId: new mongoose.Types.ObjectId(projectId) },
            updates,
            { returnDocument: "after" } 
        );
        if (!task) return res.status(404).json({ message: "Task not found",Error });

        res.json(task);
    } catch (error) {
        console.error("Error in updateTask:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { projectId } = req.params;

        const project = await Project.findOne({ _id: projectId, userId: req.user._id });
        if (!project) return res.status(403).json({ message: "Not authorized to delete tasks for this project" });

        const task = await Task.findOneAndDelete({ _id: taskId, projectId: new mongoose.Types.ObjectId(projectId) });
        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error in deleteTask:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};