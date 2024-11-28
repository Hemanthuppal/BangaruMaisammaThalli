import React, { useEffect, useState } from "react";
import { db } from "./../../firebase/firebase"; // Import Firestore configuration
import { collection, getDocs } from "firebase/firestore";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch donations from Firestore
    const fetchDonations = async () => {
      try {
        const donationCollection = collection(db, "donations");
        const donationSnapshot = await getDocs(donationCollection);
        const donationList = donationSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDonations(donationList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching donations: ", error);
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: "#FEFCF3", padding: "20px", borderRadius: "10px" }}
    >
      <h2 className="text-center" style={{ color: "black", fontWeight: "bold" }}>
        Donation Records
      </h2>

      {donations.length === 0 ? (
        <p className="text-center" style={{ color: "black" }}>
          No donation records found.
        </p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={donation.id}>
                <td>{index + 1}</td>
                <td>{donation.firstName || "N/A"}</td>
                <td>{donation.lastName || "N/A"}</td>
                <td>{donation.mobileNumber || "N/A"}</td>
                <td>{donation.email || "N/A"}</td>
                <td>₹{donation.amount || "N/A"}</td>
                <td>{donation.paymentMethod || "N/A"}</td>
                <td>{donation.message || "N/A"}</td>
                <td>
                  {donation.timestamp
                    ? new Date(donation.timestamp.seconds * 1000).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Donation;
