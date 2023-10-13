import home from "../assets/images/home.jpg";
const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center w-full relative"
    >
      <img src={home} alt="" className="object-cover w-full min-h-[300px] " />
      <div className="flex justify-start z-9 text-slate-100 w-full absolute pl-32 flex-col">
        <span className="font-bold text-4xl">Game Harbor</span>
        <p>Where the gaming begins</p>
      </div>
      <div className="content-none clip-path bg-color w-full h-20 absolute bottom-[-1px] left-[0]"></div>
    </div>
  );
};

export default Home;
