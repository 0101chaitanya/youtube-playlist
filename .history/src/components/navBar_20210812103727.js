import { FaYoutube, FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdApps, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt2, BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = (props) => {
  return (
    <div className="flex content-between p-2 text-white bg-black border-4 border-black">
      <span className="flex items-center justify-center ">
        <AiOutlineMenu className="mx-6" />
        <FaYoutube className="mr-2 text-red-600" />
        <p>YouTube</p>
      </span>
      <span className="flex content-center flex-1">
        <input type="text" className="ml-4" placeholder="Search" />
        <BiSearchAlt2 flex-1 />
      </span>
      <span className="flex items-center justify-between ">
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
