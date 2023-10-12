import React, { useEffect, useState } from "react";
import Api from "../api/Api";

const GenreList = () => {
  const [genreList, setGenreList] = useState([]);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    Api.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div className="flex flex-col px-40 text-slate-100 bg-color w-full h-full">
      <a href="/" className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">Categories</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex relative justify-center flex-wrap m-4">
        {genreList.map((item) => (
          <div className="m-4 width-card z-1 min-w-0 relative flex flex-col hover-transition hover:hover-transform cursor-pointer">
            <img
              src={item.image_background}
              alt={item.name}
              className="w-full h-full object-fill rounded-lg max-h-[200px]"
            />
            <div className="text-center mt-2">
              <div className="z-1 text-2xl font-bold">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
