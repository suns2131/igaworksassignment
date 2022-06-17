import React from "react";
import SerialChart from "../presentational/SerialChart";

function EventCounter() {
  const name = "접속유저";
  return <SerialChart name={name} />;
}

export default EventCounter;
