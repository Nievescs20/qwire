import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const myLogo = "/images/CN.png";

function Footer() {
  const imgClass = "mx-2 h-[40px] w-[40px]";
  return (
    <div className="just absolute bottom-0 flex h-[10vh] w-[100vw] items-center justify-center bg-black text-xs text-white">
      <div className="flex w-3/5 justify-center">
        <h1 className="flex items-center justify-center text-base">
          Chris Nieves Enterprises ©, Inc. All rights reserved.
        </h1>
        <div className="ml-4 flex ">
          <a className={`${imgClass} flex items-center justify-center text-lg`}>
            <FaGithub />
          </a>
          <div
            className={`${imgClass} flex items-center justify-center text-lg`}
          >
            <FaLinkedin />
          </div>
          <div
            className={`${imgClass} flex items-center justify-center text-lg`}
          >
            <TbWorldWww />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
