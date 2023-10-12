import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import avatar4 from "../assets/images/avatar4.jpg";
import stars from "../assets/icons/5stars.svg";
import React from "react";

const Reviews = () => {
  return (
    <div className="flex px-10 bg-color-trust items-center justify-center bg-cover text-slate-100 py-14">
      <div className="w-full flex justify-center max-w-[1200px] gap-8">
        <div className="rounded-lg spacer-color p-4 flex flex-col justify-between relative items-start ">
          <div className="flex">
            <img src={avatar1} alt="Avatar" className="w-12 h-12 circle" />
            <div className="flex flex-col ml-4">
              <img src={stars} alt="stars" className="w-[8rem]" />
              <p className="font-bold">Elden Ring</p>
            </div>
          </div>
          <p className="text-sm desc-color mt-2">Good and fast</p>
          <p className="font-semibold mt-12">6 days ago</p>
        </div>
        <div className="rounded-lg spacer-color p-4 flex flex-col justify-between relative items-start ">
          <div className="flex">
            <img src={avatar2} alt="Avatar" className="w-12 h-12 circle" />
            <div className="flex flex-col ml-4">
              <img src={stars} alt="stars" className="w-[8rem]" />
              <p className="font-bold">Gothic 2</p>
            </div>
          </div>
          <p className="text-sm desc-color mt-2">Very reliable!</p>
          <p className="font-semibold mt-12">8 days ago</p>
        </div>
        <div className="rounded-lg spacer-color p-4 flex flex-col justify-between relative items-start ">
          <div className="flex">
            <img src={avatar3} alt="Avatar" className="w-12 h-12 circle" />
            <div className="flex flex-col ml-4">
              <img src={stars} alt="stars" className="w-[8rem]" />
              <p className="font-bold">Trine 2</p>
            </div>
          </div>
          <p className="text-sm desc-color mt-2">This game is a pure delight</p>
          <p className="font-semibold mt-12">12 days ago</p>
        </div>
        <div className="rounded-lg spacer-color p-4 flex flex-col justify-between relative items-start ">
          <div className="flex">
            <img src={avatar4} alt="Avatar" className="w-12 h-12 circle" />
            <div className="flex flex-col ml-4">
              <img src={stars} alt="stars" className="w-[8rem]" />
              <p className="font-bold">Portal 2</p>
            </div>
          </div>
          <p className="text-sm desc-color mt-2">Great very fast</p>
          <p className="font-semibold mt-12">22 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
