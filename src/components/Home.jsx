import home from "../assets/images/home.jpg";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <img src={home} alt="" className="object-cover w-full h-full " />
      <div className="content-none clip-path bg-color w-full h-20 absolute bottom-[0] left-[0]"></div>
    </div>
  );
};

export default Home;
