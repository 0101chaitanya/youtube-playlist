import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";

function App() {
  return (
    <div className="flex flex-col App ">
      <NavBar />
      <WatchList />
      <div className="flex sm:flex-col md:flex-row ">
        <Description className="sm:flex-1 md:flex-5" />
        <div className="border-4 border-red-800 sm:flex-1 md:flex-3"></div>
      </div>
    </div>
  );
}

export default App;
