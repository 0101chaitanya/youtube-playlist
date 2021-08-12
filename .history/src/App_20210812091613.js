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
      </div>
    </div>
  );
}

export default App;
