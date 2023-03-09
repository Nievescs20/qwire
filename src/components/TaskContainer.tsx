//@ts-nocheck
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskInterface } from "../models/taskInterface";
import { useTasks } from "../context/TaskProvider";
import TaskColumn from "./TaskColumn";
import { HTML } from "react-dnd-html5-backend/dist/NativeTypes";

type Props = {};

const TaskContainer = (props: Props) => {
  const { tasks: tasksArray, setTasks }: { tasks: TaskInterface[] } =
    useTasks();

  const unstartedTasks = tasksArray.filter(
    (task) => task.status === "unstarted"
  );
  const inprogressTasks = tasksArray.filter(
    (task) => task.status === "inprogress"
  );
  const completedTasks = tasksArray.filter(
    (task) => task.status === "completed"
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-[80vh] items-center justify-center">
        <div className="flex w-[95vw] justify-between">
          <TaskColumn
            name="Un-Started Tasks"
            tasksArray={unstartedTasks}
            setTasksArray={setTasks}
            columnNumber={1}
          />
          <TaskColumn
            name="In-Progress Tasks"
            tasksArray={inprogressTasks}
            setTasksArray={setTasks}
            columnNumber={2}
          />
          <TaskColumn
            name="Completed Tasks"
            tasksArray={completedTasks}
            setTasksArray={setTasks}
            columnNumber={3}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskContainer;
