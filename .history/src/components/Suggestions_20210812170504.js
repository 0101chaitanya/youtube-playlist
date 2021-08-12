import thumbs from "../thumbs.json";
import { useEffect, useState } from "react";
//`https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}`,

const VideoSuggestions = (props) => {
  console.log(thumbs);
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const link = `ojCkgU5XGdg`;
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchComments = async (key, videoId) => {
      const linkFetched = await fetch(
        `http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${link}&format=json`,
        {
          mode: "cors",
        }
      );
      const response = await linkFetched.json();
      const comments = response.items.map((item) => {
        console.log(item);
        return;
      });
      setState((state) => [...state, comments]);
    };

    fetchComments(link);
  }, [link]);

  const suggestions = thumbs.map((thumb) => {
    const { src, href, id } = thumb;
    console.log(src, href, id);
    return (
      <div key={id}>
        <a href={href}>
          <img src={src} alt={id} />
        </a>
      </div>
    );
  });
  return <div>{suggestions}</div>;
};
export default VideoSuggestions;
