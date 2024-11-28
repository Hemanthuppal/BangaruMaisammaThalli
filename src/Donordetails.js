import React, { useEffect, useState } from 'react';
import { db } from './components/firebase/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

const DonorTable = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'donors'));
        const donorsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDonors(donorsList);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Donor List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Has Diseases or Surgeries</th>
            <th>Health History</th>
            <th>Adhaar Number</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {donors.length > 0 ? (
            donors.map((donor) => (
              <tr key={donor.id}>
                <td>{donor.bloodGroup}</td>
                <td>{donor.fullName}</td>
                <td>{donor.age}</td>
                <td>{donor.weight}</td>
                <td>{donor.hasDiseasesOrSurgeries ? 'Yes' : 'No'}</td>
                <td>{donor.healthHistory}</td>
                <td>{donor.adhaarNumber}</td>
                <td>{donor.address}</td>
                <td>{donor.mobileNumber}</td>
                <td>{donor.emailId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">
                No donor data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonorTable;
