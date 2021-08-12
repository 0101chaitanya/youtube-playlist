import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";
import VideoSuggestions from "./components/Suggestions";
import * as images from "./images";
function App() {
  return (
    <div className="flex flex-col flex-1 w-screen App">
      <NavBar />
      <WatchList />
      <div className="flex flex-wrap sm:flex-col md:flex-row ">
        <Description className="flex-1 " />
        <div className="flex-1 border-4 border-red-800">
          <VideoSuggestions />
        </div>
      </div>
    </div>
  );
}

export default App;
