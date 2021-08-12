import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";

function App() {
  return (
    <div className="flex flex-col flex-1 w-screen App">
      <NavBar />
      <WatchList />
      <div className="flex flex-wrap min-w-full sm:flex-col md:flex-row ">
        <Description className=" lg:w-2/3 sm:flex-1 lg:flex-1" />
        <div className="border-4 border-red-800 lg-w-1/3 lg:max-w-md sm:flex-0 lg:flex-1"></div>
      </div>
    </div>
  );
}

export default App;
