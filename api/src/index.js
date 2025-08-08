import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Example in-memory data. In a real implementation this will be replaced with a DB.
const courses = [
  { id: "course1", title: "Sample Course 1", description: "This is a placeholder course." },
  { id: "course2", title: "Sample Course 2", description: "Another sample course." }
];

// Healthcheck
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Get list of courses
app.get("/courses", (_req, res) => {
  res.json(courses);
});

// Create a new course
app.post("/courses", (req, res) => {
  const { id, title, description } = req.body;
  if (!id || !title) {
    return res.status(400).json({ error: "id and title are required" });
  }
  courses.push({ id, title, description });
  res.status(201).json({ message: "Course created" });
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`API listening on ${port}`));
