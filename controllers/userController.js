const service = require("../services/userService");
const bunyan = require("bunyan");

let log = bunyan.createLogger({ name: "Controller logs" });

function addUser(req, res) {
  service
    .addUser(req.body)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      log.info(err);
      res.status(400).send({ message: err.message });
    });
}

function getUser(req, res) {
  let userID = req.body.userID;
  service
    .getUser(userID)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      log.info(err);
      res.status(400).send({ message: err.message });
    });
}

function getAllUser(req, res) {
  service
    .getAllUser(req.params)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      log.info(err);
      res.status(400).send({ message: err.message });
    });
}

function updateUser(req, res) {
  service
    .updateUser(req.params.id, req.body)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      log.info(err);
      res.status(400).send({ message: err.message });
    });
}

function deleteUser(req, res) {
  service
    .deleteUser(req.params.id)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((err) => {
      log.info(err);
      res.status(400).send({ message: err.message });
    });
}

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
};
