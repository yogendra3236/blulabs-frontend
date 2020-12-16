import React, { useEffect } from "react";
import qs from "query-string";

import Navbar from "../Navbar";
import BookingForm from "./BookingForm";

const Booking = () => {
  useEffect(() => {
    const { id } = qs.parse(window.location.search);
    console.log(id);
  }, []);

  const handleBookingSubmit = ({ e, fuelType, vehicle }) => {
    e.preventDefault();
    
  }

  return (
    <div>
      <Navbar name="Add New Booking" />
      <BookingForm handleBookingSubmit={handleBookingSubmit} />
    </div>
  );
};

export default Booking;
