import * as styles from "./styles";

const NavBar = (props) => {
  return (
    <styles.NavWrapper>
      <styles.Menu />
      <styles.YouTube />
      <styles.NavWrappers.YouLabel>YouTube</styles.NavWrappers.YouLabel>
    </styles.NavWrapper>
  );
};
export default NavBar;
