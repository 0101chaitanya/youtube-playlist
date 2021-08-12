import * as styles from "./styles";

const NavBar = (props) => {
  return (
    <styles.NavWrapper>
      <styles.Menu />
      <styles.NavWrapper>
        <styles.YouTube />
        <styles.YouLabel>YouTube</styles.YouLabel>
      </styles.NavWrapper>
    </styles.NavWrapper>
  );
};
export default NavBar;
