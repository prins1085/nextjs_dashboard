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
    // console.log(events);
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

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold">CALENDAR</h1>
      <p className="text-center mb-4 text-[#5BC9B4]">Full Calendar</p>
      <div className="flex space-x-8 flex-wrap md:flex-nowrap">
        <div className="md:w-[30%] w-full bg-[#1F2A40] h-fit p-3 rounded-md">
          <p className="mb-5">Events</p>
          {events.length !== 0 ? (
            events.map((event) => (
              <div className="bg-[#5BC9B4] my-2 rounded-sm p-3 text-sm">
                <p>{event.title}</p>
                <p>{formatDate(event.start)}</p>
              </div>
            ))
          ) : (
            <p className="text-[#5BC9B4]">No such Events Found !</p>
          )}
        </div>
        <div className="overflow-x-auto w-[70%]">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              multiMonthPlugin,
              interactionPlugin,
            ]}
            initialView="dayGridMonth"
            // slotMinTime="08:00:00"
            // slotMaxTime="20:00:00"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridDay,timeGridWeek,dayGridMonth",
            }}
            height={"100vh"}
            editable={true}
            selectable={true}
            events={events}
            // eventDisplay="inverse-background"
            eventResizableFromStart={true}
           eventOverlap={true}
            select={handleSelect}
            eventClick={handleEventClick}
            nowIndicator={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
