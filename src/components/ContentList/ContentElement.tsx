import "./contentElement.css"; // Import the CSS file
import { TrainingSession } from "../../Models/TrainingSession";

type ContentElementProps = {
  data: TrainingSession;
};

const ContentElement = ({ data }: ContentElementProps) => {
  return (
    <div className="container">
      <p>
        [{data.start_time}-{data.end_time}]
      </p>

      <div className="">
        {data.trainer} - {data.training_type}
      </div>
    </div>
  );
};

export default ContentElement;
