//@ts-nocheck
import React from "react";
import { TaskInterface } from "../models/taskInterface";
import { useTasks } from "../context/TaskProvider";
import TaskColumn from "./TaskColumn";

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
  );
};

export default TaskContainer;
