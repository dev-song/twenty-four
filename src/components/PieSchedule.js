import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  {
    name: 'Group A',
    value: 800
  },
  {
    name: 'Group B',
    value: 300
  },
  {
    name: 'Group C',
    value: 300
  },
  {
    name: 'Group D',
    value: 200
  }
];
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042'
];
const RADIAN = Math.PI / 180;
const customLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

class PieSchedule extends React.Component {
  render() {
    return (
      <PieChart width={800} height={480}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          label={customLabel}
          labelLine={false}
          innerRadius={0}
          outerRadius={200}
          fill="#111ddd"
        >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    )
  }
}

export default PieSchedule;