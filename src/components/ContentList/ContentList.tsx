import React, { useState } from "react";
import { TrainingSession } from "../../Models/TrainingSession";
import ContentElement from "./ContentElement";
import SessionPopup from "./SessionPopup/SessionPopup";
import "./contentList.css";

type ContentListProps = {
  tasks: TrainingSession[];
};

const ContentList: React.FC<ContentListProps> = ({ tasks }) => {
  const [selectedSession, setSelectedSession] =
    useState<TrainingSession | null>(null);

  const handleClick = (session: TrainingSession) => {
    setSelectedSession(session);
  };

  const closePopup = () => {
    setSelectedSession(null);
  };

  const getRandomStrings = (): TrainingSession[] => {
    const count = Math.floor(Math.random() * 3) + 1;

    // Shuffle and select the required number of strings
    const selectedStrings = tasks
      .sort(() => 0.5 - Math.random())
      .slice(0, count);

    // Join the selected strings into a single string with spaces
    return selectedStrings;
  };

  const randomTexts = getRandomStrings();

  return (
    <div className="contentlistContainer">
      {randomTexts.map((item, index) => (
        <ul key={index}>
          <li>
            <ContentElement data={item} onClick={() => handleClick(item)} />
          </li>
        </ul>
      ))}
      {selectedSession && (
        <SessionPopup session={selectedSession} onClose={closePopup} />
      )}
    </div>
  );
};

export default ContentList;
