import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Regex patterns for validation
  const namePattern = /^[a-zA-Z\s]{2,}$/; // Name should be at least 2 characters, letters and spaces
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email regex
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, one letter, and one digit

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

    // Validate name
    if (!namePattern.test(formData.name)) {
      newErrors.name = 'Name should be at least 2 characters and only letters or spaces.';
      valid = false;
    }

    // Validate email
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    // Validate password
    if (!passwordPattern.test(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters long, and include at least one letter and one number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Process the form data here, e.g., send to an API
    }
  };

  return (
    <div>
      <h2>React Form with Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
