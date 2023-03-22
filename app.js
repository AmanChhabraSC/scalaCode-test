const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbconnect = require("./dbconnect");
const bunyan = require("bunyan");
const userRoutes = require("./routers/userRoutes");
const PORT = process.env.PORT||1234;

const app = express();
let log = bunyan.createLogger({ name: "Database" });
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

// Database connection
dbconnect()
  .then((res) => {
    log.info(res);
  })
  .catch((err) => {
    log.info(err);
  });

app.use("/api", userRoutes);

app.listen(PORT, () => {
  log.info("Server Listening on:" + PORT);
});
