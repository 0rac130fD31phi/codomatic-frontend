import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { useTheme } from '../../contexts/ThemeContext';

const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully');
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Logged in with Google successfully');
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme.surfaces.primary}`}>
      <div className={`p-8 rounded-lg shadow-lg ${theme.surfaces.elevated}`}>
        <h2 className={`text-2xl font-bold mb-6 ${theme.text.primary}`}>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`w-full p-3 mb-4 rounded-lg border ${theme.border.color} ${theme.text.primary} ${theme.surfaces.secondary}`}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={`w-full p-3 mb-6 rounded-lg border ${theme.border.color} ${theme.text.primary} ${theme.surfaces.secondary}`}
        />
        <button
          onClick={handleLogin}
          className={`
            w-full p-3 rounded-lg
            ${theme.accent.DEFAULT}
            hover:${theme.states.hover}
            text-white
            transition-all
            mb-4
          `}
        >
          Login
        </button>
        <button
          onClick={handleGoogleLogin}
          className={`
            w-full p-3 rounded-lg
            ${theme.accent.DEFAULT}
            hover:${theme.states.hover}
            text-white
            transition-all
          `}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;