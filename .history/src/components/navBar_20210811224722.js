import { FaYoutube, FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdApps, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt2, BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
const NavBar = (props) => {
  return (
    <div className="flex content-between">
      <span className="flex">
        <AiOutlineMenu />

        <FaYoutube
          style={{
            color: "red",
          }}
        />
        <p>YouTube</p>
      </span>
      <span className="flex">
        <input type="text" placeholder="Search" />
        <BiSearchAlt2 />
      </span>
      <span className="flex">
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
