import thumbs from "../thumbs.json";
import Ben from "../images/Ben.jpg";
import Broods from "../images/Broods.jpg";
import Daughter from "../images/Daughter.jpg";
import Fink from "../images/Fink.jpg";
import GotGirl from "../images/GotGirl.jpg";

const VideoSuggestions = (props) => {
  console.log(thumbs);

  const suggestions = thumbs.map((thumb) => {
    const { src, href, id } = thumb;
    console.log(src, href, id);
  \    return (
      <div key={id}>
        <a href={href}>
          <img src={`../images/${src}.jpg`} alt={id} />
        </a>
      </div>
    );
  });
  return <div>{suggestions}</div>;
};
export default VideoSuggestions;
