import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400" />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400" />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required minLength="8" className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400" />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required minLength="8" className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400" />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
