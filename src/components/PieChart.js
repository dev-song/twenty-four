import React from 'react';
import { Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function PieChart({ schedule }) {
  let scheduleCounts = [];
  let count = 0;
  schedule.forEach(({ todo }, index, arr) => {
    count++;
    if (!arr[index + 1] || todo !== arr[index + 1].todo) {
      scheduleCounts.push(count);
      count = 0;
    }
  })

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      label: '# of Votes',
      data: scheduleCounts,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    title: {
      display: true,
      text: '하루 시간표'
    },
    legend: {
      display: false
    }
  };

  return (
    <div className='chart-container'>
      <Pie
        data={data}
        options={options}
      />
    </div>
  );
}

export default PieChart;