import React from "react";
import "./calendar.css";
import ContentList from "../ContentList/ContentList";

interface CalendarProps {
  year: number;
  month: number;
}

const testText = [
  "function application ",
  "calendar",
  "array   function",
  "schema month calendar project",
  "application  array",
  "component  month calendar",
  "module  react",
  "typescript element project",
  "development typescript react",
  "function  backend display",
  "application ",
  "application calendar schema",
  "display frontend module",
  "backend  ",
  "function ",
  "month interface ",
  "component application month",
  "array ",
  "session  frontend",
  "calendar application training",
];

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <div className="header">
        Calendar - {month + 1}/{year}
      </div>
      <div className="days-container">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="day empty"></div>
        ))}
        {daysArray.map((day) => (
          <div key={day} className="day">
            <ContentList tasks={testText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
