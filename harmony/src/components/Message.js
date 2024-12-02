import React from 'react';

const Message = ({ user, content }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <strong>{user}: </strong>
      <span>{content}</span>
    </div>
  );
};

export default Message;
