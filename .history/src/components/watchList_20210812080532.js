import Description from "./Description";
const WatchList = (props) => {
  return (
    <div className="flex">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PL4UZ_4m1MumRdSSNREqInSoYCHilrLzbO"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WatchList;
