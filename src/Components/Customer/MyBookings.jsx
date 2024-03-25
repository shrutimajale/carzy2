import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    // get bookings
    try {
      const response = await axios.get(
        `http://localhost:8080/api/request/customer/${userid}`,
        {
          headers: {
            token: token,
            userid: userid,
          },
        }
      );

      console.log(response.data); // Process the response as needed
      setBookings(response.data);

      return response.data;
    } catch (error) {
      console.error("Error getting Bookings:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Table striped bordered hover className="container">
      {bookings.length != 0 && (
        <thead>
          <tr>
            <th>Service Date</th>
            <th>Request Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Booking Status</th>
          </tr>
        </thead>
      )}
      {bookings.length != 0 && (
        <tbody>
          {bookings.map((booking, index) => (
            <tr>
              <td>{booking.date}</td>
              <td>{booking.id}</td>
              <td>{booking.carname}</td>
              <td>{booking.forWhat}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      )}
    </Table>
  );
}

export default MyBookings;
