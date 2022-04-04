import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="row row-cols-2 g-4 mt-5">
      <div className="col">
        <LineChart width={600} height={400} data={data}>
          <Line stroke="#8884d8" type="monotone" dataKey="investment"></Line>
          <Line stroke="#8884d8" type="monotone" dataKey="revenue"></Line>
          <XAxis dataKey="month" />
          <YAxis></YAxis>
          <Legend></Legend>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div className="col">
        <BarChart width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
          <Bar dataKey="revenue" stackId="a" fill="#8884d8"></Bar>
          <Bar dataKey="investment" stackId="a" fill="#82ca9d"></Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
