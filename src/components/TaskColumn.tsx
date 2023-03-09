// @ts-nocheck
import React from "react";
import { v4 as uuidV4 } from "uuid";
import { useTasks } from "../context/TaskProvider";
import { TaskInterface } from "../models/taskInterface";
import Task from "./Task";
import "../index.css";

type Props = {
  name: string;
  tasksArray: TaskInterface[];
  columnNumber: number;
  setTasksArray: () => void;
};

function TaskColumn({ name, tasksArray, setTasksArray, columnNumber }: Props) {
  const { tasks, createTask } = useTasks();

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent) {
    const task = e.dataTransfer.getData("task");
    const parsedTask = JSON.parse(task);
    const newTasks = tasks.filter((element) => element.id !== parsedTask.id);

    localStorage.setItem("QWIRE-tasks", JSON.stringify(newTasks));
    setTasksArray(newTasks);

    if (columnNumber === 1) {
      parsedTask.status = "unstarted";
    } else if (columnNumber === 2) {
      parsedTask.status = "inprogress";
    } else {
      parsedTask.status = "completed";
    }

    createTask(parsedTask.title, parsedTask.description, parsedTask.status);
  }

  return (
    <>
      <div onDrop={(e) => handleDrop(e)} onDragOver={handleDragOver}>
        <div className="h-[60vh] w-[28vw]  rounded-xl border-2 border-solid border-black bg-gray-900">
          <div className="z-10 m-2 flex">
            <div className="mr-2 flex w-[25px] items-center justify-center rounded-full bg-gray-800 text-slate-300">
              {tasksArray.length}
            </div>
            <div className="  text-slate-300">{name}</div>
          </div>
          <div className="mx-2 h-[90%] overflow-auto scrollbar-hide">
            {tasksArray.map((task: TaskInterface) => (
              <Task
                key={uuidV4()}
                taskItem={task}
                setTasksArray={setTasksArray}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskColumn;
