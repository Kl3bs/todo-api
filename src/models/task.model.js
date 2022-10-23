"use strict";
var dbConn = require("./../../config/db.config");
//Employee object create
var Task = function (task) {
  this.title = task.title;
  this.description = task.description;
  this.duration_time = task.duration_time;
  this.date_hour = task.date_hour;
  this.place = task.place;
};

Task.create = (newTask, result) => {
  dbConn.query("INSERT INTO tasks set ?", newTask, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(res.statusCode);
    }
  });
};

Task.findAll = function (result) {
  dbConn.query("Select * from tasks", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};

Task.findByTitle = function (title, result) {
  title = `%${title}%`;
  dbConn.query(
    "Select * from tasks where title like ? ",
    title,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Task.findById = function (id, result) {
  dbConn.query("Select * from tasks where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.delete = function (id, result) {
  dbConn.query("Delete from tasks where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.update = function (id, task, result) {
  dbConn.query(
    "UPDATE tasks SET title=?,description=?,duration_time=?,date_hour=?, place=? WHERE id = ?",
    [
      task.title,
      task.description,
      task.duration_time,
      task.date_hour,
      task.place,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Task.search = function (task, result) {};

module.exports = Task;
