import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import "./Dashboard.css";  // Make sure this path and file name are correct

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="content-box">
        <p>This is your content inside the green-bordered box!</p>
      </div>
      <div className="chart-and-leaderboard">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <div className="leaderboard">
          <h3>Leaderboard</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
