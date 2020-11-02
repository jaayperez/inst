import React from 'react';
import dynamic from 'next/dynamic';
const ChartWithNoSSR = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type ApexChartType = {
  [props: string]: any;
};

const ApexChart = (props: ApexChartType) => {
  return <ChartWithNoSSR {...props} />;
};

export default ApexChart;
