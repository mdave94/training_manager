import ContentElement from "./ContentElement";
import "./contentList.css";
import { TrainingSession } from "../../Models/TrainingSession";

type ContentListProps = {
  tasks: TrainingSession[];
};

const ContentList = ({ tasks }: ContentListProps) => {
  const getRandomStrings = (): TrainingSession[] => {
    // Randomly decide how many strings to select (1-4)
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
    <>
      <div className="contentlistContainer">
        {randomTexts.map((item) => (
          <ContentElement data={item} />
        ))}
      </div>
    </>
  );
};

export default ContentList;
