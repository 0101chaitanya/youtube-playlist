import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import MainVideo from "./components/mainVideo";

function App() {
  const key = `AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs`;
  const videoId = `9OI_qjc_oUA`;
  //https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs&textFormat=plainText&part=snippet&videoId=9OI_qjc_oUA

  useEffect(() => {
    fetchComments(key, videoId);
  }, []);
  const fetchComments = async (key, videoId) => {
    const linkFetched = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&textFormat=plainText&part=snippet&videoId=${videoId}`,
      {
        mode: "cors",
      }
    );
    const response = linkFetched.json();
    console.log(response);
  };

  return (
    <div className="App">
      <MainVideo />
    </div>
  );
}

export default App;
