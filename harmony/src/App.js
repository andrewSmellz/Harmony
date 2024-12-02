import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App = () => {
  const [channels, setChannels] = useState({
    general: [],
    random: [],
    help: [],
  });
  const [currentChannel, setCurrentChannel] = useState('general');

  const handleSendMessage = (message) => {
    const newMessage = {
      user: 'You',
      content: message,
      channel: currentChannel,
    };

    setChannels((prevChannels) => ({
      ...prevChannels,
      [currentChannel]: [...prevChannels[currentChannel], newMessage],
    }));
  };

  return (
    <div>
      <Sidebar 
        channels={Object.keys(channels)} 
        currentChannel={currentChannel} 
        setCurrentChannel={setCurrentChannel} 
      />
      <ChatWindow messages={channels[currentChannel]} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
