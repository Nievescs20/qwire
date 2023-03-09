import Main from "./components/Main";
import { TaskProvider } from "./context/TaskProvider";
import useLocalStorage from "./components/hooks/useLocalStorage";

function App() {
  const [task, setTask] = useLocalStorage("tasks", []);

  return (
    <div className="App">
      <TaskProvider>
        <Main />
      </TaskProvider>
    </div>
  );
}

export default App;
