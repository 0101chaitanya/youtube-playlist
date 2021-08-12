import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
import Description from "./Description";

function App() {
  return (
    <div className="flex flex-col App ">
      <NavBar />
      <WatchList />
      <div className="flex">
        <Description />
      </div>
    </div>
  );
}

export default App;
