import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import TaskContainer from "./TaskContainer";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="z-0 h-[100vh] bg-gray-800">
      <Header />
      <TaskContainer />
      <Footer />
    </div>
  );
};

export default Main;
