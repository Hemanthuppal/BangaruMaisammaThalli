import React, { useState, useEffect } from 'react';
import { db } from './../firebase/firebase'; // Import your firebase configuration
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore methods

const ViewRegisteration = () => {
  const [users, setUsers] = useState([]); // State to store fetched users data

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users')); // Fetch users from Firestore collection 'users'
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList); // Store fetched data in state
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  return (
    <div className="mt-5">
      <h3>Registered Users</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRegisteration;
