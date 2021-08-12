import "./App.css";
import MainVideo from "./components/mainVideo";
import Comments from "./components/fetchComments";
import WatchList from "./components/watchList";
function App() {
  return (
    <div className="App">
      <MainVideo />
      <Comments />
      <WatchList />
    </div>
  );
}

export default App;
