import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/pages/authSlice';
import messageReducer from './components/pages/messageSlice';
import counterReducer from "../features/counter/counterSlice"; // Assicurati che questa importazione esista

const store = configureStore({
  reducer: {
    auth: authReducer,
    messages: messageReducer,
    counter: counterReducer, // Assicurati che `counter` sia definito correttamente
  },
});

export default store;
