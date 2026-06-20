import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import ProductService
from "../../services/product.service";

/*
|--------------------------------------------------------------------------
| FETCH ALL PRODUCTS
|--------------------------------------------------------------------------
*/

export const fetchProducts =
createAsyncThunk(

  "product/fetch",

  async () => {

    const response: any =
      await ProductService
      .getProducts();

    return response.data;
  }
);

/*
|--------------------------------------------------------------------------
| FETCH SINGLE PRODUCT
|--------------------------------------------------------------------------
*/

export const fetchProductById =
createAsyncThunk(

  "product/fetchById",

  async (
    id: string
  ) => {

    const response: any =
      await ProductService
      .getProductById(
        id
      );

    return response.data;
  }
);

/*
|--------------------------------------------------------------------------
| CREATE PRODUCT
|--------------------------------------------------------------------------
*/

export const createProduct =
createAsyncThunk(

  "product/create",

  async (
    data: FormData
  ) => {

    const response: any =
      await ProductService
      .createProduct(
        data
      );

    return response.data;
  }
);

/*
|--------------------------------------------------------------------------
| UPDATE PRODUCT
|--------------------------------------------------------------------------
*/

export const updateProduct =
createAsyncThunk(

  "product/update",

  async ({
    id,
    data
  }: any) => {

    const response: any =
      await ProductService
      .updateProduct(
        id,
        data
      );

    return response.data;
  }
);

/*
|--------------------------------------------------------------------------
| DELETE PRODUCT
|--------------------------------------------------------------------------
*/

export const deleteProduct =
createAsyncThunk(

  "product/delete",

  async (
    id: string
  ) => {

    await ProductService
      .deleteProduct(
        id
      );

    return id;
  }
);

/*
|--------------------------------------------------------------------------
| STATE
|--------------------------------------------------------------------------
*/

interface ProductState {

  products: any[];

  product: any;

  loading: boolean;

  error: string | null;
}

const initialState:
ProductState = {

  products: [],

  product: null,

  loading: false,

  error: null
};

/*
|--------------------------------------------------------------------------
| SLICE
|--------------------------------------------------------------------------
*/

const productSlice =
createSlice({

  name: "product",

  initialState,

  reducers: {},

  extraReducers:
  (builder) => {

    builder

    /*
    FETCH PRODUCTS
    */

    .addCase(
      fetchProducts.pending,

      (state) => {

        state.loading =
          true;
      }
    )

    .addCase(
      fetchProducts.fulfilled,

      (
        state,
        action: any
      ) => {

        state.loading =
          false;

        state.products =
          action.payload;
      }
    )

    .addCase(
      fetchProducts.rejected,

      (
        state,
        action: any
      ) => {

        state.loading =
          false;

        state.error =
          action.error.message;
      }
    )

    /*
    FETCH SINGLE
    */

    .addCase(
      fetchProductById.pending,

      (state) => {

        state.loading =
          true;
      }
    )

    .addCase(
      fetchProductById.fulfilled,

      (
        state,
        action: any
      ) => {

        state.loading =
          false;

        state.product =
          action.payload;
      }
    )

    /*
    CREATE
    */

    .addCase(
      createProduct.pending,

      (state) => {

        state.loading =
          true;
      }
    )

    .addCase(
      createProduct.fulfilled,

      (
        state,
        action: any
      ) => {

        state.loading =
          false;

        state.products.push(
          action.payload
        );
      }
    )

    /*
    UPDATE
    */

    .addCase(
      updateProduct.pending,

      (state) => {

        state.loading =
          true;
      }
    )

    .addCase(
      updateProduct.fulfilled,

      (
        state,
        action: any
      ) => {

        state.loading =
          false;

        state.products =
        state.products.map(

          (item: any) =>

            item._id ===
            action.payload._id

            ? action.payload

            : item
        );
      }
    )

    /*
    DELETE
    */

    .addCase(
      deleteProduct.pending,

      (state) => {

        state.loading =
          true;
      }
    )

    .addCase(
      deleteProduct.fulfilled,

      (
        state,
        action: any
      ) => {

        state.loading =
          false;

        state.products =
        state.products.filter(

          (item: any) =>

            item._id !==
            action.payload
        );
      }
    )

    .addCase(
      deleteProduct.rejected,

      (
        state,
        action: any
      ) => {

        state.loading =
          false;

        state.error =
          action.error.message;
      }
    );
  }
});

/*
|--------------------------------------------------------------------------
| EXPORT
|--------------------------------------------------------------------------
*/

export default
productSlice.reducer;