import * as styles from "./styles";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = (props) => {
  return (
    <div>
      <AiOutlineMenu />
      <span>
        <FaYoutube />
        <p>YouTube</p>
      </span>
    </div>
  );
};
export default NavBar;
