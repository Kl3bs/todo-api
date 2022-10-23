const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.get("/", taskController.findAll);

router.post("/", taskController.create);

router.get("/:id", taskController.findById);

router.put("/:id", taskController.update);

router.delete("/:id", taskController.delete);

module.exports = router;
