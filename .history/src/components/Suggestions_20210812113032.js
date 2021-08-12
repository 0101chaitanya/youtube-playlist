import thumbs from "../thumbs.json";
const VideoSuggestions = (props) => {
  console.log(thumbs);

  const suggestions = thumbs.map((thumb) => {
    const { src, img, id } = thumb;

    return (
      <div key={id}>
        <a href={src}>
          <img src={img} alt={id} />
        </a>
      </div>
    );
  });
  return <div>{}</div>;
};
export default VideoSuggestions;
