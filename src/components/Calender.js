import React, { useState } from "react";

import Calendar from "react-calendar";
const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-52 ">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title ">Calender</h2>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
};

export default Calender;
