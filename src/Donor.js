import React, { useState, useEffect } from 'react';
import { db } from './components/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';


const statesData = [
  { name: 'Andhra Pradesh', districts: ['Visakhapatnam', 'Guntur', 'Krishna', 'Chittoor', 'Kurnool'] },
  { name: 'Maharashtra', districts: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'] },
  { name: 'Tamil Nadu', districts: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'] },
  { name: 'Karnataka', districts: ['Bengaluru', 'Mysuru', 'Mangalore', 'Hubballi', 'Belgaum'] },
  { name: 'West Bengal', districts: ['Kolkata', 'Howrah', 'Darjeeling', 'Murshidabad', 'Birbhum'] },
  { name: 'Gujarat', districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'] },
  { name: 'Rajasthan', districts: ['Jaipur', 'Udaipur', 'Jodhpur', 'Ajmer', 'Bikaner'] },
  { name: 'Punjab', districts: ['Amritsar', 'Ludhiana', 'Chandigarh', 'Patiala', 'Jalandhar'] },
  { name: 'Haryana', districts: ['Gurugram', 'Faridabad', 'Ambala', 'Panipat', 'Hisar'] },
  { name: 'Uttar Pradesh', districts: ['Lucknow', 'Noida', 'Agra', 'Varanasi', 'Kanpur'] },
  { name: 'Bihar', districts: ['Patna', 'Gaya', 'Bhagalpur', 'Munger', 'Darbhanga'] },
  { name: 'Kerala', districts: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kollam', 'Malappuram'] },
  { name: 'Telangana', districts: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Mahbubnagar', 'Nalgonda'] },
  { name: 'Odisha', districts: ['Bhubaneswar', 'Cuttack', 'Sambalpur', 'Berhampur', 'Rourkela'] },
  { name: 'Jharkhand', districts: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar'] },
  { name: 'Assam', districts: ['Guwahati', 'Dibrugarh', 'Silchar', 'Tezpur', 'Jorhat'] },
  { name: 'Chhattisgarh', districts: ['Raipur', 'Bilaspur', 'Durg', 'Korba', 'Rajnandgaon'] },
  { name: 'Himachal Pradesh', districts: ['Shimla', 'Dharamshala', 'Kullu', 'Mandi', 'Solan'] },
  { name: 'Uttarakhand', districts: ['Dehradun', 'Haridwar', 'Nainital', 'Rudraprayag', 'Pauri Garhwal'] },
  { name: 'Sikkim', districts: ['Gangtok', 'Namchi', 'Mangan', 'Gyalshing', 'Jorethang'] },
  { name: 'Meghalaya', districts: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Bholaganj'] },
  { name: 'Mizoram', districts: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib'] },
  { name: 'Nagaland', districts: ['Kohima', 'Dimapur', 'Wokha', 'Mon', 'Zunheboto'] },
  { name: 'Tripura', districts: ['Agartala', 'Udaipur', 'Dharmanagar', 'Belonia', 'Ambassa'] },
  { name: 'Arunachal Pradesh', districts: ['Itanagar', 'Pasighat', 'Naharlagun', 'Tezpur', 'Bomdila'] },
  { name: 'Andaman and Nicobar Islands', districts: ['Port Blair', 'Diglipur', 'Havelock', 'Car Nicobar', 'Little Andaman'] },
  { name: 'Lakshadweep', districts: ['Kavaratti', 'Agatti', 'Minicoy', 'Kalapeni', 'Amini'] },
  { name: 'Delhi', districts: ['Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'] },
];



const Donor = () => {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    fullName: '',
    age: '',
    weight: '',
    hasDiseasesOrSurgeries: null,
    healthHistory: '',
    adhaarNumber: '',
    address: '',
    mobileNumber: '',
    emailId: '',
    country: 'India', // Set default country to India
    state: '',
    city: '',
    district: '',
    pincode: '',
  });

  const [districts, setDistricts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update districts when state changes
    if (name === 'state') {
      const selectedState = statesData.find((state) => state.name === value);
      setDistricts(selectedState ? selectedState.districts : []);
      setFormData((prevData) => ({
        ...prevData,
        district: '', // Reset district when state changes
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'donors'), formData);
      alert('Data saved successfully!');
      setFormData({
        bloodGroup: '',
        fullName: '',
        age: '',
        weight: '',
        hasDiseasesOrSurgeries: null,
        healthHistory: '',
        adhaarNumber: '',
        address: '',
        mobileNumber: '',
        emailId: '',
        country: 'India',
        state: '',
        city: '',
        district: '',
        pincode: '',
      });
    } catch (error) {
      console.error('Error saving data: ', error);
      alert('Failed to save data');
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>Blood Donor Details</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-6">
                <label>Blood Group</label>
                <input
                  type="text"
                  name="bloodGroup"
                  placeholder="Enter your blood group"
                  className="form-control"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Donor Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Donor Name"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-4">
                <label>Age</label>
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  className="form-control"
                  value={formData.age}
                  onChange={handleChange}
                />
                <small className="text-muted">Note: Donors need to be at least 16 or 17 years old</small>
              </div>
              <div className="col-4">
                <label>Weight</label>
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight in kgs"
                  className="form-control"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  className="form-control"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <label>Email ID</label>
                <input
                  type="text"
                  name="emailId"
                  placeholder="Email ID"
                  className="form-control"
                  value={formData.emailId}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                <label>Adhaar Number</label>
                <input
                  type="text"
                  name="adhaarNumber"
                  placeholder="Adhaar Number"
                  className="form-control"
                  value={formData.adhaarNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 mb-3">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your city"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label>State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select State</option>
                  {statesData.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label>District</label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="form-control"
                  disabled={districts.length === 0}
                >
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 mb-3">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  readOnly
                  className="form-control"
                />
              </div>
              <div className="col-md-4 mb-3">
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your pincode"
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donor;
