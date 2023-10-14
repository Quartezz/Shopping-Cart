import copyrightSign from "../assets/icons/copyright-sign.svg";
import footerLogo from "../assets/icons/logo.png";
import { footerLinks, socialMedia } from "../constans";
import rawg from "../assets/icons/Rawg.png";

const Footer = () => {
  return (
    <footer
      className="px-[5rem] bg-color-trust sm:px-[15rem] w-full py-12 flex sm:flex-row flex-col items-center justify-center"
      id="support"
    >
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col text-slate-100 barlow">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7  sm:max-w-sm">
            Thank you for choosing Game Harbor – your gateway to endless gaming
            adventures and treasures!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-12 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-white-400   text-slate-100 gap-4 flex-col items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copyright"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved</p>
          </div>
          <p className="cursor-pointer">Terms & Conditions</p>
          <span className="flex gap-2 items-center">
            <a href="https://rawg.io/apidocs">
              <img src={rawg} alt="Api" width={30} height={30} />
            </a>
            API
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
