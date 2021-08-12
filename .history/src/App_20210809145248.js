import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import MainVideo from "./components/mainVideo";

function App() {
  useEffect(() => {
    const fetcher = fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAgCkL4Oo1CMP02_JmK-Z-xzccBIG95yWs&textFormat=plainText&part=snippet&videoId=9OI_qjc_oUA`,
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
