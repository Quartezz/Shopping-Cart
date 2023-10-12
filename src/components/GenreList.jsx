import React, { useEffect, useState } from "react";
import Api from "../api/Api";

const GenreList = () => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    Api.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div className="sm:px-40 text-slate-100 bg-color w-full h-full px-10">
      <a href="/" className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">Categories</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex flex-wrap w-full relative m-4 justify-center items-center flex-1">
        {genreList.map((item, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            className="m-4 z-1 min-w-0 relative sm:flex sm:flex-col hover-transition hover:hover-transform cursor-pointer flex items-center gap-2"
          >
            <img
              src={item.image_background}
              alt={item.name}
              className="w-full h-full object-fill rounded-lg sm:h-[150px] sm:w-[250px] h-[75px] w-[100px]"
            />
            <div className="sm:text-center mt-2 w-[100px] text-start">
              <div
                className={`z-1 sm:text-2xl font-bold text-xl ${
                  activeIndex == index ? "text-amber-700" : null
                }`}
              >
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
