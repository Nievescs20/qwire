import React, { useState } from "react";
import Main from "./components/Main";
import { TaskProvider } from "./context/TaskProvider";
import useLocalStorage from "./components/hooks/useLocalStorage";
import Sorry from "./components/Sorry";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

if (isMobile) {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
  });
}

function App() {
  const [task, setTask] = useLocalStorage("tasks", []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => displayWindowSize());

  function displayWindowSize() {
    setWindowWidth(window.innerWidth);
    console.log("after", windowWidth);
  }

  return (
    <div className="App">
      <TaskProvider>{windowWidth < 800 ? <Sorry /> : <Main />}</TaskProvider>
    </div>
  );
}

export default App;
