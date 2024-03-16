import React from 'react';
import { RadarChart, Radar, PolarAngleAxis, PolarGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const RadarChartPlot: React.FC = () => {
  const data = [
    {
      day: 'Bordeaux',
      amount: 500,
    },
    {
      day: 'Chardonnay',
      amount: 300,
    },
    {
      day: 'Pine noir',
      amount: 240,
    },
    {
      day: 'Cabernet',
      amount: 230,
    },
    {
      day: 'Pinot gris',
      amount: 150,
    },
    {
      day: 'Clairette',
      amount: 300,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="80%">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="day" />
        <Radar name="Cepage" dataKey="amount" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend wrapperStyle={{top: 0, left: 235}}/>
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartPlot;
