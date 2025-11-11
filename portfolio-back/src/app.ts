import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);

export default app;
