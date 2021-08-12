import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";
import VideoSuggestions from "./components/Suggestions";
import Comments from "./components/fetchComments";
function App() {
  return (
    <div className="flex flex-col flex-1 w-screen App">
      <NavBar />
      <WatchList />
      <div className="flex flex-wrap sm:flex-col md:flex-row ">
        <Description className="flex-1 " />
        <div className="flex flex-wrap flex-1 max-w-full border-4 border-red-800 sm:flex-col md:flex-row">
          <Comments className="flex-1 md:max-w-md" />
          <VideoSuggestions className="flex-1 md:max-w-screen-md" />
        </div>
      </div>
    </div>
  );
}

export default App;
