import Main from "./components/Main";
import { TaskProvider } from "./context/TaskProvider";
import useLocalStorage from "./components/hooks/useLocalStorage";
import Sorry from "./components/Sorry";

const isMobile = navigator.userAgentData.mobile;
console.log(isMobile);

function App() {
  const [task, setTask] = useLocalStorage("tasks", []);

  return (
    <div className="App">
      <TaskProvider>{isMobile ? <Sorry /> : <Main />}</TaskProvider>
    </div>
  );
}

export default App;
