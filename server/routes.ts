import type { Express } from "express";
import { createServer, type Server } from "http";
// import { storage } from "./storage";
// import { insertContactSchema, insertProjectSchema } from "@shared/schema";
// import { ZodError } from "zod";

export function registerRoutes(app: Express): Server {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    res.status(501).json({ error: "Database operations are disabled." });
  });

  // Get all projects
  app.get("/api/projects", async (_req, res) => {
    res.status(501).json({ error: "Database operations are disabled." });
  });

  // Get a specific project
  app.get("/api/projects/:id", async (req, res) => {
    res.status(501).json({ error: "Database operations are disabled." });
  });

  // Create a new project
  app.post("/api/projects", async (req, res) => {
    res.status(501).json({ error: "Database operations are disabled." });
  });

  const httpServer = createServer(app);
  return httpServer;
}
