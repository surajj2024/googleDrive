import { useEffect, useState } from "react";
import icon from "../assets/icon.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ signIn }) => {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1440) {
        setNav(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex p-2 fixed w-full items-center bg-white border-b border-gray-300 z-50">
      <span className="monitors:hidden mr-3" onClick={handleClick}>
        <RxHamburgerMenu size={25} />
      </span>
      <div className="flex align-center items-center min-w-[225px]">
        <img src={icon} alt="Google Drive Logo" className="h-[40px]" />
        <p className="text-2xl flex gap-2">
          <span className="text-heading font-medium">Google</span>
          <span className="text-heading font-extralight">Drive</span>
        </p>
      </div>

      <div className="justify-between w-full hidden monitors:flex">
        <ul className="flex justify-center items-center gap-10">
          <li>Overview</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Pricing</li>
          <li>Dowload</li>
        </ul>

        <ul className="flex justify-center items-center gap-9">
          <li>More tools</li>
          <li>Sign in</li>
          <li className="border border-slate-300 hover:border hover:border-[#1967d2] cursor-pointer font-medium text-[#1a73e8] min-h-[50px] min-w-[173px] rounded-[4px] flex items-center justify-center">
            Go to Drive
          </li>
          <li
            className={`bg-[#1a73e8] hover:bg-[#1967d2] cursor-pointer font-medium text-white min-h-[50px] max-w-[193px] min-w-[193px] rounded-[4px] flex items-center justify-center`}
          >
            Try Drive for Work
          </li>
        </ul>
      </div>

      <div
        className={`transition-all ani absolute top-16 min-w-[250px] max-w-[500px] min-h-screen ${
          nav ? "-left-[600px]" : "left-0"
        } bg-white min-w-[%]`}
      >
        <ul className="text-xl flex flex-col gap-5 pb-5 ml-4">
          <li>Overview</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Pricing</li>
          <li>Dowload</li>
        </ul>

        <ul className="flex flex-col gap-5 ml-4">
          <li className="text-xl">More tools</li>
          <li className="text-xl">Sign in</li>
          <li
            onClick={() => signIn()}
            className="border border-slate-300 hover:border hover:border-[#1967d2] cursor-pointer font-medium text-[#1a73e8] min-h-[50px] min-w-[193px] max-w-[193px] rounded-[4px] flex items-center justify-center"
          >
            Go to Drive
          </li>
          <li
            className={`bg-[#1a73e8] hover:bg-[#1967d2] cursor-pointer font-medium text-white min-h-[50px] max-w-[193px] min-w-[193px] rounded-[4px] flex items-center justify-center`}
          >
            Try Drive for Work
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
