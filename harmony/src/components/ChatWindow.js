import React from 'react';
import Message from './Message';

const ChatWindow = ({ messages }) => {
  return (
    <div style={{ flex: 1, padding: '10px', background: '#36393f', color: '#fff', overflowY: 'scroll' }}>
      {messages.map((msg) => (
        <Message key={msg.id} user={msg.user} content={msg.content} />
      ))}
    </div>
  );
};

export default ChatWindow;
