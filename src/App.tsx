import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const current_month = date.getMonth(); //january is 0 dec is 11

  return (
    <div className="App">
      <Calendar year={currentYear} month={current_month} />
    </div>
  );
}

export default App;
