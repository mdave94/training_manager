import React from "react";
import "./calendar.css";
import ContentList from "../ContentList/ContentList";
import { TrainingSession } from "../../Models/TrainingSession";

const mockedDataForCalendarView: TrainingSession[] = [
  {
    start_time: "15:00",
    end_time: "17:00",
    trainer: "David",
    location: "Spirit Boulder Budaörs",
    description: "Gyerek edzés 8-14 éves korig",
  },
  {
    start_time: "10:00",
    end_time: "20:30",
    trainer: "James",
    location: "Urban Climb Central",
    description: "Intensive strength training",
  },
  {
    start_time: "18:00",
    end_time: "15:30",
    trainer: "Sophia",
    location: "Spirit Boulder Budaörs",
    description: "Intensive strength training",
  },
  {
    start_time: "12:00",
    end_time: "13:30",
    trainer: "Emma",
    location: "Urban Climb Central",
    description: "Family climbing session",
  },
  {
    start_time: "14:00",
    end_time: "13:30",
    trainer: "Sarah",
    location: "Spirit Boulder Budaörs",
    description: "Kids training for ages 8-14",
  },
  {
    start_time: "14:00",
    end_time: "13:30",
    trainer: "Emma",
    location: "Urban Climb Central",
    description: "Beginner level class",
  },
  {
    start_time: "10:00",
    end_time: "19:30",
    trainer: "Mike",
    location: "Peak Climbing Gym",
    description: "Family climbing session",
  },
];

const Calendar: React.FC = ({}) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const current_month = date.getMonth(); //january is 0 dec is 11

  const daysInMonth = new Date(currentYear, current_month + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, current_month, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <div className="header">
        Calendar - {current_month + 1}/{currentYear}
      </div>
      <div className="days-container">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="day empty"></div>
        ))}
        {daysArray.map((day) => (
          <div key={day} className="day">
            <ContentList tasks={mockedDataForCalendarView} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
