import * as styles from "./styles";
import { FaYoutube, FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdApps, MdAccountCircle } from "react-icons/md";
import { BiSearchAlt2, BiVideoRecording } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
const NavBar = (props) => {
  return (
    <div className="NavBar">
      <span>
        <AiOutlineMenu />
        <span>
          <FaYoutube
            style={{
              color: "red",
            }}
          />
          <p>YouTube</p>
        </span>
      </span>
      <span>
        <input type="text" />
        <BiSearchAlt2 />
      </span>
      <span>
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
