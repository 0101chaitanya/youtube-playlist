import { FaYoutube, FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdApps, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt2, BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = (props) => {
  return (
    <div className="flex content-between justify-between p-2 overflow-hidden font-bold text-white bg-gray-900 border-4 border-black text-1xl">
      <span className="flex items-center justify-center ">
        <AiOutlineMenu className="mr-2" />
        <FaYoutube className="mr-2 text-red-600" />
        <p className="mr-0">YouTube</p>
      </span>
      <span className="flex items-center justify-center flex-1">
        <input
          type="text"
          className="flex-1 max-w-lg ml-4 text-black rounded-sm"
          placeholder="Search"
        />
        <BiSearchAlt2 className="w-10 h-6 p-1 ml-2 bg-gray-700 border-2" />
      </span>
      <span className="flex items-center justify-between text-xl ">
        <FaMicrophone className="mx-2" />
        <BiVideoRecording className="mx-1" />
        <MdApps className="mx-1" />
        <IoMdNotificationsOutline className="mx-1" />
        <MdAccountCircle className="ml-2" />
      </span>
    </div>
  );
};
export default NavBar;
