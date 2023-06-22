import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authServices";

const userData = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : '';
  

const initialState = {
  isLoggedIn: !!userData?.token,
  user: userData,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const user = await authService.login(userData);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("user");
      await authService.logout();
    } catch (error) {
      return rejectWithValue(error.response.data);
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
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isSuccess = true;
        state.message = "Login successful.";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.user = action.error;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = "";
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Logout successful.";
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload
          ? action.payload.message
          : "Logout failed.";
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
