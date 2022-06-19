import React from "react";
import SerialChart from "../presentational/SerialChart";

function EventProgress({ data }) {
  const name = "DAU";
  const xLabel = [];
  const YlabelBar = [];
  const YlabelLine = [];

  if (data != null) {
    const { rows } = data;
    const responeData = [...rows].sort((a, b) => new Date(a[0]) - new Date(b[0]));
    for (let i = 0; i < responeData.length; i += 1) {
      xLabel.push(responeData[i][0]);
      YlabelLine.push(responeData[i][1]);
      YlabelBar.push(responeData[i][2]);
    }
  }

  return <SerialChart name={name} xLabel={xLabel} YlabelBar={YlabelBar} YlabelLine={YlabelLine} />;
}

export default EventProgress;
