import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 500px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const BookingForm = ({ handleBookingSubmit }) => {
  const [fuelType, setFuelType] = useState("Petrol");
  const [vehicle, setVehicle] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    if (name === "fuelType") setFuelType(value);
    else if (name === "vehicle") setVehicle(value);
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => handleBookingSubmit({ e, fuelType, vehicle })}>
        <div className="form-group">
          <label htmlFor="fuelType">Choose Fuel Type</label>
          <select
            onChange={handleChange}
            name="fuelType"
            className="form-control"
            id="fuelType"
            value={fuelType}
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Gas</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="vehicle">Vehicle</label>
          <input
            name="vehicle"
            onChange={handleChange}
            value={vehicle}
            className="form-control"
            id="vehicle"
            aria-describedby="vehicle"
            placeholder="Enter Vehicle Type"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default BookingForm;
