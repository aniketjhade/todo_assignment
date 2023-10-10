
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captchaValue: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value) => {
    setFormData({
      ...formData,
      captchaValue: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform CAPTCHA validation
    if (!formData.captchaValue) {
      alert('Please complete the CAPTCHA.');
      return;
    }

    // Retrieve registered users from local storage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));

    if (registeredUsers) {
      // Check if the entered email and password match any registered user
      const { email, password } = formData;
      const matchedUser = registeredUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        // Callback to parent component to handle login
        onLogin(matchedUser);
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('No registered users found');
    }

    // Clear login form fields
    setFormData({
      email: '',
      password: '',
      captchaValue: '',
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-600">Email:</label>
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
          <label className="block text-gray-600">Password:</label>
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
          <ReCAPTCHA
          sitekey="6Lfkf4ooAAAAACZ30k4M6tN8TN79lNZdsc5vr9N3"
            onChange={handleCaptchaChange}
          />
        </div>
        <div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
