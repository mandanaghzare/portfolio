import prisma from "../prisma/client";

export const projectService = {
  getAll: () => prisma.project.findMany(),
  getById: (id: number) => prisma.project.findUnique({ where: { id } }),
  create: (data: any) => prisma.project.create({ data }),
};
