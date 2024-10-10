import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://dummyjson.com", // Set your base URL here
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
