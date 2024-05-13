var express = require("express");
var router = express.Router();

const usersController = require("../controllers/users");

router.get("/", usersController.getAllUsers);

//localhost:3000/users/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", usersController.getUserById);

router.delete("/:id", usersController.deleteUser);

router.put("/:id", usersController.updateUser);

router.post("/", usersController.createUser);

module.exports = router;
