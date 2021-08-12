import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
//commentText, profilePic, likeCount;

const commentTemplate = (props) => {
  const { commentText, profilePic, likeCount } = props;
  return (
    <div>
      <img src={profilePic} alt="comment pic" />
      <div>
        <p>{commentText}</p>
        <div>
          <span>
            <AiOutlineLike />
            <span>{likeCount}</span>
          </span>
          <span>
            <AiOutlineDislike />
            <span>Reply</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default commentTemplate;
