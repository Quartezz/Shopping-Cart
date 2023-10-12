import React, { useEffect } from "react";
import Api from "../api/Api";

const Games = ({ gameList, selectedGenresName }) => {
  useEffect(() => {}, []);

  return (
    <div className="sm:px-40 text-slate-100 bg-color w-full h-full px-10">
      <a href="/" className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">Categories</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex flex-wrap w-full relative m-4 justify-center items-center flex-1"></div>
    </div>
  );
};

export default Games;
