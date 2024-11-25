import React from 'react';
import { useProjectChat } from '../../hooks/useProjectChat';
import { useProjectTeam } from '../../hooks/useProjectTeam';
import { ChatHistory } from '../ui/ChatHistory';
import { AgentActivities } from '../ui/AgentActivities';
import { ChatInput } from '../ui/ChatInput';

export const ProjectChat: React.FC<{ projectId: string }> = ({ projectId }) => {
  const { messages, sendMessage } = useProjectChat(projectId);
  const { team } = useProjectTeam(projectId);

  return (
    <div className="flex flex-col h-full">
      <ChatHistory messages={messages} />
      <AgentActivities team={team} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
};
