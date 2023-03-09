import React from "react";

function PreviewModal({ task }) {
  const [showModal, setShowModal] = React.useState(false);

  function checkStatus(task) {
    if (task.status === "unstarted") {
      return "Un-Started";
    } else if (task.status === "inprogress") {
      return "In-Progress";
    } else if (task.status === "completed") {
      return "Completed";
    }
  }

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        {`${task.title}:`}
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-3xl font-semibold text-black">
                    {task.title}
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
                    <div className="text-black">Description: </div>
                    <div className="border-2 border-black p-2 text-black">
                      {task.description}
                    </div>
                    <br />
                    <div className="text-black">Status:</div>
                    <div className="text-black">{checkStatus(task)}</div>
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

export default PreviewModal;
