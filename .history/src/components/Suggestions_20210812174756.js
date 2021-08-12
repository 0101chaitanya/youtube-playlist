import thumbs from "../thumbs.json";
import { useEffect, useState } from "react";
//`https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}`,

const VideoSuggestions = (props) => {
  console.log(thumbs);
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const links = [
    `OYR6A47DK-Q`,
    `DQ4r7HegRQw`,
    `mtf7hC17IBM`,
    `qVdPh2cBTN0`,
    `K9FILAkKinQ`,
  ];
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchComments = async (link) => {
      const linkFetched = await fetch(
        `http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${link}&format=json`,
        {
          mode: "cors",
        }
      );
      console.log(link);
      const response = await linkFetched.json();
      console.log(response);
      const comments = {
        title: response.title,
        thumbnail: response.thumbnail_url,
        link: `https://www.youtube.com/watch?v=${link}`,
      };

      //console.log(comments); //setState((state) => [...state, comments]);
      return comments;
    };
    //fetchComments(links);
    Promise.all([...links.map((link) => fetchComments(link))]).then(
      (values) => {
        console.log(values);
        setState([...values]);
      }
    );
  }, []);
  console.log(state);

  const videos = state.map((video) => {
    const { link, thumbnail, title } = video;
    return (
      <div className="p-2 m-8 border-2">
        <a
          href={link}
          className="flex flex-row items-start justify-center border-2"
        >
          <img className="block w-48" src={thumbnail} alt={title} />
          <p>{title}</p>
        </a>
      </div>
    );
  });
  return <div>{videos}</div>;
};
export default VideoSuggestions;
