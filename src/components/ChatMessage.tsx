
import React from 'react';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div className={`mb-3 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`px-3 py-2 rounded-lg max-w-[85%] ${
          isUser 
            ? 'bg-dealSim-navy text-white rounded-br-none' 
            : 'bg-white text-dealSim-navy border border-dealSim-gray/10 rounded-bl-none'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
