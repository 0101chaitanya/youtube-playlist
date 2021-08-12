import * as styles from "./styles";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = (props) => {
  return (
    <div>
      <AiOutlineMenu />
      <span>
        <FaYoutube
          style={{
            color: "red",
          }}
        />
        <p>YouTube</p>
      </span>
      <span>
        <input type="text" />
      </span>
    </div>
  );
};
export default NavBar;
