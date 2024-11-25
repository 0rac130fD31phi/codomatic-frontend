import { useState, useEffect } from 'react';
import { getChatHistory, sendMessage as sendChatMessage } from '../api/chat';

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

export const useProjectChat = (projectId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      const chatHistory = await getChatHistory(projectId);
      setMessages(chatHistory);
    };

    fetchChatHistory();
  }, [projectId]);

  const sendMessage = async (content: string) => {
    const messageData: Message = {
      sender: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    await sendChatMessage(projectId, messageData);
    setMessages((prevMessages) => [...prevMessages, messageData]);
  };

  return { messages, sendMessage };
};
