
import { useEffect, useRef } from 'react';
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface PieChartProps {
  interestRate: string;
}

const PieChart = ({ interestRate }: PieChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  // Parse interest rate, defaulting to 0 if invalid
  const rate = parseFloat(interestRate.replace(/[^\d.-]/g, '')) || 0;
  
  const data = [
    { name: 'Interest', value: rate, color: '#4682B4' },
    { name: 'Remaining', value: 100 - rate, color: '#E5E7EB' },
  ];
  
  return (
    <div className="h-64 mt-4" ref={chartRef}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ value, name }) => name === 'Interest' ? `${value}%` : ''}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </RechartsChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
