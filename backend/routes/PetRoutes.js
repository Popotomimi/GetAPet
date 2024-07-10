const router = require("express").Router();

const PetController = require("../controllers/PetController.js");

// Middlewares
const verifyToken = require("../helpers/verify-token.js");
const { imageUpload } = require("../helpers/image-upload.js");

router.post(
  "/create",
  verifyToken,
  imageUpload.array("images"),
  PetController.create
);
router.get("/", PetController.getAll);
router.get("/mypets", verifyToken, PetController.getAllUserPets);
router.get("/myadoptions", verifyToken, PetController.getAllUserAdoptions);
router.get("/:id", PetController.getPetById);
router.delete("/:id", verifyToken, PetController.removePetById);
router.patch(
  "/:id",
  verifyToken,
  imageUpload.array("images"),
  PetController.updatePet
);

module.exports = router;
