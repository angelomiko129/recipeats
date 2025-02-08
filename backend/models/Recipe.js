const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  description: { type: String, required: true },
  instructions: [{ type: String, required: true }],
  image: { type: String },
  author: { type: String, default: "Anonymous" },
  createdAt: { type: Date, default: Date.now },
  category: {
    type: String,
    enum: ["Dinner", "Lunch", "Breakfast", "Snack", "Dessert"],
    required: true,
  },
  rating: { type: Number, min: 1, max: 5, default: 1 },
  tags: { type: [String], default: [] },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
