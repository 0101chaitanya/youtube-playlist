import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./components/Description";

function App() {
  return (
    <div className="flex flex-col App ">
      <NavBar />
      <WatchList />
      <div className="grid grid-row-2 md:grid-col-3">
        <Description />
        <div className="h-24 border-4 col-span-full border-red-800s"></div>
      </div>
    </div>
  );
}

export default App;
