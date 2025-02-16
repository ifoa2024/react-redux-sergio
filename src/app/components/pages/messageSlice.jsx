import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: []
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    }
  }
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
