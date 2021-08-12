import logo from "./logo.svg";
import "./App.css";
import MainVideo from "./components/mainVideo";

function App() {
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const videoId = `9OI_qjc_oUA`;
  //https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs&textFormat=plainText&part=snippet&videoId=9OI_qjc_oUA

  useMemo(() => {
    fetchComments(key, videoId);
  }, [key, videoId]);

  return (
    <div className="App">
      <MainVideo />
    </div>
  );
}

export default App;
