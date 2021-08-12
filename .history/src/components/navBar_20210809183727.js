import * as styles from "./styles";

const NavBar = (props) => {
  return (
    <styles.NavWrapper>
      <styles.Menu />
      <styles.YouTube />
      <styles.YouLabel>YouTube</styles.YouLabel>
    </styles.NavWrapper>
  );
};
export default NavBar;
