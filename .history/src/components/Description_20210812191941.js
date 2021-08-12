import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { MdPlaylistAdd } from "react-icons/md";
import { AiFillFlag } from "react-icons/ai";
import Comments from "./fetchComments";
const Description = (props) => {
  return (
    <div className="flex">
      <section className="flex flex-col w-screen p-2 m-4 videoDescription">
        <h1 className="p-2 text-lg">Daughter-In The Shallows(Lyrics)</h1>
        <div className="flex justify-between">
          <span className="mx-2 text-sm">43600 views . 13 May 2016</span>
          <span className="flex items-center justify-center text-sm">
            <AiOutlineLike className="mx-2 cursor-pointer" />
            800
            <AiOutlineDislike className="mx-2 cursor-pointer" />
            6
            <IoMdShareAlt className="mx-2 cursor-pointer" />
            <span className="mx-2 ">SHARE</span>
            <MdPlaylistAdd className="mx-2 cursor-pointer" />
            <span className="mx-2">SAVE</span>
            <AiFillFlag className="mx-2 cursor-pointer" />
          </span>
        </div>
      </section>
      <hr className="border-0.5 " />
      <section className="ChannelDescription">
        <Comments />
      </section>
    </div>
  );
};
export default Description;
