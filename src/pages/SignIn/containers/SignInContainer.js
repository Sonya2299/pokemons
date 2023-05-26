import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { useForm } from "hooks";
import { signInThunk } from "../api";
import { isAuthenticatedSelector } from "../selectors";

import styles from "./styles.module.scss";
import { ROUTE_NAMES } from "routes/routeNames";

const SignInContainer = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();

  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form));
  };

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.POKEMONS} />;
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.titlesignin}> Log In</h1>
        <input
          type="email"
          value={form.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />

        <button role="submit" className={styles.btn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignInContainer;
