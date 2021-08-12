import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
//commentText, profilePic, likeCount;

const CommentTemplate = (props) => {
  const { commentText, profilePic, likeCount } = props;
  return (
    <div className="flex p-2 m-2">
      <img className="m-8" src={profilePic} alt="comment pic" />
      <div className="flex flex-col">
        <p>{commentText}</p>
        <div className="flex m-2">
          <span className="flex m-2">
            <AiOutlineLike />
            <span>{likeCount}</span>
          </span>
          <span className="flex ">
            <AiOutlineDislike />
            <span>Reply</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CommentTemplate;
