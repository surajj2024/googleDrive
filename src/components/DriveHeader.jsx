import { PICS } from "../utils/Common";
import { IoIosSearch } from "react-icons/io";
import { FaAlignCenter } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

const DriveHeader = ({ photoURL, handleSignOut, val }) => {
  // console.log(val)
  const { inputval, setInput } = val;
  return (
    <div className="flex justify-between items-center bg-white p-3 border-b border-gray-200">
      <div className="flex justify-center items-center hidden tablet:block">
        <img src={PICS.icon} className="h-10" /> <span> Drive </span>
      </div>
      <div className="flex justify-center items-center bg-gray-100 gap-5 p-2 rounded-lg">
        <IoIosSearch size={25} />
        <input
          placeholder="Search in Drive"
          value={inputval}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-100 outline-none tablet:w-[400px] laptop:w-[650px]"
        />
        <FaAlignCenter size={18} />
      </div>

      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-4">
          <img src={PICS.questionMark} className="h-6 hidden tablet:block" />
          <span
            onClick={handleSignOut}
            className="cursor-pointer flex justify-center items-center text-center border border-slate-300 p-2 rounded-full bg-slate-300 hover:bg-slate-200"
          >
            Log Out
          </span>
        </div>

        <div className="tablet:flex justify-center items-center gap-2 hidden tablet:block">
          <BsGrid3X3GapFill />
          <img src={photoURL} alt="userIcon" className="h-10 w-10 rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default DriveHeader;
