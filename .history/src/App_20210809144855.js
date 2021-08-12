import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import MainVideo from "./components/mainVideo";

function App() {
  useEffect(() => {
    const fetcher = fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=PUT-YOUR-KEYXXXXXXX&textFormat=plainText&part=snippet&videoId=PUT-YOUR-VIDEO-ID`,
      {
        mode: "cors",
      }
    );
    console.log(fetcher);
  }, []);

  return (
    <div className="App">
      <MainVideo />
    </div>
  );
}

export default App;
