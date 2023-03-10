import React, { useRef, useState } from "react";
import { useTasks } from "../context/TaskProvider";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [option, setOption] = useState("unstarted");

  const titleRef = useRef();
  const descriptionRef = useRef();
  const { createTask } = useTasks();

  function createNewTask() {
    setShowModal(false);
    createTask(titleRef.current.value, descriptionRef.current.value, option);
  }

  function handleChange(e) {
    e.preventDefault();
    setOption(e.target.value);
  }

  return (
    <div>
      <button
        className="mb-1 mr-10 rounded bg-red-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Task
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold">Create New Task</h3>
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
                <div className="relative flex min-w-[550px] flex-col p-6">
                  <label>Task Title:</label>
                  <input
                    className="w-full border-2 border-solid"
                    ref={titleRef}
                  />
                  <br />
                  <label>Task Details:</label>
                  <textarea
                    className="w-full resize-none border-2 border-solid"
                    rows={5}
                    ref={descriptionRef}
                  />
                  <br />
                  <label>Task Status:</label>
                  <select onChange={(e) => handleChange(e)}>
                    <option value="unstarted">Un-Started</option>
                    <option value="inprogress">In-Progress</option>
                    <option value="completed">Completed</option>
                  </select>
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
                    onClick={() => createNewTask()}
                  >
                    Create Task
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

export default Modal;
