import React from "react";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

//
function SerialChart({ xLabel, YlabelBar, YlabelLine }) {
  const data = {
    series: [
      {
        name: "Unique Event Count",
        type: "column",
        data: YlabelBar,
      },
      {
        name: "Total Event Count",
        type: "line",
        data: YlabelLine,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: xLabel,
      xaxis: {
        type: "datetime",
      },
      yaxis: [
        {
          title: {},
        },
        {
          opposite: true,
          title: {},
        },
      ],
    },
  };

  return (
    <ComponentDiv>
      <ApexChart options={data.options} series={data.series} type="line" width="100%" height="100%" />
    </ComponentDiv>
  );
}

const ComponentDiv = styled.div`
  width: 100%;
  height: 90%;
`;

export default SerialChart;
