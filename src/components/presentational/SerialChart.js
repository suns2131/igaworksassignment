import React from "react";
import ApexChart from "react-apexcharts";

function SerialChart({ name, xLabel, YlabelBar, YlabelLine }) {
  const data = {
    series: [
      {
        type: "column",
        data: YlabelBar,
      },
      {
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
      title: {
        text: "Traffic Sources",
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
        {},
        {
          opposite: true,
        },
      ],
    },
  };

  return (
    <div>
      <h4>{name}</h4>
      <ApexChart options={data.options} series={data.series} type="line" width="100%" height={450} />
    </div>
  );
}

export default SerialChart;
