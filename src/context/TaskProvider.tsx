// @ts-nocheck
import React, { useContext, useState } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { TaskInterface } from "../models/taskInterface";

const TasksContext = React.createContext();

export function useTasks() {
  return useContext(TasksContext);
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [count, setCount] = useState(tasks.length);

  function createTask(title, description, status) {
    setCount((prev) => prev + 1);
    setTasks((prevTasks) => {
      return [...prevTasks, { id: count, title, description, status }];
    });
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
