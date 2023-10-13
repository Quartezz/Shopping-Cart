import { logo } from "../assets/icons";
import { Link } from "react-router-dom";

const Headershop = () => {
  return (
    <header className="flex items-center justify-between w-full py-0 px-[30px] h-20 fixed top-[0] z-10 mb-[-73px] text-slate-100 opacity-85 bg-color">
      <div className="flex gap-2">
        <a href="#home" alt="logo" className="hidden sm:block">
          <img src={logo} alt="logo" width={120} height={40} />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-4">
          <a
            href="#trending"
            className="hover-transition hover:hover-transform"
          >
            Trending
          </a>
          <a
            href="#categories"
            className="hover-transition hover:hover-transform"
          >
            Categories
          </a>
          <a href="#support" className="hover-transition hover:hover-transform">
            Support
          </a>
        </div>
        <div className="flex sm:gap-4 items-center justify-center relative w-full gap-2">
          <div>
            <a
              href="/"
              className="flex items-center gap-1 hover-transition hover:hover-transform"
            >
              <i className="fa-solid fa-desktop text-xl hidden sm:flex"></i>
              <span>PC</span>
            </a>
          </div>
          <div>
            <a
              href=""
              className="flex items-center gap-1 hover-transition hover:hover-transform"
            >
              <i className="fa-brands fa-playstation text-xl hidden sm:flex"></i>
              <span>Playstation</span>
            </a>
          </div>
          <div>
            <a
              href=""
              className="flex items-center gap-1 hover-transition hover:hover-transform"
            >
              <i className="fa-brands fa-xbox text-xl hidden sm:flex"></i>
              <span>Xbox</span>
            </a>
          </div>
          <div>
            <a
              href=""
              className="flex items-center gap-1 hover-transition hover:hover-transform"
            >
              <i className="fa-solid fa-gamepad text-xl hidden sm:flex"></i>
              <span>Nintendo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row sm:gap-4 flex-col justify-center items-center">
        <a
          href="#home"
          className="hover-transition hover:hover-transform"
          alt="To the top!"
        >
          <i className="fa-solid fa-circle-arrow-up text-2xl"></i>
        </a>
        <Link
          to="/cart"
          className="hover-transition hover:hover-transform"
          alt="Cart"
        >
          <i className="fa-solid fa-cart-shopping text-2xl"></i>
        </Link>
      </div>
    </header>
  );
};

export default Headershop;
