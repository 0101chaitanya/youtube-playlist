import { FaYoutube, FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdApps, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt2, BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
const NavBar = (props) => {
  return (
    <div className="flex content-between text-white bg-black p-2 border-black border-4">
      <span className="flex flex-1">
        <AiOutlineMenu />

        <FaYoutube className="text-red-700" />
        <p>YouTube</p>
      </span>
      <span className="flex flex-1">
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