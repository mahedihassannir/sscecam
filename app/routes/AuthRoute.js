const loginController = require("../controller/loginisterController.");
const registerController = require("../controller/registerController.");

const router = require("express").Router();


router.post("/register", registerController);
router.post("/login", loginController);


module.exports = router;