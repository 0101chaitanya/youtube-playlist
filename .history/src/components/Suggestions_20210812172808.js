import thumbs from "../thumbs.json";
import { useEffect, useState } from "react";
//`https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}`,

const VideoSuggestions = (props) => {
  console.log(thumbs);
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const links = [`OYR6A47DK-Q`, `DQ4r7HegRQw`, `mtf7hC17IBM`, `K9FILAkKinQ`];
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
