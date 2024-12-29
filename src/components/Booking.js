import React, { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [room, setRoom] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState(0);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/bookings/book",
        {
          room,
          startDate,
          endDate,
          price,
        },
        config
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error making the booking!", error);
    }
  };

  return (
    <div>
      <h1>Book a Room</h1>
      <input
        type="text"
        placeholder="Room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default Booking;
