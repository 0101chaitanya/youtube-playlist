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
        <div className="flex flex-1 w-full border-4 border-red-800 sm:flex-col lg:flex-row">
          <Comments className="lg:w-2/3" />
          <VideoSuggestions className="lg:w-1/3" />
        </div>
      </div>
    </div>
  );
}

export default App;
