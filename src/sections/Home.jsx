import home from "../assets/images/home.jpg";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <img src={home} alt="" className="object-cover w-full h-full " />
      <div className="flex items-start justify-start z-10 text-slate-100 w-full absolute pl-40 flex-col">
        <span className="font-bold text-4xl">Game Harbor</span>
        <p>Where the gaming begins</p>
      </div>
      <div className="content-none clip-path bg-color w-full h-20 absolute bottom-[0] left-[0]"></div>
    </div>
  );
};

export default Home;
