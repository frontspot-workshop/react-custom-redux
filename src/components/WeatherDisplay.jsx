import React from "react";
import { Spinner } from "react-bootstrap";

const WeatherDisplay = ({ name, isLoading }) => {
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
};

export default WeatherDisplay;
