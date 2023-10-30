import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)
  

  return (
    <div className=" my-10 flex items-start flex-col mx-auto">
      <div className="flex items-start text-black text-2xl gap-1">
        <FaCalendarAlt />
        <h1 className=" mb-4">Department Calendar</h1>
      </div>
      <div className="bg-white p-4 rounded shadow" >
        <Calendar onChange={onChange} showWeekNumbers value={value} />
      </div>
    </div>
  );
};

export default Calender;
