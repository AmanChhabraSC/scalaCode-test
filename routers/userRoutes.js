const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();

router.route("/add-user").post((req, res) => {
  controller.addUser(req, res);
});

router.route("/get-user").post((req, res) => {
  controller.getUser(req, res);
});

router.route("/update-user/:id").put((req, res) => {
  controller.updateUser(req, res);
});

router.route("/delete-user/:id").delete((req, res) => {
  controller.deleteUser(req, res);
});

router.route("/get-all-user/:page/:pageSize").get((req, res) => {
  controller.getAllUser(req, res);
});

module.exports = router;
