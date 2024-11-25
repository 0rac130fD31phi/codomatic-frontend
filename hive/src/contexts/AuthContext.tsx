import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  user: { id: string; email: string; teams: string[] } | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ id: string; email: string; teams: string[] } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setUser({ id: '1', email: 'user@example.com', teams: ['team1', 'team2'] });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
