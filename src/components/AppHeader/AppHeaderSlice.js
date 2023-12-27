import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  pizzaData: [],
  status: "idle",
  error: null,
};

export const fetchPizzaData = createAsyncThunk(
  "pizzAPI/fetchPizzaData",
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(
        "https://dev-dqsd0ezg3fi1m4q.api.raw-labs.com/json-programming-heroes"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const appHeaderSlice = createSlice({
  name: "pizzAPI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzaData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPizzaData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pizzaData = action.payload;
      })
      .addCase(fetchPizzaData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default appHeaderSlice.reducer;
