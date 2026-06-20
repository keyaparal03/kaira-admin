import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import ProductService from "../../services/product.service";

export const fetchProducts =
  createAsyncThunk(
    "products/fetch",
    async () => {

      const response: any =
        await ProductService.getProducts();

      return response.data;   // only array
    }
  );

export const createProduct =
  createAsyncThunk(
    "product/create",
    async (data: any) => {
      return await ProductService.createProduct(data);
    }
  );

export const deleteProduct =
  createAsyncThunk(
    "product/delete",
    async (id: string) => {
      await ProductService.deleteProduct(id);
      return id;
    }
  );

interface ProductState {
  products: any[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false
};

const productSlice =
  createSlice({
    name: "product",
    initialState,
    reducers: {},

    extraReducers:
      (builder) => {

        builder

        .addCase(
            fetchProducts.fulfilled,
            (state:any, action:any) => {
                state.products = action.payload;
            }
        )

        .addCase(
          createProduct.fulfilled,
          (state, action) => {
            state.products.push(
              action.payload
            );
          }
        )

        .addCase(
          deleteProduct.fulfilled,
          (state, action) => {
            state.products =
              state.products.filter(
                (item: any) =>
                  item._id !==
                  action.payload
              );
          }
        );
      }
  });

export default
  productSlice.reducer;