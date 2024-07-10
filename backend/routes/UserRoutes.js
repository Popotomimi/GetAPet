const router = require("express").Router();

const UserController = require("../controllers/UserController.js");

// Middleware
const verifyToken = require("../helpers/verify-token.js");
const { imageUpload } = require("../helpers/image-upload.js");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/checkuser", UserController.checkUser);
router.get("/:id", UserController.getUserById);
router.patch(
  "/edit/:id",
  verifyToken,
  imageUpload.single("image"),
  UserController.editUser
);

module.exports = router;
