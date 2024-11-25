import React, { useState } from 'react';

interface CommandInputProps {
  onSubmit: (input: string) => void;
  suggestions: string[];
}

export const CommandInput: React.FC<CommandInputProps> = ({ onSubmit, suggestions }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter command"
        list="suggestions"
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} />
        ))}
      </datalist>
      <button type="submit">Submit</button>
    </form>
  );
};
