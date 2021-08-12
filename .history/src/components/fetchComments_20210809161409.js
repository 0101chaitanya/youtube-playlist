import { useState, useMemo } from "react";

const fetchComments = async (key, videoId) => {
  const linkFetched = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}`,
    {
      mode: "cors",
    }
  );
  const response = await linkFetched.json();
  console.log(response.items);
  const comments = response.items.map((item) => {
    const [commentText, profilePic] = [
      item.snippet.topLevelComment.snippet.textDisplay,
      item.snippet.topLevelComment.snippet.authorProfileImageUrl,
    ];
    console.log(commentText, profilePic);
    return { commentText, profilePic };
  });

  return comments;
};

function Comments() {
  const [state, setState] = useState([]);
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const videoId = `9OI_qjc_oUA`;
  //https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs&textFormat=plainText&part=snippet&videoId=9OI_qjc_oUA

  const array = useMemo(() => {
    const data = fetchComments(key, videoId);
    console.log(data);

    //    setState(comment);
  }, [key, videoId]);

  return <div></div>;
}

export default Comments;
