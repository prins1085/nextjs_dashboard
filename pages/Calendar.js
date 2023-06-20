import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";

const Calendar = () => {
  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold">CALENDAR</h1>
      <p className="text-center mb-4 text-[#5BC9B4]">Full Calendar</p>
      <div className="overflow-x-auto">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, multiMonthPlugin]}
          initialView="timeGridDay"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          height={"100vh"}
        />
      </div>
    </div>
  );
};

export default Calendar;



