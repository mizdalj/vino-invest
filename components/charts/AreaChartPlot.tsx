import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';

interface DataPoint {
  year: string;
  Bordeaux: number;
  Chardonnay: number;
}

const AreaChartPlot: React.FC = () => {
  const data: DataPoint[] = [
    {
      year: "2016",
      Bordeaux: 4000,
      Chardonnay: 2400
    },
    {
      year: "2017",
      Bordeaux: 3000,
      Chardonnay: 1398
    },
    {
      year: "2018",
      Bordeaux: 2000,
      Chardonnay: 9800
    },
    {
      year: "2019",
      Bordeaux: 2780,
      Chardonnay: 3908
    },
    {
      year: "2020",
      Bordeaux: 1890,
      Chardonnay: 4800
    },
    {
      year: "2021",
      Bordeaux: 2390,
      Chardonnay: 3800
    },
    {
      year: "2022",
      Bordeaux: 3490,
      Chardonnay: 4300
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="70%">
      <AreaChart data={data} margin={{ right: 30}}>
        <XAxis stroke="#6EE7B7"  dataKey="year" />
        <YAxis stroke="#6EE7B7"  />
        <Tooltip />
        <Area type="monotone" dataKey="Bordeaux" stroke="#b40909" fillOpacity={0.3} fill="#b40909" />
        <Area type="monotone" dataKey="Chardonnay" stroke="#d6a07b" fillOpacity={0.4} fill="#d6a07b" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartPlot;
