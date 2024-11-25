import React from 'react';

interface ChatHistoryProps {
  messages: { sender: string; content: string; timestamp: string }[];
}

export const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.sender}</strong>: {message.content} <em>{message.timestamp}</em>
        </div>
      ))}
    </div>
  );
};
