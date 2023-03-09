import React, { useState } from "react";
import PreviewModal from "./PreviewModal";
import { TaskInterface } from "../models/taskInterface";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

type Props = { taskItem: TaskInterface; setTasksArray: () => void };

const Task = ({ taskItem, setTasksArray }: Props) => {
  const [task, setTask] = useState(taskItem);

  function handleDrag(e: React.DragEvent, task: TaskInterface) {
    e.dataTransfer.setData("task", JSON.stringify(task));
  }

  return (
    <div
      className="mx-1 mt-2 min-h-[25%] rounded-lg border-[1px] border-slate-500 bg-gray-800 text-white"
      draggable
      onDragStart={(e) => handleDrag(e, taskItem)}
    >
      <div className="flex py-2">
        <img
          src="images/greenCircle.png"
          alt="bullet"
          className="m-2 h-[10px] w-[10px]"
        />
        <div className="mx-2 w-full overflow-hidden">
          <div className="flex w-full justify-between">
            <h3 className="text-blue-500 line-clamp-2">
              <PreviewModal task={taskItem} />
            </h3>
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
          <h3 className="text-slate-400 line-clamp-2">{task.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Task;
