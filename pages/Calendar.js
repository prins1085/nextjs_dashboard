import FullCalendar from "@fullcalendar/react";
import React, { useState, useEffect } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter Event Name");
    if (eventNamePrompt) {
      const newEvent = {
        start,
        end,
        title: eventNamePrompt,
        id: new Date().getTime().toString(),
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      const eventId = selected.event.id;
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold">CALENDAR</h1>
      <p className="text-center mb-4 text-[#5BC9B4]">Full Calendar</p>
      <div className="overflow-x-auto">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            multiMonthPlugin,
            interactionPlugin,
          ]}
          initialView="timeGridDay"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          height={"100vh"}
          editable={true}
          selectable={true}
          events={events}
          select={handleSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
