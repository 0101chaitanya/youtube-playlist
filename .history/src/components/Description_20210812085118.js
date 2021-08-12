import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { MdPlaylistAdd } from "react-icons/md";
import { AiFillFlag } from "react-icons/ai";
const Description = (props) => {
  return (
    <div>
      <section className="flex flex-col videoDescription">
        <h1 className="text-lg">Daughter-In The Shallows(Lyrics)</h1>
        <div className="flex ">
          <span className="text-sm">43600 views . 13 May 2016</span>
          <span className="flex ">
            <AiOutlineLike />
            800
            <AiOutlineDislike />
            6
            <IoMdShareAlt />
            <span>SHARE</span>
            <MdPlaylistAdd />
            <span>SAVE</span>
            <AiFillFlag />
          </span>
        </div>
      </section>
      <section className="ChannelDescription"></section>
    </div>
  );
};
export default Description;
