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
        <div className="flex flex-1 w-screen border-4 border-red-800">
          <Comments />
          <VideoSuggestions />
        </div>
      </div>
    </div>
  );
}

export default App;
