import React, { useState } from 'react';
import ApexChart from '../../components/UiElements/ApexChart/ApexChart';

type CashFlowType = {
  className?: string;
  categories: string[];
  cash: number[];
  height?: string;
  title?: string;
};

const CashFlow = ({
  className,
  title,
  categories,
  cash,
  height = '251',
}: CashFlowType) => {
  const [chartOptions, setChartOptions] = useState({
    options: {
      title: {
        text: title,
        align: 'left',
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: '#FF0080',
              },
              {
                from: -45,
                to: 0,
                color: '#7928CA',
              },
              {
                from: 0,
                to: 100,
                color: '#3AA76D',
              },
            ],
          },
          columnWidth: '60%',
        },
      },
      xaxis: {
        type: 'category',
        categories,
        labels: {
          show: false,
        },
      },
      legend: {
        position: 'bottom',
        fontFamily: 'inherit',
      },
      fill: {
        opacity: 1,
      },
    },
    series: [
      {
        name: 'Cash Flow',
        data: cash,
      },
    ],
  });

  return (
    <ApexChart
      className={className}
      options={chartOptions.options}
      series={chartOptions.series}
      type="bar"
      height={height}
    />
  );
};

export default CashFlow;
