import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './messageSlice';
import { useNavigate } from 'react-router-dom';

function ToDo() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/'); // Redirect alla homepage se non c'è un utente loggato
    }
  }, [user, navigate]);

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(addMessage({ user: user.username, message }));
      setMessage('');
    }
  };

  if (!user) {
    return null; // Se non c'è un utente, non rendere nulla
  }

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message"
        className="textarea textarea-bordered w-full mb-4"
      />
      <button onClick={handleSendMessage} className="btn btn-primary w-full">Send Message</button>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">All Messages</h3>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="mt-2 p-2 border rounded-lg">
              <strong>{msg.user}:</strong> {msg.message}
            </div>
          ))
        ) : (
          <p>No messages yet!</p>
        )}
      </div>
    </div>
  );
}

export default ToDo;
