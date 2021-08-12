import { FaYoutube, FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdApps, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt2, BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = (props) => {
  return (
    <div className="flex content-between justify-between p-2 overflow-hidden font-bold text-white bg-black border-4 border-black text-1xl">
      <span className="flex items-center justify-center ">
        <AiOutlineMenu className="mr-4" />
        <FaYoutube className="mr-2 text-red-600" />
        <p className="mr-0">YouTube</p>
      </span>
      <span className="flex items-center justify-center flex-1">
        <input
          type="text"
          className="flex-1 max-w-xl ml-6 rounded-sm "
          placeholder="Search"
        />
        <BiSearchAlt2 className="w-10 h-6 p-1 ml-2 border-2" />
      </span>
      <span className="flex items-center justify-between text-2xl ">
        <FaMicrophone className="mx-1" />
        <BiVideoRecording className="mx-1" />
        <MdApps className="mx-1" />
        <IoMdNotificationsOutline className="mx-1" />
        <MdAccountCircle className="ml-1" />
      </span>
    </div>
  );
};
export default NavBar;
