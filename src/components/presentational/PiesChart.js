import React from "react";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

function PiesChart({ name, labels, values }) {
  const data = {
    series: values,
    options: {
      labels,
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
    },
  };

  return (
    <ComponentDiv>
      <h4>{name}</h4>
      <ApexChart options={data.options} series={data.series} type="pie" />
    </ComponentDiv>
  );
}

const ComponentDiv = styled.div`
  width: 100%;
  height: 95%;
`;

export default PiesChart;
