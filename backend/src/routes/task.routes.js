const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/task.controller");

// Create
router.post("/", auth, createTask);

// Read
router.get("/", auth, getTasks);

// Update
router.put("/:id", auth, updateTask);

// Delete (Admin only)
router.delete("/:id", auth, authorize("admin"), deleteTask);

module.exports = router;