import React from "react";
import { v4 as uuidV4 } from "uuid";
import { TaskInterface } from "../models/taskInterface";
import Task from "./Task";
import "../index.css";

type Props = {
  name: string;
  tasksArray: TaskInterface[];
  setTasksArray: () => void;
};

function TaskColumn({ name, tasksArray, setTasksArray }: Props) {
  return (
    <>
      <div>
        <div className="h-[60vh] w-[28vw]  rounded-xl border-2 border-solid border-black bg-gray-900">
          <div className="z-10 m-2 flex">
            <div className="mr-2 flex w-[25px] items-center justify-center rounded-full bg-gray-800 text-slate-300">
              {tasksArray.length}
            </div>
            <div className="  text-slate-300">{name}</div>
          </div>
          <div className="mx-2 h-[90%] overflow-auto">
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
