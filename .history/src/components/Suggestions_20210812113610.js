import thumbs from "../thumbs.json";
const VideoSuggestions = (props) => {
  console.log(thumbs);

  const suggestions = thumbs.map((thumb) => {
    const { src, href, id } = thumb;

    return (
      <div key={id}>
        <a href={href}>
          <img src={src} alt={id} />
        </a>
      </div>
    );
  });
  return <div>{suggestions}</div>;
};
export default VideoSuggestions;
