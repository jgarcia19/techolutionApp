const express = require("express");
 
// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /task.
const router = express.Router();

 
// This schema contains the format for a task, which is just a String
const Task = require("../model/task");
const taskSchema = require("../model/task");
 
router.route("/test").get(async (req, res) => {
    console.log("Hello World")
    res.status(200).send("Hello World!")
});


// This section will help you get a list of all the tasks.
router.route("/task").get(async function (req, res) {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

// This section helps to get a task with a specific id
router.route("/task/:id").get(async function (req, res) {
    try {
        const task = await Task.findById(req.params.id);
        if (task == null) {
            res.status(400).json({
                "error": "No such task found"
            })
        }

        res.status(200).json(task);
    } catch (err) {
        console.log(err);

        res.status(400).json({
            "error": "Invalid ID"
        })
    }

});
 
// This section will help you create a new task.
router.route("/task/add").post(async function (req, res) {
    const newTask = await Task.create({task: req.body.task})
    res.status(200).json(newTask);
});
 
// This section will help you update a task by id.
router.route("/update/:id").post(async function (req, res) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {task: req.body.task});
        if (updatedTask == null) {
            res.status(400).json({
                "error": "No such task found"
            })
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        console.log(err);

        res.status(400).json({
            "error": "Invalid ID"
        })
    }
});
 
// This section will help you delete a task
router.route("/delete/:id").delete(async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)

        res.status(200).send();
    } catch (err) {
        console.log(err);

        res.status(400).json({
            "error": "Invalid ID"
        })
    }
});

// For Testing Purposes, This section will help you delete all tasks
router.route("/delete").delete(async (req, res) => {
    await Task.deleteMany({});
    res.status(200).send();
});
 
module.exports = router;