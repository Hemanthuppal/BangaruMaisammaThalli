import React, { useEffect, useState } from 'react';
import { db } from "./../firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { Table } from 'react-bootstrap'; // Use Bootstrap for the table styling

const ViewDonation = () => {
  const [donations, setDonations] = useState([]); // State to store donation data

  useEffect(() => {
    // Function to fetch donations from Firestore
    const fetchDonations = async () => {
      try {
        const donationsCollection = collection(db, 'donations'); // Get 'donations' collection
        const donationSnapshot = await getDocs(donationsCollection); // Fetch all documents in the collection
        const donationList = donationSnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data()
        })); // Map through documents and get data
        setDonations(donationList); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching donations: ", error);
      }
    };

    fetchDonations(); // Call the function to fetch donations
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="container mt-5"> {/* Bootstrap container */}
      <h4 className="mb-4">Donation List</h4> {/* Header */}
      
      <Table striped bordered hover> {/* Bootstrap table */}
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}> {/* Use donation id as the key */}
              <td>{donation.firstName}</td>
              <td>{donation.lastName}</td>
              <td>{donation.email}</td>
              <td>{donation.mobileNumber}</td>
              <td>{donation.amount}</td>
              <td>{donation.paymentMethod}</td>
              <td>{donation.message}</td>
              <td>{new Date(donation.timestamp.seconds * 1000).toLocaleString()}</td> {/* Format Firestore timestamp */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewDonation;
