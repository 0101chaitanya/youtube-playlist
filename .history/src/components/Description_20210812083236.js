import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { MdPlaylistAdd } from "react-icons/md";
const Description = (props) => {
  return (
    <div>
      <section className="videoDescription">
        <p>Daughter-In The Shallows(Lyrics)</p>
        <div>
          <span>43600 views . 13 May 2016</span>
          <span>
            <span>
              <AiOutlineLike /> 800 <AiOutlineDislike /> 6
              <IoMdShareAlt />
              <span>SHARE</span>
              <MdPlaylistAdd />
              <span>SAVE</span>
            </span>
          </span>
        </div>
      </section>
      <section className="ChannelDescription"></section>
    </div>
  );
};
export default Description;
