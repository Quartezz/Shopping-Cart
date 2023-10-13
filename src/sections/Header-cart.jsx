import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/icons";

const Headercart = () => {
  return (
    <header className="flex items-center justify-between w-full py-0 px-[30px] h-20 top-[0] z-10 text-slate-100 opacity-85 bg-color">
      <div className="flex gap-2">
        <Link to={"/"}>
          <a alt="logo" className="">
            <img src={logo} alt="logo" width={120} height={40} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Headercart;
