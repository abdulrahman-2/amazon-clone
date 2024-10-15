import axios from "axios";

// Create an Axios instance with a base URL
const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getCategoriesList = async () => {
  try {
    const response = await apiClient.get("/products/category-list");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
