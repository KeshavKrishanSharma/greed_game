
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DateSetter = () => {
  
    const [startDate, setStartDate] = useState(new Date("2021/06/01"));
    const [endDate, setEndDate] = useState(new Date("2021/06/01"));
    return (
     <div className="container  d-flex mt-4">
      <DatePicker className="border-0 py-2 text-center datePicker" selected={startDate} onChange={date=>setStartDate(date)}
      dateFormat="yyyy/MM/dd"
      minDate={new Date("2021/06/1")}
      maxDate={new Date("2021/06/31")}
      startDate={new Date("2021/06/1")}
      />
      <DatePicker className="border-0 py-2 ms-5 text-center datePicker" selected={endDate} onChange={date=>setEndDate(date)}
      dateFormat="yyyy/MM/dd"
      minDate={new Date("2021/06/1")}
      maxDate={new Date("2021/06/31")}
      startDate={new Date("2021/06/1")}
       
      />
     </div>
  )
}

export default DateSetter