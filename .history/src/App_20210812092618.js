import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";

function App() {
  return (
    <div className="flex flex-col App ">
      <NavBar />
      <WatchList />
      <div className="grid grid-rows-2 sm:grid-rows-2 md:grid-cols-3">
        <Description className="sm:col-span-full" />
        <div className="h-24 border-4 border-red-800 sm:col-span-full"></div>
      </div>
    </div>
  );
}

export default App;
