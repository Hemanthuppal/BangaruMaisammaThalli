import React from 'react';
import { Table, Container } from 'react-bootstrap';

const HolidayList = () => {
  const holidays = [
    { date: '7 November 2024', day: 'Thursday', holiday: 'Chhath Puja' },
    { date: '15 November 2024', day: 'Friday', holiday: 'Kartik Poornima' },
    { date: '11 December 2024', day: 'Wednesday', holiday: 'Geeta Jayanti' },
    { date: '15 December 2024', day: 'Sunday', holiday: 'Dhanu Sankranti' },
  ];

  return (
    <Container
      style={{
        backgroundColor: "#FEFCF3", // Set background color
        padding: "50px",
        minHeight: "100vh", // Ensure the section spans the viewport height
      }}
    >
      <h2 className="text-center">Events List</h2>
      <Table
        striped
        bordered
        hover
        responsive
        className="text-center"
        style={{ marginTop: "70px" }}
      >
        <thead>
          <tr>
            <th style={{ backgroundColor: "#FFC067" }}>Date</th>
            <th style={{ backgroundColor: "#FFC067" }}>Day</th>
            <th style={{ backgroundColor: "#FFC067" }}>Events</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index}>
              <td>{holiday.date}</td>
              <td>{holiday.day}</td>
              <td>{holiday.holiday}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HolidayList;
