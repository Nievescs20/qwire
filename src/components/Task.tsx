import React, { useState } from "react";
import { TaskInterface } from "../models/taskInterface";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

type Props = { taskItem: TaskInterface; setTasksArray: () => void };

const Task = ({ taskItem, setTasksArray }: Props) => {
  const [task, setTask] = useState(taskItem);
  return (
    <div className="mx-1 mt-2 h-[25%] rounded-lg border-[1px] border-slate-500 bg-gray-800 text-white ">
      <div className="flex py-2">
        <img
          src="images/greenCircle.png"
          alt="bullet"
          className="m-2 h-[10px] w-[10px]"
        />
        <div className="mx-2 w-full">
          <div className="flex w-full justify-between">
            <h3 className="text-blue-500">{task.title}:</h3>
            <div className="flex w-[40px] justify-between">
              <EditModal
                task={task}
                setTask={setTask}
                setTasksArray={setTasksArray}
              />
              <DeleteModal
                task={task}
                setTasksArray={setTasksArray}
                className="cursor-pointer"
              />
            </div>
          </div>
          <h3 className="text-slate-400 line-clamp-3">{task.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Task;
