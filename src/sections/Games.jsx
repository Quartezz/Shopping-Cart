import React, { useEffect } from "react";

const Games = ({ gameList, selectedGenresName }) => {
  useEffect(() => {}, []);

  return (
    <div className="sm:px-40 text-slate-100 bg-color w-full h-full px-10">
      <a href="/" className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">{selectedGenresName} Category</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex flex-wrap w-full relative m-4 justify-center items-center flex-1">
        {gameList.map((item) => (
          <div className="m-4 z-1 min-w-0 relative sm:flex sm:flex-col hover-transition hover:hover-transform cursor-pointer flex items-center gap-2">
            <img
              src={item.background_image}
              className="w-full h-full object-fill rounded-lg sm:h-[200px] sm:w-[400px]"
            />
            <div className="w-full flex justify-between">
              <span>{item.name}</span>
              <span className="flex gap-1 items-center">{item.cost} $</span>
              <span className="flex gap-1 items-center">
                <i className="fa-solid fa-star"></i>
                {item.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
