import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { useTheme } from '../../contexts/ThemeContext';

const provider = new GoogleAuthProvider();

const Signup: React.FC = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signed up successfully');
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Signed up with Google successfully');
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme.surfaces.primary}`}>
      <div className={`p-8 rounded-lg shadow-lg ${theme.surfaces.elevated}`}>
        <h2 className={`text-2xl font-bold mb-6 ${theme.text.primary}`}>Signup</h2>
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
          onClick={handleSignup}
          className={`
            w-full p-3 rounded-lg
            ${theme.accent.DEFAULT}
            hover:${theme.states.hover}
            text-white
            transition-all
            mb-4
          `}
        >
          Signup
        </button>
        <button
          onClick={handleGoogleSignup}
          className={`
            w-full p-3 rounded-lg
            ${theme.accent.DEFAULT}
            hover:${theme.states.hover}
            text-white
            transition-all
          `}
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;