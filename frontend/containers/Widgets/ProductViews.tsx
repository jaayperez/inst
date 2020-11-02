import React, { useState } from 'react';
import ApexChart from '../../components/UiElements/ApexChart/ApexChart';

type ProductViewsType = {
  className?: string;
  categories: string[];
  products: number[];
  views: number[];
  height?: string;
  title?: string;
};

const ProductViews = ({
  className,
  title,
  categories,
  products,
  views,
  height = '247',
}: ProductViewsType) => {
  const [chartOptions, setChartOptions] = useState({
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: false,
        },
      },
      title: {
        text: title,
        align: 'left',
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#3AA76D', '#EEEEEE'],
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
        name: 'Product',
        data: products,
      },
      {
        name: 'View',
        data: views,
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

export default ProductViews;
