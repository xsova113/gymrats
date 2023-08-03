"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

interface ClassesScheduleProps {
  events: any;
  title: string;
}

const ClassesSchedule = ({ events, title }: ClassesScheduleProps) => {
  const localizer = momentLocalizer(moment);

  return (
    <div className="flex flex-col pt-20">
      <h1 className="md:text-3xl text-xl font-bold mb-6">{title}</h1>
      <div className="h-[550px]">
        <Calendar
          className="text-neutral-400"
          localizer={localizer}
          events={events}
          step={60}
        />
      </div>
    </div>
  );
};

export default ClassesSchedule;
