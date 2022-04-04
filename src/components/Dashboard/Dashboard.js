import React, { useEffect, useState } from "react";
import Chart from "../Chart/Chart";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="row row-cols-2 g-4 mt-5">
      {
        datas.map(data => <Chart key={data.sell} data={data}></Chart>)
      }
    </div>
  );
};

export default Dashboard;
