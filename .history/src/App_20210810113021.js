import "./App.css";
import MainVideo from "./components/mainVideo";
import Comments from "./components/fetchComments";
import WatchList from "./components/watchList";
import NavBar from "./components/navBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <WatchList />
      {/*  <Comments />
       */}{" "}
    </div>
  );
}

export default App;
