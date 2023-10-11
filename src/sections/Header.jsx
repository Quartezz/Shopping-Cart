import { logo } from "../assets/icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full py-0 px-[30px] h-20 fixed top-[0] z-10 mb-[-73px] text-slate-100 opacity-85 bg-color">
      <a href="/" alt="logo" className="flex gap-2">
        <img src={logo} alt="logo" width={120} height={40} />
        <h1 className="text-2xl font-bold">
          Game
          <br />
          Harbor
        </h1>
      </a>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-4">
          <a href="/">Trending</a>
          <a href="/">Games of the year</a>
          <a href="/">Support</a>
        </div>
        <div className="flex gap-4 items-center justify-center relative w-full">
          <div>
            <a href="/" className="flex items-center gap-1">
              <i className="fa-solid fa-desktop text-xl"></i>
              <span>PC</span>
            </a>
          </div>
          <div>
            <a href="" className="flex items-center gap-1">
              <i className="fa-brands fa-playstation text-xl"></i>
              <span>Playstation</span>
            </a>
          </div>
          <div>
            <a href="" className="flex items-center gap-1">
              <i className="fa-brands fa-xbox text-xl"></i>
              <span>Xbox</span>
            </a>
          </div>
          <div>
            <a href="" className="flex items-center gap-1">
              <i className="fa-solid fa-gamepad text-xl"></i>
              <span>Nintendo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <a href="">
          <i className="fa-solid fa-cart-shopping text-2xl"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-user text-2xl"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
