import React from "react";
import { TaskInterface } from "../models/taskInterface";

type Props = { taskItem: TaskInterface };

const Task = ({ taskItem }: Props) => {
  return (
    <div className="mx-1 mt-2 h-1/5 rounded-lg border-[1px] border-slate-500 bg-gray-800 text-white">
      <div className="flex py-2">
        <img
          src="images/greenCircle.png"
          alt="bullet"
          className="m-2 h-[10px] w-[10px]"
        />
        <div className="mx-2 text-blue-500">
          <h3>{`${taskItem.title}: ${taskItem.description}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default Task;
