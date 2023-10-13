import { useEffect } from "react";

const Trending = ({ gameList }) => {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col px-40 text-slate-100 bg-color w-full h-full">
      <a href="/" className="flex items-end justify-start gap-2">
        <h2 className="text-3xl">Trending</h2>
        <i className="fa-solid fa-chevron-right text-2xl"></i>
      </a>
      <div className="flex flex-wrap w-full relative m-4 justify-center items-center flex-1">
        {gameList.map(
          (item, index) =>
            index < 6 && (
              <div className="m-4 z-1 min-w-0 relative sm:flex sm:flex-col flex items-center gap-2">
                <img
                  src={item.background_image}
                  className="w-full h-full object-fill rounded-lg sm:h-[200px] sm:w-[400px]"
                />
                <a
                  className="absolute bottom-8 right-0 p-2 hover-transition hover:hover-transform cursor-pointer"
                  href="/"
                >
                  <i className="fa-solid fa-plus-circle text-slate-100 text-2xl"></i>
                </a>
                <div className="w-full flex justify-between">
                  <span>{item.name}</span>
                  <span className="flex gap-1 items-center">{item.cost} $</span>
                  <span className="flex gap-1 items-center">
                    <i className="fa-solid fa-star"></i>
                    {item.rating}
                  </span>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Trending;
