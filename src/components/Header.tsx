import React from "react";

const Header = () => {
  return (
    <div className="flex h-[10vh] w-full items-center justify-between bg-blue-500">
      <div className="mx-10 flex items-end">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5f35433000d75257fcc78320/1597328490358-WI7RWW0D3H1OWYVAA662/qwire_dark_bg+%28chris%29.png?format=1500w"
          alt="logo"
          className="h-[39px] w-[150px]"
        />
        <h3 className="ml-1 text-red-200">task manager</h3>
      </div>
      <div>
        <button className="mr-10 h-[50px] w-[150px] rounded-lg bg-red-500 text-white">
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default Header;
