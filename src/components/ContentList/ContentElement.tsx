import React from "react";
import "./contentElement.css";
import { TrainingSession } from "../../Models/TrainingSession";

type ContentElementProps = {
  data: TrainingSession;
  onClick: () => void;
};

const ContentElement: React.FC<ContentElementProps> = ({ data, onClick }) => {
  return (
    <div className="container" onClick={onClick}>
      <p>
        [{data.start_time} - {data.end_time}]
      </p>
      <div>
        {data.trainer} - {data.training_type}
      </div>
    </div>
  );
};

export default ContentElement;
