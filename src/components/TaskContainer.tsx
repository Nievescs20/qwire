import React from "react";
import { TaskInterface } from "../models/taskInterface";
import TaskColumn from "./TaskColumn";

type Props = {};

const TaskContainer = (props: Props) => {
  const taskArray: TaskInterface[] = [
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task",
      description:
        "A long sentence that should be seen as a placeholder for this sample description",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
    {
      title: "Test Task 2",
      description:
        "Some other super long description of nonsensical place holder text",
    },
  ];

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="flex w-[95vw] justify-between">
        <TaskColumn name="Un-Started Tasks" tasks={taskArray} />
        <TaskColumn name="In-Progress Tasks" tasks={taskArray} />
        <TaskColumn name="Completed Tasks" tasks={taskArray} />
      </div>
    </div>
  );
};

export default TaskContainer;
