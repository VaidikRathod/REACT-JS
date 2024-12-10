import React, { useState } from 'react';
import './App.css'; // Include this for additional styling

const ProductForm = () => {
  // State management for form data and validation states
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    category: '',
    description: '',
    productImage: null,
  });

  const [errors, setErrors] = useState({
    productName: '',
    productPrice: '',
    category: '',
    productImage: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);



  
  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };






  // Handler for file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setFormData({
          ...formData,
          productImage: file.name,
        });
        setErrors({
          ...errors,
          productImage: '',
        });
      } else {
        setErrors({
          ...errors,
          productImage: 'Only JPEG and PNG image files are allowed.',
        });
      }
    } else {
      setFormData({
        ...formData,
        productImage: null,
      });
    }
  };




  // Validation function
  const validateField = (fieldName, value) => {
    let fieldError = '';

    switch (fieldName) {
      case 'productName':
        if (!value) {
          fieldError = 'Product name is required.';
        } else if (value.length < 3) {
          fieldError = 'Product name must be at least 3 characters long.';
        }
        break;

      case 'productPrice':
        if (!value) {
          fieldError = 'Product price is required.';
        } else if (isNaN(value) || Number(value) <= 0) {
          fieldError = 'Price must be a positive number.';
        }
        break;

      case 'category':
        if (!value) {
          fieldError = 'Category is required.';
        }
        break;

      case 'productImage':
        if (!value) {
          fieldError = 'Product image is required.';
        }
        break;

      default:
        break;
    }

    setErrors({
      ...errors,
      [fieldName]: fieldError,
    });

    checkFormValidity();
  };





  // Function to check overall form validity
  const checkFormValidity = () => {
    const formIsValid =
      !errors.productName &&
      !errors.productPrice &&
      !errors.category &&
      !errors.productImage &&
      formData.productName &&
      formData.productPrice &&
      formData.category &&
      formData.productImage;

    setIsFormValid(formIsValid);
  };




  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      console.log('Product details submitted:', formData);
      alert('Product Registered Successfully!');
      setFormData({
        productName: '',
        productPrice: '',
        category: '',
        description: '',
        productImage: null,
      });
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };

  return (
    <div className="product-form">
      <h2>Product Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.productName ? 'invalid' : ''}`}>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
          {errors.productName && <span className="error">{errors.productName}</span>}
        </div>

        <div className={`form-group ${errors.productPrice ? 'invalid' : ''}`}>
          <label>Product Price:</label>
          <input
            type="number"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
          {errors.productPrice && <span className="error">{errors.productPrice}</span>}
        </div>

        <div className={`form-group ${errors.category ? 'invalid' : ''}`}>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Groceries">Groceries</option>
            <option value="Books">Books</option>
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength="200"
          />
        </div>

        <div className={`form-group ${errors.productImage ? 'invalid' : ''}`}>
          <label>Product Image:</label>
          <input
            type="file"
            name="productImage"
            accept="image/jpeg,image/png"
            onChange={handleFileChange}
          />
          {errors.productImage && <span className="error">{errors.productImage}</span>}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
