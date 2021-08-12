import { useState, useEffect } from "react";
import CommentTemplate from "./commentTemplate";
function Comments(props) {
  const [state, setState] = useState([]);
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const videoId = `9OI_qjc_oUA`;
  //https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs&textFormat=plainText&part=snippet&videoId=9OI_qjc_oUA

  useEffect(() => {
    const fetchComments = async (key, videoId) => {
      const linkFetched = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}`,
        {
          mode: "cors",
        }
      );
      const response = await linkFetched.json();
      const comments = response.items.map((item) => {
        console.log(item);
        const [commentText, profilePic, likeCount] = [
          item.snippet.topLevelComment.snippet.textDisplay,
          item.snippet.topLevelComment.snippet.authorProfileImageUrl,
          item.snippet.topLevelComment.snippet.likeCount,
        ];

        return (
          <CommentTemplate
            key={commentText}
            commentText={commentText}
            profilePic={profilePic}
            likeCount={likeCount}
          />
        );
      });
      setState(comments);
    };

    fetchComments(key, videoId);
  }, [key, videoId]);

  console.log(state);

  return <div className="flex flex-col p-2">{state}</div>;
}

export default Comments;
