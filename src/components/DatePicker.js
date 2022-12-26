import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePicker = () => {
    const [selectedDate, setDate] = useState(null);

    return (
      <DatePicker selected={selectedDate} onChange={date => setDate(date)} />
    );
   }
   
export default DatePicker