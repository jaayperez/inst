import React, { useState } from 'react';
import ApexChart from '../../components/UiElements/ApexChart/ApexChart';

type ViewsType = {
  className?: string;
  totalView: number;
};

const Views = ({ className, totalView }: ViewsType) => {
  const [chartOptions, setChartOptions] = useState({
    options: {
      chart: {
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#EEEEEE',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: '#000000',
              fontSize: '30px',
              show: true,
              formatter: function(val: any) {
                return parseInt(val);
              },
            },
          },
        },
      },
      fill: {
        colors: ['#7928CA'],
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Percent'],
    },
    series: [totalView],
  });

  return (
    <ApexChart
      className={className}
      options={chartOptions.options}
      series={chartOptions.series}
      type="radialBar"
      height="315"
    />
  );
};

export default Views;
