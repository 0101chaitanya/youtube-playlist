import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";

function App() {
  return (
    <div className="flex flex-col App ">
      <NavBar />
      <WatchList />
      <div className="flex flex-wrap sm:flex-col md:flex-row ">
        <Description className="sm:flex-1 lg:flex-1" />
        <div className="border-4 border-red-800 sm:flex-1 lg:flex-0"></div>
      </div>
    </div>
  );
}

export default App;
