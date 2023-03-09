import React, { useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useTasks } from "../context/TaskProvider";

function EditTask({ task, setTask, setTasksArray }) {
  console.log("TASK", task);
  const [showModal, setShowModal] = React.useState(false);
  const [option, setOption] = useState("unstarted");
  const { tasks } = useTasks();

  const titleRef = useRef();
  const descriptionRef = useRef();

  function taskEdit() {
    setShowModal(false);
    const newTasks = tasks.map((oldTask) => {
      if (oldTask.id === task.id) {
        return {
          id: task.id,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          status: option,
        };
      } else {
        return oldTask;
      }
    });
    localStorage.setItem("QWIRE-tasks", JSON.stringify(newTasks));
    setTask({
      id: task.id,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      status: option,
    });
    setTasksArray(newTasks);
  }

  function handleChange(e) {
    e.preventDefault();
    setOption(e.target.value);
  }

  return (
    <div>
      <button type="button" onClick={() => setShowModal(true)}>
        <FaRegEdit className="cursor-pointer" />
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold text-black">
                    Edit Task
                  </h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <div className="relative flex min-w-[550px] flex-col p-6">
                    <label className="text-black">Task Title:</label>
                    <input
                      className="w-full border-2 border-solid text-black"
                      ref={titleRef}
                      defaultValue={task.title}
                    />
                    <br />
                    <label className="text-black">Task Details:</label>
                    <textarea
                      className="w-full resize-none border-2 border-solid text-black"
                      rows={5}
                      ref={descriptionRef}
                      defaultValue={task.description}
                    />
                    <br />
                    <label className="text-black">Task Status:</label>
                    <select
                      className="text-black"
                      onChange={(e) => handleChange(e)}
                      defaultValue={task.status}
                    >
                      <option value="unstarted">Un-Started</option>
                      <option value="inprogress">In-Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mr-1 mb-1 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => taskEdit()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  );
}

export default EditTask;
