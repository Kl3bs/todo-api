const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const taskRoutes = require("./src/routes/task.routes");
// using as middleware
app.use("/api/v1/tasks", taskRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
