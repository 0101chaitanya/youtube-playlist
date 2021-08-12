import { FaYoutube, FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdApps, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt2, BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
const NavBar = (props) => {
  return (
    <div className="flex content-between p-2 text-white bg-black border-4 border-black">
      <span className="flex items-center justify-between flex-1">
        <AiOutlineMenu />
        <FaYoutube className="text-red-600" />
        <p>YouTube</p>
      </span>
      <span className="flex flex-2">
        <input type="text" placeholder="Search" />
        <BiSearchAlt2 />
      </span>
      <span className="flex flex-1">
        <FaMicrophone />
        <BiVideoRecording />
        <MdApps />
        <IoMdNotificationsOutline />
        <MdAccountCircle />
      </span>
    </div>
  );
};
export default NavBar;
