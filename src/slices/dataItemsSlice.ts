import { createSlice } from '@reduxjs/toolkit';

const dataItemsSlice = createSlice({
  name: 'dataItems',
  initialState: [],
  reducers: {
    setDataItems: (state, action) => {
      return action.payload;
    },
    addDataItems: (state, action) => {
      state.push(action.payload);
    },
    removeDataItem: (state, action) => {
      return state.filter((client) => client.id !== action.payload);
    },
    // Other client-related actions
  },
});

export const { setDataItems, addDataItems, removeDataItems } = dataItemsSlice.actions;

export default dataItemsSlice.reducer;
