import thumbs from "../thumbs.json";
import { useEffect, useState } from "react";
//`https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}`,

const VideoSuggestions = (props) => {
  console.log(thumbs);
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const links = [`OYR6A47DK-Q`, `mtf7hC17IBM`];
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchComments = async (key, videoId) => {
      const linkFetched = await fetch(
        `http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${links}&format=json`,
        {
          mode: "cors",
        }
      );
      const response = await linkFetched.json();
      console.log(response);
      const comments = {
        title: response.title,
        thumbnail: response.thumbnail_url,
      };

      //console.log(comments); //setState((state) => [...state, comments]);
      return comments;
    };
    //fetchComments(links);
    Promise.all([...links.map((link) => fetchComments(link))]).then(
      (values) => {
        console.log(values);
      }
    );
  }, [links]);

  return <div>suggestions</div>;
};
export default VideoSuggestions;
