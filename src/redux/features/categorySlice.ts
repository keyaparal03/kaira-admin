import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../../src/api/ApiClient";

export const fetchCategories =
  createAsyncThunk(
    "category/fetchCategories",
    async () => {
      const response: any =
        await apiClient.get(
          "/categories",
          false
        );

      // API returns { success:true, data:[...] }

      return response.data;
    }
  );

const categorySlice =
  createSlice({
    name: "category",

    initialState: {
      categories: [],
      loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
      builder

        .addCase(
          fetchCategories.pending,
          (state: any) => {
            state.loading = true;
          }
        )

        .addCase(
          fetchCategories.fulfilled,
          (
            state: any,
            action: any
          ) => {
            state.loading = false;
            state.categories =
              action.payload;
          }
        );
    },
  });

export default categorySlice.reducer;