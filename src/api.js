import axios from "axios";
// ip and port for api endpoint
const IP_ADDRESS = import.meta.env.VITE_IP_ADDRESS || "localhost";
const PORT = import.meta.env.VITE_PORT || 5000;

const API = axios.create({ baseURL: `http://${IP_ADDRESS}:${PORT}/api` });

// recipe endpoints
export const fetchRecipes = (page = 1, limit = 6) =>
  API.get(`/recipes?page=${page}&limit=${limit}`);
export const fetchRecipe = (id) => API.get(`/recipes/${id}`);
export const createRecipe = (newRecipe) => {
  // get token from jwt
  const token = localStorage.getItem("token");
  return API.post("/recipes", newRecipe, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const fetchRecipesByCategory = (category) => {
  const url = `/recipes/category/${category}`;
  return API.get(url);
};
export const deleteRecipe = (id) => {
  const token = localStorage.getItem("token");
  return API.delete(`/recipes/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// auth endpoints
export const createUser = (newUser) => API.post("/auth/register", newUser);
export const loginUser = (user) =>
  API.post("/auth/login", user, {
    headers: { "Content-Type": "application/json" },
  });
