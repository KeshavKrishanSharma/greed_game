import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Table";
import {FcDeleteColumn,FcRating,FcAddColumn}from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import {GiSettingsKnobs}from 'react-icons/gi'
import {IoIosFunnel} from 'react-icons/io'


const Table = () => {
  const [data2, setData2] = useState([]);
  const [app, setApp] = useState([]);
  const [CollabData, setCollabData] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [showClickcol, setShowClick] = useState(false);
  const [showDatecol, setShowDate] = useState(false);
  const [showImpressioncol, setShowImpression] = useState(false);
  const [showRequestscol, setShowRequests] = useState(false);
  const [showResponsescol, setShowResponses] = useState(false);
  const [showRevenuecol, setShowRevenue] = useState(false);
  
  //calling both the api's
  const getData = async () => {
    try {
      let url = "https://go-dev.greedygame.com/v3/dummy/apps";
      let url2 =
        "https://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03";

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
      app.map((item) => {
        let obj = {};
        data2.filter((s) => {
          if (s.app_id === item.app_id) {
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

  const showSettings = () => {
    setShowContent(true);
  };
  const hideSettings = () => {
    setShowContent(false);
  };

  const hidedate = () => {
    setShowDate(true);
  };
  const showdate  = () => {
    setShowDate(false);
  };

  const hideclick = () => {
    setShowClick(true);
  };
  const showclick  = () => {
    setShowClick(false);
  };


  const hideimpression = () => {
    setShowImpression(true);
  };
  const showimpression  = () => {
    setShowImpression(false);
  };


  const hiderequests = () => {
    setShowRequests(true);
  };
  const showrequests  = () => {
    setShowRequests(false);
  };


  const hideresponses = () => {
    setShowResponses(true);
  };
  const showresponses = () => {
    setShowResponses(false);
  };


  const hiderevenue = () => {
    setShowRevenue(true);
  };
  const showrevenue  = () => {
    setShowRevenue(false);
  };

  return (
    <div className="container ">
    <Wrapper>
    <div className="float-end my-5">
        {!showContent && (
          <button onClick={showSettings} className=" setting_btn border-0 py-2 px-4">
            <GiSettingsKnobs color="blue" size={25} />  Settings
          </button>
        )}
      </div>
      {showContent && (
        <div className="">
          <div className="container-fluid my-5">
          <button
            onClick={hideSettings}
            className="bg-white border-0 float-end"
          >
            <AiOutlineClose className="mt-2" color="red" size={30} />
          </button>
          <h4>
            Dementions and Metrics
          </h4>
            <div className="row">
              <div className="col mx-2 btn_settings py-2  ">Date { !showDatecol  &&<div onClick={ hidedate } className=" hide_icon  float-end"><FcDeleteColumn size={25} /></div>}
              { showDatecol && <div onClick={showdate} className=" hide_icon  float-end"><FcAddColumn size={25} /></div> }</div>

              <div className="col mx-2 btn_settings py-2  ">Clicks { !showClickcol  &&<div onClick={ hideclick } className=" hide_icon  float-end"><FcDeleteColumn size={25} /></div>}
              { showClickcol && <div onClick={showclick} className=" hide_icon  float-end"><FcAddColumn size={25} /></div> }</div>

              <div className="col mx-2 btn_settings py-2  ">Impression { !showImpressioncol  &&<div onClick={ hideimpression } className=" hide_icon  float-end"><FcDeleteColumn size={25} /></div>}
              { showImpressioncol && <div onClick={showimpression} className=" hide_icon  float-end"><FcAddColumn size={25} /></div> }</div>

              <div className="col mx-2 btn_settings py-2  ">Requests { !showRequestscol  &&<div onClick={ hiderequests } className=" hide_icon  float-end"><FcDeleteColumn size={25} /></div>}
              { showRequestscol && <div onClick={showrequests} className=" hide_icon  float-end"><FcAddColumn size={25} /></div> }</div>

              <div className="col mx-2 btn_settings py-2  ">Responses { !showResponsescol  &&<div onClick={ hideresponses } className=" hide_icon  float-end"><FcDeleteColumn size={25} /></div>}
              { showResponsescol && <div onClick={showresponses} className=" hide_icon  float-end"><FcAddColumn size={25} /></div> }</div>

              <div className="col mx-2 btn_settings py-2  ">Revenue { !showRevenuecol  &&<div onClick={ hiderevenue } className=" hide_icon  float-end"><FcDeleteColumn size={25} /></div>}
              { showRevenuecol && <div onClick={showrevenue} className=" hide_icon  float-end"><FcAddColumn size={25} /></div> }</div>

             
            </div>
          </div>
         
        </div>
      )}


    </Wrapper>





      <table className="table table-stripped">
        <thead>
          <tr className="table_border text-center ">
            <th  ><IoIosFunnel  size={22} color="grey" /></th>
            <th><IoIosFunnel  size={22} color="grey" /></th>
            {!showDatecol  &&<th ><IoIosFunnel  size={22} color="grey" /></th>}
            {!showClickcol  &&<th><IoIosFunnel  size={22} color="grey" /></th>}
            {!showImpressioncol  &&<th><IoIosFunnel  size={22} color="grey" /></th>}
            {!showRequestscol  &&<th><IoIosFunnel  size={22} color="grey" /></th>}
            {!showResponsescol  &&<th><IoIosFunnel  size={22} color="grey" /></th>}
            {!showRevenuecol  &&<th><IoIosFunnel  size={22} color="grey" /></th>}
            
          </tr>
          <tr className="table_border text-secondary text-center">
            <th>  Date</th>
            <th>App Name</th>
            {!showDatecol  &&<th>App Id</th>}
            {!showClickcol  &&<th>Clicks</th>}
            {!showImpressioncol  &&<th>Impression</th>}
            {!showRequestscol  &&<th>Requests</th>}
            {!showResponsescol  &&<th>responses</th>}
            {!showRevenuecol  &&<th>revenue</th>}
            
          </tr>
          

         
        </thead>
        <tbody>
        <tr className="text-center font_weight fw-none fs-3">
            <th>7</th>
            <th>420</th>
            {!showDatecol  &&<th>420</th>}
            {!showClickcol  &&<th>2.15M</th>}
            {!showImpressioncol  &&<th>75.33%</th>}
            {!showRequestscol  &&<th>3.5M</th>}
            {!showResponsescol  &&<th>99.5%</th>}
            {!showRevenuecol  &&<th>$36,513</th>}
            
          </tr>
          {CollabData.map((item, index) => (
            <tr key={index}>
            
              <td> {new Date(item.date).toDateString()} </td>
              <td><FcRating size={25}/> {item.app_name} </td>
              { !showDatecol  &&<td>{item.app_id}</td>}
              { !showClickcol  &&<td>{item.clicks}  </td>}
              { !showImpressioncol  &&<td>{item.impressions}  </td>}
              { !showRequestscol  &&<td>{item.requests}  </td>}
              { !showResponsescol  &&<td>{item.responses}  </td>}
              { !showRevenuecol  &&<td>{item.revenue}  </td>}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
