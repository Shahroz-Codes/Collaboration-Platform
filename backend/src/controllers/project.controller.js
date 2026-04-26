import Project from "../models/project.model.js";

export const CreateProject = async (req, res) => {
    const { title, description, } = req.body
    try {
        const newProject = new Project({
            title,
            description,
            userId: req.user._id,
        });
        await newProject.save();
        res.status(201).json({ newProject })
    } catch (error) {
        console.log("error in createProject controller");
        return res.status(500).json({ message: "error , project.controller.createProject" })
    }
}

export const GetProjects = async (req, res) => {

    try {
        const projects = await Project.find({ userId: req.user._id })
        res.json(projects)
    } catch (error) {
        console.log("error in GetProjects controller");
        return res.status(500).json({ message: "internal server error , project.controller.GetProjects" })
    }
}

export const DeleteProject = async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.id, userId: req.user._id })
        if (!project) return res.status(404).json({ message: "project not found" })
        res.json({message:"project deleted successfully"})
    } catch (error) {
        console.log("error in DeleteProject controller");
        return res.status(500).json({ message: "error in project.controller.DeleteProject" })

    }
}