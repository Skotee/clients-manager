import { createSlice } from '@reduxjs/toolkit';

const reportsSlice = createSlice({
  name: 'reports',
  initialState: [],
  reducers: {
    setReports: (state, action) => {
      return action.payload;
    },
    addReport: (state, action) => {
      state.push(action.payload);
    },
    removeReport: (state, action) => {
      return state.filter((client) => client.id !== action.payload);
    },
  },
});

export const { setReports, addReport, removeReport } = reportsSlice.actions;

export default reportsSlice.reducer;
