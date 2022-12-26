import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Table = () => {
  const [data2, setData2] = useState([]);
  const [app, setApp] = useState([]);
  const [CollabData, setCollabData] = useState([]);
  const [startDate, setStartDate] = useState(new Date("2021-05-01"));
  const [endDate, setEndDate] = useState(new Date("2021-05-03"));

  //calling both the api's
  const getData = async () => {
    try {
      let url = "http://go-dev.greedygame.com/v3/dummy/apps";
      let url2 =
        "http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03";

      const api1 = url + `/startDate=${startDate}`;
      const api2 = url + `/endDate=${endDate}`;
      const api3 = url + api1 + api2;

      const res = await fetch(url);
      const dataset = await res.json();

      const res2 = await fetch(url2);
      const dataset2 = await res2.json();

      setData2(dataset.data);
      setApp(dataset2.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //merging bothe the api's to form a new array for data rendering at table
  useEffect(() => {
    const arr = [];
    if (data2.length > 0 && app.length > 0) {
      app.map((item, index) => {
        let obj = {};
        data2.filter((s, i) => {
          if (s.app_id == item.app_id) {
            obj["app_name"] = s.app_name;
            obj["app_id"] = s.app_id;
            obj["date"] = item.date;
            obj["requests"] = item.requests;
            obj["responses"] = item.responses;
            obj["impressions"] = item.impressions;
            obj["clicks"] = item.clicks;
            obj["revenue"] = item.revenue;
          }
        });
        arr.push(obj);
      });
      setCollabData(arr);
    }
  }, [app, data2]);

  const filteredDate = CollabData.reduce((finalarray, current) => {
    let obj = finalarray.find((item) => item.app_id === current.app_id);
    if (obj) {
      return finalarray;
    }
    return finalarray.concat([current]);
  }, []);

  return (
    <div className="container my-5">
      <div className="container m-5">
        <input><DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date("2021/06/1")}
          maxDate={new Date("2021/06/31")}
          startDate={new Date("2021/06/1")}
        /></input>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date("2021/06/1")}
          maxDate={new Date("2021/06/31")}
          startDate={new Date("2021/06/1")}
        />
      </div>

      <table className="table table-stripped">
        <thead>
          <tr>
            <th>App Id</th>
            <th>App Name</th>
            <th>Clicks</th>
            <th>Date</th>
            <th>Impression</th>
            <th>Requests </th>
            <th>responses</th>
            <th>revenue</th>
          </tr>
        </thead>
        <tbody>
          {CollabData.map((item, index) => (
            <tr key={index}>
              <td> {item.app_id} </td>
              <td> {item.app_name} </td>
              <td>{item.clicks}</td>
              <td>{new Date(item.date).toDateString("yy-dd-MM")}</td>
              <td>{item.impressions}</td>
              <td>{item.requests}</td>
              <td>{item.responses}</td>
              <td>{item.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
