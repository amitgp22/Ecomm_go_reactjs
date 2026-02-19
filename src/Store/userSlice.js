import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetuser = createAsyncThunk(
  "users/fetuser",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetuser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
