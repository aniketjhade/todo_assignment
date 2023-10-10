import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    contactNumber: '',
    password: '',
    email: '',
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isEmailValid = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Store user data in local storage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    registeredUsers.push(formData);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Clear form fields
    setFormData({
      name: '',
      username: '',
      contactNumber: '',
      password: '',
      email: '',
      profileImage: null,
    });

    // Callback to parent component to handle registration
    onRegister();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Name :</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Username :</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Contact Number :</label>
          <input
            className="w-full border p-2 rounded"
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Password :</label>
          <input
            className="w-full border p-2 rounded"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email :</label>
          <input
            className="w-full border p-2 rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Profile Image :</label>
          <input
            className="w-full border p-2 rounded"
            type="file"
            name="profileImage"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        <div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
