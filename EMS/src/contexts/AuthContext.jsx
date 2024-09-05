import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Check for token in local storage when app loads
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        const  username  = jwtDecode(token); // Decode JWT
        setUsername(username);
        setIsAuthenticated(true);
       
      } catch (error) {
        console.error('Invalid token', error);
        setIsAuthenticated(false);
      }
    }
  }, []);

  const login = async (token) => {
    console.log('Login function called'); // Check if this logs
    localStorage.setItem('token', token);
    const username  = jwtDecode(token); // Decode JWT
    setUsername(username);
    setIsAuthenticated(true);
   
  };

  const logout = () => {
    localStorage.removeItem('token');
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
