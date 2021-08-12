import "./App.css";
import MainVideo from "./components/mainVideo";
import Comments from "./components/fetchComments";
function App() {
  return (
    <div className="App">
      <MainVideo />
      <Comments />
    </div>
  );
}

export default App;
