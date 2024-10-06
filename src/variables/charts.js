/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          label: 'Performance', // This label should be present for the legend
          borderColor: "skyblue", // Change the border color to sky blue
          backgroundColor: "rgba(135, 206, 235, 0.3)", // Change the fill color to a light sky blue
          pointRadius: 5, // Radius of points on the line
          pointHoverRadius: 7, // Radius of points on hover
          borderWidth: 3,
          tension: 0.4, // Smoothness of the line
          fill: true, // Fill the area under the line
          data: [5000, 6780, 8190, 9000, 9500, 9867, 10300, 12300, 13450, 15000],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'top', // You can change the position if needed
      },
      tooltip: { enabled: true }, // Enable tooltips
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          color: "#e0e0e0", // Add grid line color for better visibility
        },
      },
      x: {
        grid: {
          drawBorder: false,
          color: "#e0e0e0", // Add grid line color for better visibility
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};


const dashboardEmailStatisticsChart = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [480, 530, 120],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};



const dashboardNASDAQChart = {
  data: (canvas) => {
    return {
      labels: [
        'apple',
        'orange',
        'banana',
        'bean',
        'meat',
        'bread'
      ],

      datasets: [
        {
          data: [5, 8, 20, 21, 30, 40],
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [5, 8, 20, 21, 30, 40],
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
};
