import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // utente inizialmente non autenticato
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,  // Lo stato iniziale è definito sopra
  reducers: {
    login(state, action) {
      state.user = action.payload;  // Assegna l'utente alla proprietà "user"
      state.isAuthenticated = true; // L'utente è autenticato
    },
    logout(state) {
      state.user = null;            // Rimuove l'utente dallo stato
      state.isAuthenticated = false; // L'utente non è più autenticato
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
