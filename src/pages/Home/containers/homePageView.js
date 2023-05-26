import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

import { ROUTE_NAMES } from "routes/routeNames";
import MyCollage from "static/images/MyCollages.jpg";

const HomePageView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h3 className={styles.title3}>Welcome to the World of Pokémon</h3>
        <h1 className={styles.title}>CHOOSE YOUR </h1>
        <h2 className={styles.title2}>POKÉMON</h2>
        <Link to={ROUTE_NAMES.SIGN_IN} className={styles.signUpLink}>
          LOG IN
        </Link>
      </div>
      <div>
        {/* <img src={MyCollage} alt="LOGO" style={{ width: "80%" }}></img> */}
      </div>
    </div>
  );
};

export default HomePageView;
