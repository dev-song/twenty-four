import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

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

function PieSchedule({ schedule }) {
  const scheduleList = [];
  let startTime,
    endTime,
    content;
  schedule.forEach(({ time, todo, id }, index, arr) => {
    if (!startTime && startTime !== 0) {
      startTime = time;
      content = todo;
    }
    if (!arr[index + 1] || todo !== arr[index + 1].todo) {
      endTime = time + 1;
      scheduleList.push({
        startTime,
        endTime,
        content,
        id
      });
      startTime = null;
      endTime = null;
      content = null;
    }
  })

  const scheduleData = scheduleList.map(({ startTime, endTime, content }) => ({
    name: content,
    value: endTime - startTime
  }));


  return (
    <PieChart width={800} height={480}>
      <Pie
        data={scheduleData}
        dataKey='value'
        cx={200}
        cy={200}
        label={customLabel}
        labelLine={false}
        innerRadius={0}
        outerRadius={200}
        startAngle={90}
        endAngle={-270}
        fill="#111ddd"
      >
        {
          scheduleData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))
        }
      </Pie>
    </PieChart>
  )
}

export default PieSchedule;