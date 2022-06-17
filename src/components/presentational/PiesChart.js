import React from "react";
import ApexChart from "react-apexcharts";

function PiesChart({ name }) {
  const data = {
    series: [10, 20, 30, 40, 50],
    options: {},
  };

  return (
    <div>
      <h4>{name}</h4>
      <ApexChart options={data.options} series={data.series} type="pie" width={450} height={450} />
    </div>
  );
}

export default PiesChart;
