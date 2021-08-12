import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const Description = (props) => {
  return (
    <div>
      <section className="videoDescription">
        <p>Daughter-In The Shallows(Lyrics)</p>
        <div>
          <span>43600 views . 13 May 2016</span>
          <span>
            <span>
              <AiOutlineLike /> <AiOutlineDislike />
            </span>
          </span>
        </div>
      </section>
      <section className="ChannelDescription"></section>
    </div>
  );
};
export default Description;
