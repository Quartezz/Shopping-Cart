import { useEffect, useState } from "react";
import Api from "../api/Api";

const Trending = () => {
  const [allGameList, setAllGameList] = useState();
  useEffect(() => {
    getAllGamesList();
  }, []);

  const getAllGamesList = () =>
    Api.getGamesList.then((resp) => {
      setAllGameList(resp.data.results);
    });

  return (
    <div className="flex flex-col px-40 text-slate-100 bg-color w-full h-full">
      <a href="/" className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">Trending</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex relative justify-center flex-wrap m-4">
        <div className="m-4 width-card z-1 min-w-0 relative flex flex-col bg-slate-50">
          siema
        </div>
        <div className="m-4 width-card z-1 min-w-0 relative flex flex-col bg-slate-50">
          siema
        </div>
        <div className="m-4 width-card z-1 min-w-0 relative flex flex-col bg-slate-50">
          siema
        </div>
      </div>
    </div>
  );
};

export default Trending;
