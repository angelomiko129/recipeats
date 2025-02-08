const Recipe = require("../models/Recipe");
const fs = require("fs");
const path = require("path");

const getAllRecipe = async (req, res) => {
  let { page, limit } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);
  const skip = (page - 1) * limit;

  const recipes = await Recipe.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const totalRecipes = await Recipe.countDocuments();
  const totalPages = Math.ceil(totalRecipes / limit);

  res.json({ recipes, totalPages, currentPage: page, totalRecipes });
};

const getRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.status(200).json(recipe);
};

const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const recipes = await Recipe.find({
      category: { $regex: new RegExp(`^${category}$`, "i") },
    });

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recipes by category" });
  }
};

const postRecipe = async (req, res) => {
  try {
    const {
      title,
      ingredients,
      description,
      instructions,
      author,
      tags,
      category,
      rating,
    } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !ingredients || !description || !instructions || !category) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    const newRecipe = new Recipe({
      title,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      author,
      description,
      instructions: instructions.split(",").map((step) => step.trim()),
      image,
      tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      category,
      rating,
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error("Error creating recipe:", err);
    res.status(500).json({ error: "Failed to create recipe." });
  }
};

const updateRecipe = async (req, res) => {
  await Recipe.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
  res.status(200).json({ message: "Updated Successfully" });
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const filePath = path.join(__dirname, "../uploads", recipe.image);

    await Recipe.findByIdAndDelete(req.params.id);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting recipe", error: err });
  }
};

module.exports = {
  postRecipe,
  getAllRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipesByCategory,
};
