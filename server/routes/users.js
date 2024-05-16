var express = require("express");
var router = express.Router();

const usersController = require("../controllers/users");

router.get("/", usersController.getAll);

//localhost:3000/users/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", usersController.getById);

router.delete("/:id", usersController.delete);

router.put("/:id", usersController.update);

router.post("/register", usersController.register);
router.post("/login", usersController.login);

module.exports = router;
