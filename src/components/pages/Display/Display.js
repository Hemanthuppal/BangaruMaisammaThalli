import React, { useEffect, useState } from 'react';
import { db } from './../../firebase/firebase'; // Import your db instance from firebase.js
import { collection, getDocs } from 'firebase/firestore';

const Display = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        const contactList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContacts(contactList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className='container' >
      <div className='row'>
        <h2>Contacts List</h2>
        <table style={{marginTop: '100px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Country</th>
              <th>Pincode</th>
              <th>Message</th>
              <th>Year Of Passout</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.address}</td>
                <td>{contact.country}</td>
                <td>{contact.pincode}</td>
                <td>{contact.message}</td>
                <td>{contact.yearOfPassout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
