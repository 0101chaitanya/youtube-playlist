import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
//commentText, profilePic, likeCount;

const CommentTemplate = (props) => {
  const { commentText, profilePic, likeCount } = props;
  return (
    <div className="flex p-2 ">
      <img className="w-12 mx-8" src={profilePic} alt="comment pic" />
      <div className="flex flex-col">
        <p>{commentText}</p>
        <div className="flex m-2">
          <span className="flex m-2">
            <AiOutlineLike className="m-2" />
            <span className="m-2">{likeCount}</span>
          </span>
          <span className="flex m-2">
            <AiOutlineDislike className="m-2" />
            <span className="m-2">Reply</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CommentTemplate;
