import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(''); // Clear the input after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div style={{ padding: '10px', background: '#40444b', display: 'flex' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key press
        style={{ flex: 1, padding: '10px', marginRight: '10px', borderRadius: '5px', border: 'none' }}
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        style={{ padding: '10px', borderRadius: '5px', background: '#5865f2', color: '#fff', border: 'none' }}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
