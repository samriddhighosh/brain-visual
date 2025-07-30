import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Income", "Outcome", "Others"],
    colors: ["#3b82f6", "#8AA7FF", "#C1D0FF"],
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: { size: "60%" },
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 5,
      colors: ["#fff"],
    },
  };

  const series = [47, 23, 30];

  return <Chart options={options} series={series} type="donut" width={120} height={120} />;
};

export default DonutChart;
