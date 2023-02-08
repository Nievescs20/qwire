import React from "react";

function Footer() {
  const imgClass = "mx-2";
  return (
    <div className="just absolute bottom-0 flex h-[10vh] w-[100vw] items-center justify-center bg-black text-xs text-white">
      <div className="flex w-3/5 justify-center">
        <h3 className="">
          Copyright: © Chris Nieves Enterprises, Inc. All rights reserved.
        </h3>
        <div className={`${imgClass}`}>IMG PH</div>
        <div className={`${imgClass}`}>IMG PH</div>
        <div className={`${imgClass}`}>IMG PH</div>
      </div>
    </div>
  );
}

export default Footer;
