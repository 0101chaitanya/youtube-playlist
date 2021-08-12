import { AiOutlineMenu } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import styled from "styled-components";
const NavBar = (props) => {
  return (
    <div>
      <AiOutlineMenu />
      <You />
    </div>
  );
};
export default NavBar;

const You = styled(FaYoutube)`
  // color: pink;
`;
