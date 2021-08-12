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
        <div className="flex flex-wrap flex-1 border-4 max-w-screen sm:flex-col md:justify-content md:flex-row">
          <Comments className="flex-1 md:w-1/2 md:max-w-md" />
          <VideoSuggestions className="flex-1 md:w-1/2 md:max-w-md" />
        </div>
      </div>
    </div>
  );
}

export default App;
