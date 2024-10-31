import "./contentElement.css"; // Import the CSS file

type ContentElementProps = {
  text: String;
};

const ContentElement = ({ text }: ContentElementProps) => {
  return <div className="container">{text}</div>;
};

export default ContentElement;
