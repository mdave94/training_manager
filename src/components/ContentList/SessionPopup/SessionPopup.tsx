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
        <h2>Edzés részletei</h2>
        <p>
          <strong>Időpont:</strong> {session.start_time} - {session.end_time}
        </p>
        <p>
          <strong>Edző:</strong> {session.trainer}
        </p>
        <p>
          <strong>Helyszín:</strong> {session.location}
        </p>
        <p>
          <strong>Leírás:</strong> {session.description}
        </p>
        <p>
          <strong>Edzés típus:</strong> {session.training_type}
        </p>
      </div>
    </div>
  );
};

export default SessionPopup;
