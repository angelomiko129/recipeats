const express = require("express");
const multer = require("multer");

const {
  postRecipe,
  getAllRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipesByCategory,
} = require("../controllers/recipeControllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

const router = express.Router();
// get
router.get("/", getAllRecipe);
router.get("/:id", getRecipe);
router.get("/category/:category", getRecipesByCategory);

// post
router.post("/", upload.single("image"), postRecipe);

// patch
router.patch("/:id", updateRecipe);

// delete
router.delete("/:id", deleteRecipe);

module.exports = router;
