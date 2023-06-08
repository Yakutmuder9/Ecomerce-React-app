import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authServices";
import axios from "axios";

const initialState = {
  user: null,
  ordes: [],
  accessToken: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        // state.accessToken = action.payload.accessToken;
        state.message = "success";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.user = action.error;
      });
  },
});

export default authSlice.reducer;
