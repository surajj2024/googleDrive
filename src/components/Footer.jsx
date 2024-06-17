import { FOOTER_RIGHT, PICS } from "../utils/Common";

const Footer = () => {
  return (
    <div className="mt-24">
      <div className="text-center justify-center flex flex-col relative pb-10">
        <h1> Ready to get started ? </h1>

        <ul className="flex justify-center items-center gap-5 pt-4 phone:flex-row flex-col">
          <li className="border border-slate-300 hover:border hover:border-[#1967d2] cursor-pointer font-medium text-[#1a73e8] h-[50px] min-w-[193px] max-w-[173px] rounded-[4px] flex items-center justify-center pb-2">
            Go to Drive{" "}
          </li>{" "}
          <li
            className={`bg-[#1a73e8] hover:bg-[#1967d2] cursor-pointer font-medium text-white h-[50px] max-w-[193px] min-w-[193px] rounded-[4px] flex items-center justify-center`}
          >
            Try Drive for Work{" "}
          </li>{" "}
        </ul>

        <img
          src={FOOTER_RIGHT}
          alt="footer right image"
          className="absolute left-4 top-0"
        />
      </div>{" "}
      <div className="mt-16 ml-16 p-10">
        <div className="flex items-center gap-4 font-medium">
          Follow out <span className="text-[#1a73e8] cursor-pointer">Blog</span>
          <div className="flex gap-5 ">
            <span>
              <img src={PICS.YT} className="h-8 cursor-pointer" />
            </span>
            <span>
              <img src={PICS.twitter} className="h-8 cursor-pointer" />
            </span>
            <span>
              <img src={PICS.FB} className="h-6 mt-1 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
