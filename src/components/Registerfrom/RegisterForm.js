import React, { useState } from 'react';
import { db } from "./../firebase/firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add a new document to the "users" collection in Firestore
      const docRef = await addDoc(collection(db, "users"), {
        name: formData.name,
        mobile: formData.mobile,
        age: formData.age,
        email: formData.email
      });
      console.log("Document written with ID: ", docRef.id);
      // Reset form after submission
      setFormData({ name: '', mobile: '', age: '', email: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
            <input 
              type='text' 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name" 
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Mobile</label>
            <input 
              type='text' 
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile" 
              className="form-control" 
            />
          </div>
          <div className="col-md-6">
            <label>Age</label>
            <input 
              type='text' 
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age" 
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input 
              type='text' 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              className="form-control"
            />
          </div>
          <div className="col-md-12 mt-3">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
