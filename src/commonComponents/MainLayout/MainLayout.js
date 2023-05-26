import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useCart } from "hooks";
import Header from "../Header";

import styles from "./styles.module.scss";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";

const MainLayout = ({ children }) => {
  const { getCartData } = useCart();
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  useEffect(() => {
    if (isAuthenticated) {
      getCartData();
    }
  }, [isAuthenticated]);
  return (
    <div>
      <Header />

      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MainLayout;
