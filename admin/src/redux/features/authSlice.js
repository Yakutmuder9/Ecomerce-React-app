import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authServices";

const userInfo = localStorage.getItem("user")

const initialState = {
  user: userInfo ? userInfo : null,
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
      return await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await authService.login(userData);
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        }, 2000); 
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
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
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.isAuthenticated = false;
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
