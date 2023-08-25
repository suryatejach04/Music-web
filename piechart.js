import React from 'react';
import Chart from 'chart.js';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Piechart = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'pie',
        data: data,
      });
    }
  }, [chartRef]);

  return (
    <div>
      <h2>Pie Chart</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Piechart;