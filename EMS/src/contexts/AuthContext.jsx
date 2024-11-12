import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode"; // Ensure this import is correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode JWT
        setUsername(decodedToken.username || decodedToken.name); // Adjust based on JWT structure
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Invalid token', error);
        setIsAuthenticated(false);
        setUsername('');
      }
    }
  }, []);


  const login = (token) => {
    localStorage.setItem('token', token);

    const decodedToken = jwtDecode(token);
    setUsername(decodedToken.username || decodedToken.name); // Adjust based on JWT structure
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token'); // Only remove auth token
     localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUsername('');
    
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
