import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import AuthService
from "../../services/auth.service";

import {
  setAccessToken,
  removeAccessToken
} from "../../utils/localStorage";

export const loginAdmin =
  createAsyncThunk(

  "auth/login",

  async (
    data: any,
    thunkAPI
  ) => {

    try {

      console.log(
        "LOGIN DATA",
        data
      );

      const response: any =
        await AuthService.login(
          data.email,
          data.password
        );

      console.log(
        "LOGIN RESPONSE",
        response
      );

      if (
        response.user.role !==
        "admin"
      ) {

        return thunkAPI
          .rejectWithValue(
            "Access denied"
          );
      }

      setAccessToken(
        response.accessToken
      );

      return response;

    } catch (
      error: any
    ) {

      console.log(
        "LOGIN ERROR",
        error
      );

      return thunkAPI
        .rejectWithValue(
          error.message
        );
    }
  }
);

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState:
AuthState = {
  user: null,
  loading: false,
  error: null
};

const authSlice =
  createSlice({

    name: "auth",

    initialState,

    reducers: {

      logout: (
        state
      ) => {

        removeAccessToken();

        state.user =
          null;
      }
    },

    extraReducers:
      (builder) => {

        builder

        .addCase(
          loginAdmin.pending,

          (state) => {

            state.loading =
              true;

            state.error =
              null;
          }
        )

        .addCase(
          loginAdmin.fulfilled,

          (
            state,
            action
          ) => {

            state.loading =
              false;

            state.user =
              action.payload.user;
          }
        )

        .addCase(
          loginAdmin.rejected,

          (
            state,
            action: any
          ) => {

            state.loading =
              false;

            state.error =
              action.payload;
          }
        );
      }
  });

export const {
  logout
} = authSlice.actions;

export default
  authSlice.reducer;