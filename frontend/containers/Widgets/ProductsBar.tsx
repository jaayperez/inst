import React, { useState } from 'react';
import ApexChart from '../../components/UiElements/ApexChart/ApexChart';

type ProductsBarType = {
  className?: string;
  labels: string[];
  products: number[];
};

const ProductsBar = ({ className, labels, products }: ProductsBarType) => {
  const [chartOptions, setChartOptions] = useState({
    options: {
      fill: {
        colors: ['#0070F3', '#7928CA', '#FF0080'],
      },
      colors: ['#0070F3', '#7928CA', '#FF0080'],
      chart: {
        toolbar: {
          show: true,
        },
      },
      labels,
      dataLabels: {
        style: {
          fontSize: '30px',
        },
      },
    },
    series: products,
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

export default ProductsBar;
