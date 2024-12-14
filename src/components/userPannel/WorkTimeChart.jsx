import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WorkTimeChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Work Time',
        data: [8, 4, 4, 8, 12, 2, 2],
        backgroundColor: ['#004225'], // Work time bars
        borderRadius: 4,
      },
      {
        label: 'Overtime',
        data: [0, 0, 0, 0, 4, 0, 0], // Only Friday has overtime
        backgroundColor: ['#007A3D'], // Overtime bar color
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 12, // Maximum hours
        ticks: {
          callback: (value) => `${value}h`,
        },
      },
    },
  };

  return (
    <div className="p-5 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Work Time History</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WorkTimeChart;
