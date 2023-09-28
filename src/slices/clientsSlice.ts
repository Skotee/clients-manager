import { createSlice } from '@reduxjs/toolkit';

const clientsSlice = createSlice({
  name: 'clients',
  initialState: [],
  reducers: {
    setClients: (state, action) => {
      return action.payload;
    },
    addClient: (state, action) => {
      state.push(action.payload);
    },
    removeClient: (state, action) => {
      return state.filter((client) => client.id !== action.payload);
    },
    filterClients: (state, action) => {
      return state.filter((client) => client.id !== action.payload);
    },
  },
});

export const { setClients, addClient, removeClient, filterClients } = clientsSlice.actions;

export default clientsSlice.reducer;
