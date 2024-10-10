import { fetchData } from "@/services/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const data = await fetchData("/products/category-list");
    return data;
  }
);

const CategoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        // Check if the payload contains a 'categories' key, or use the entire payload
        state.categories = action.payload.categories || action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong"; // Fallback error message
      });
  },
});

export default CategoriesSlice.reducer;
