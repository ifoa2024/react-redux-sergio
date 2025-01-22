import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authSlice';

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook per il redirect

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirect alla homepage dopo il logout
  };

  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">App Navbar</h1>
        <div>
          {user ? (
            <div className="flex space-x-4">
              <Link to="/todo" className="btn btn-secondary">To Do</Link>
              <button onClick={handleLogout} className="btn btn-accent">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
