import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
//commentText, profilePic, likeCount;

const CommentTemplate = (props) => {
  const { commentText, profilePic, likeCount } = props;
  return (
    <div className="flex items-start p-2">
      <img
        className="w-10 h-10 mx-8 rounded-full"
        src={profilePic}
        alt="comment pic"
      />
      <div className="flex flex-col justify-center">
        <p>{commentText}</p>
        <div className="flex items-center m-1">
          <span className="flex items-center m-1">
            <AiOutlineLike className="m-1" />
            <span className="m-1">{likeCount}</span>
          </span>
          <span className="flex items-center m-1">
            <AiOutlineDislike className="m-1" />
            <span className="m-1">Reply</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CommentTemplate;
