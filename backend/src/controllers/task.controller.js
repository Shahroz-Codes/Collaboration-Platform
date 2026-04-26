import Task from "../models/task.model.js";

export const createTask = (req, res) => {
    const { title, description } = req.body;
    const { projectId } = req.params
    try {
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

export const getTask = (req, res) => {
    try {
        const { projectId } = req.params;
        const tasks = await Task.find({ projectId });
        res.json(tasks);
    } catch (error) {
        console.error("Error in getTasks:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body; // { title?, description?, completed? }

        const task = await Task.findByIdAndUpdate(id, updates, { returnDocument: "after" });
        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json(task);
    } catch (error) {
        console.error("Error in updateTask:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete task
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error in deleteTask:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};