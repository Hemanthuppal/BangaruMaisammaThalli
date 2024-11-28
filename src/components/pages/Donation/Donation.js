import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import underline from "./../../img/cropunderline.png";
import { db } from "./../../firebase/firebase"; // Import Firestore
import { collection, addDoc } from "firebase/firestore";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const amounts = [15, 25, 45, 100];

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const donationRef = collection(db, "donations"); // Specify Firestore collection
      await addDoc(donationRef, {
        amount: selectedAmount,
        paymentMethod,
        ...formData,
        timestamp: new Date(), // Add a timestamp
      });
      alert("Thank you for your donation!");
      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        message: "",
      });
      setSelectedAmount(100);
      setPaymentMethod("online");
    } catch (error) {
      console.error("Error submitting donation: ", error);
      alert("There was an error submitting your donation. Please try again.");
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#FEFCF3",
        padding: "50px",
        minHeight: "100vh",
      }}
    >
      <h2
        className="text-center"
        style={{
          color: "black",
          fontWeight: "bold",
          padding: "10px",
          marginTop: "100px",
        }}
      >
        Donate To Help
      </h2>
      <div className="text-center mb-4">
        <img
          src={underline}
          alt="Underline Decoration"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <p
        className="text-center"
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Make a donation to help us
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Left Section: Donation Amount and Payment Method */}
          <div className="col-md-6">
            {/* Donation Amount Section */}
            <h4 style={{ color: "black", fontWeight: "bold" }}>
              Donation Amount
            </h4>
            <div className="d-flex align-items-center mb-4">
              <div
                style={{
                  backgroundColor: "blue",
                  color: "#fff",
                  borderRadius: "10px 0 0 10px",
                  padding: "10px 20px",
                  fontSize: "24px",
                }}
              >
                ₹
              </div>
              <input
                type="text"
                className="form-control"
                value={`₹${selectedAmount}`}
                style={{
                  borderRadius: "0 10px 10px 0",
                  height: "60px",
                  fontSize: "24px",
                }}
                readOnly
              />
            </div>

            <div className="d-flex flex-wrap justify-content-between mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className="btn mb-2"
                  style={{
                    backgroundColor: selectedAmount === amount ? "blue" : "#fff",
                    color: selectedAmount === amount ? "#fff" : "blue",
                    border: "1px solid #ddd",
                    borderRadius: "50px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    flex: "1 0 45%",
                    minWidth: "120px",
                  }}
                  onClick={() => setSelectedAmount(amount)}
                  type="button"
                >
                  ₹{amount.toFixed(2)}
                </button>
              ))}
            </div>

            {/* Payment Method Section */}
            <h4 style={{ color: "black", fontWeight: "bold" }}>
              Payment Method
            </h4>
            <div className="d-flex justify-content-start align-items-center">
              <div className="form-check me-4 ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="onlinePayment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                <label
                  className="form-check-label"
                  htmlFor="onlinePayment"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Online Payment
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="offlinePayment"
                  value="offline"
                  checked={paymentMethod === "offline"}
                  onChange={() => setPaymentMethod("offline")}
                />
                <label
                  className="form-check-label"
                  htmlFor="offlinePayment"
                  style={{ color: "black", fontSize: "18px" }}
                >
                  Offline Payment
                </label>
              </div>
            </div>
          </div>

          {/* Right Section: Informational Text */}
          <div className="col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: "#FEFCF3",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4 style={{ color: "black", fontWeight: "bold" }}>
                How Your Donation Helps
              </h4>
              <p style={{ fontSize: "18px", color: "black", marginTop: "20px" }}>
                Your generous contributions are used for:
              </p>
              <ul
                style={{ fontSize: "16px", color: "black", paddingLeft: "20px" }}
              >
                <li>Development of the temple</li>
                <li>Annadaanam (Food offerings)</li>
                <li>Nithya Pooja Seva (Daily rituals)</li>
                <li>Maintenance of temple facilities</li>
              </ul>
              <p
                style={{
                  fontSize: "16px",
                  color: "black",
                  marginTop: "20px",
                }}
              >
                Thank you for supporting us in preserving our cultural heritage
                and spiritual practices.
              </p>
            </div>
          </div>
        </div>

        {/* Donator Details Section */}
        <h4 style={{ color: "black", fontWeight: "bold" }}>Donator Details</h4>
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{
                height: "60px",
                fontSize: "18px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{
                height: "60px",
                fontSize: "18px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              style={{
                height: "60px",
                fontSize: "18px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                height: "60px",
                fontSize: "18px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* Message Section */}
        <h4 style={{ color: "black", fontWeight: "bold" }}>Message</h4>
        <div className="mb-4">
          <textarea
            className="form-control"
            placeholder="Enter Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{
              height: "150px",
              fontSize: "18px",
              borderRadius: "10px",
            }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "blue",
              color: "#fff",
              padding: "15px 50px",
              fontSize: "18px",
              borderRadius: "50px",
            }}
          >
            DONATE NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default Donation;
