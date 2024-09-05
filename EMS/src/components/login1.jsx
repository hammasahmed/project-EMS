// ./src/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [userLogin, setuserLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userLogin),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('user Logined succesfully', data);
        // You can add logic here to handle what happens after a successful submission
      } else {
        console.error('Failed to LOGIN');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <p className="text-center mb-4 ">
          Don't have an account? <a href="#" className="text-green-500">Sign up</a>
        </p>
        <div className="flex justify-around mb-4 ">
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:animate-spin">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:animate-spin">
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:animate-spin">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="Github" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:animate-spin">
            <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Feide" />
          </button>
        </div>
        <div className="text-center mb-4">OR</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={userLogin.email}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={userLogin.password}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
          />
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;