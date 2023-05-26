import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

import startCase from "lodash/startCase";

import { ROUTE_NAMES } from "../../routes/routeNames";
import LOGO from "static/images/LOGO.jpg";
import { logOut } from "utils/logOut";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import BadgeIkon from "commonComponents/Badge";

import styles from "./styles.module.scss";

const Header = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const { pathname } = useLocation();

  return isAuthenticated ? (
    <div className={styles.wrapper}>
      {/* <Link to={ROUTE_NAMES.HOME} className={styles.navLink}>
        <img src={LOGO} alt="LOGO" style={{ width: "30%" }}></img>
      </Link> */}
      <Link to={ROUTE_NAMES.POKEMONS} className={styles.navLink}>
        POKEMONS
      </Link>

      <IconButton aria-label="delete" onClick={logOut} sx={{ color: "white" }}>
        <LogoutIcon />
      </IconButton>

      <Link to={ROUTE_NAMES.CART}>
        <BadgeIkon />
      </Link>
    </div>
  ) : (
    <div className={styles.wrapperHome}>
      <Link to={ROUTE_NAMES.HOME} className={styles.navLink}>
        <img src={LOGO} alt="LOGO" style={{ width: "30%" }}></img>
      </Link>
      <div>
        <Link to={ROUTE_NAMES.SIGN_UP} className={styles.navLink}>
          SIGN UP
        </Link>
        <Link to={ROUTE_NAMES.SIGN_IN} className={styles.navLink}>
          LOG IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
