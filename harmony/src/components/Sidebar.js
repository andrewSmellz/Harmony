import React from 'react';

const Sidebar = ({ channels, currentChannel, onSelectChannel }) => {
  return (
    <div style={{ width: '200px', background: '#2f3136', color: '#fff', padding: '10px', height: '100vh' }}>
      <h2>Channels</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {channels.map((channel) => (
          <li
            key={channel}
            onClick={() => onSelectChannel(channel)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              background: currentChannel === channel ? '#5865f2' : 'transparent',
              borderRadius: '5px',
            }}
          >
            #{channel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
