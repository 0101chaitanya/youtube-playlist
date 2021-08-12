import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";
import VideoSuggestions from "./components/Suggestions";
import Ben from "./components/images/Ben.jpg";
import Broods from "./components/images/Broods.jpg";
import Daughter from "./components/images/Daughter.jpg";
import Fink from "./components/images/Fink.jpg";
import GotGirl from "./components/images/GotGirl.jpg";

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
