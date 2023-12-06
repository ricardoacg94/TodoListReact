import express from "express";
import Task from "../models/taskItem.js";
const router = express.Router();

router.get("/task", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {}
});

router.post("/task", async (req, res) => {
  try {
    const newTask = new Task({
      name: req.body.name,
    });
    const saveTask = await newTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.json({ error });
  }
});

router.put("/task/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const taskUpdated = await Task.findByIdAndUpdate(id, { name: name });
  try {
    res.status(200).json({ taskUpdated });
  } catch (error) {
    res.json(error);
  }
});

router.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findTask = await Task.findByIdAndDelete(id);

    res.json({
      task: findTask,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
