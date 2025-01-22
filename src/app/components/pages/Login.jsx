import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username }));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="input input-bordered w-full mb-4"
      />
      <button onClick={handleLogin} className="btn btn-primary w-full">Login</button>
    </div>
  );
}

export default Login;
