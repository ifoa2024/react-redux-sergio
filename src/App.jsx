import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./app/components/pages/Navbar";
import Login from "./app/components/pages/Login";
import Homepage from "./app/components/pages/Homepage";
import ToDo from "./app/components/pages/ToDo";
import { useSelector } from "react-redux";

function PrivateRoute({ element }) {
  const user = useSelector((state) => state.auth.user);
  return user ? element : null; // Se l'utente è loggato, ritorna il componente, altrimenti non fare nulla
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<PrivateRoute element={<ToDo />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
