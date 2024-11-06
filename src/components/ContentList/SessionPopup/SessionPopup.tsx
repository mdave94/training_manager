import React from "react";
import "./sessionPopup.css"; // Style this modal as desired
import { TrainingSession } from "../../../Models/TrainingSession";
type SessionPopupProps = {
  session: TrainingSession;
  onClose: () => void;
};

const SessionPopup: React.FC<SessionPopupProps> = ({ session, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Session Details</h2>
        <p>
          <strong>Time:</strong> {session.start_time} - {session.end_time}
        </p>
        <p>
          <strong>Trainer:</strong> {session.trainer}
        </p>
        <p>
          <strong>Location:</strong> {session.location}
        </p>
        <p>
          <strong>Description:</strong> {session.description}
        </p>
        <p>
          <strong>Training Type:</strong> {session.training_type}
        </p>
      </div>
    </div>
  );
};

export default SessionPopup;
