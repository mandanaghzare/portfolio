import { Request, Response } from "express";
import { projectService } from "../services/projectService";

export const getProjects = async (_req: Request, res: Response) => {
  const projects = await projectService.getAll();
  res.json(projects);
};

export const getProjectById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const project = await projectService.getById(id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

export const createProject = async (req: Request, res: Response) => {
  const newProject = await projectService.create(req.body);
  res.status(201).json(newProject);
};
