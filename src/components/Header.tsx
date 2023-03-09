import React from "react";
import TaskModal from "./TaskModal";

const qwireLogo = "/images/qwireLogo.png";

const Header = () => {
  return (
    <div className="flex h-[10vh] w-full items-center justify-between bg-blue-500">
      <div className="mx-10 flex items-end">
        <img src={qwireLogo} alt="logo" className="h-[39px] w-[150px]" />
        <h3 className="ml-1 text-red-200">task manager</h3>
      </div>
      <div>
        {/* <button className="mr-10 h-[50px] w-[150px] rounded-lg bg-red-500 text-white">
          Add New Task
        </button> */}
        <TaskModal />
      </div>
    </div>
  );
};

export default Header;
