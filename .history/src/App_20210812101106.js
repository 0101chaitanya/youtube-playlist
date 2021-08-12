import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";

function App() {
  return (
    <div className="flex flex-col App ">
      <NavBar />
      <WatchList />
      <div className="flex sm:flex-col ">
        <Description className="" />
        <div className="border-4 border-red-800 "></div>
      </div>
    </div>
  );
}

export default App;
