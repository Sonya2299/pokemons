import { useFormik } from "formik";
import omit from "lodash/omit";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useFetching } from "hooks";
import { ROUTE_NAMES } from "routes/routeNames";
import { signUpValidationSchema } from "../validations";
import { signUp } from "../api";
import SignUpForm from "../components/SignUpForm";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";

import styles from "./styles.module.scss";

const SignUpContainer = () => {
  const { data, errors, handleDataLoad } = useFetching(signUp);
  const navigate = useNavigate();
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      phone: "",
    },

    validationSchema: signUpValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(omit(values, "confirmPassword"));
      resetForm();
    },
  });

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.POKEMONS} />;
  }

  return (
    <div className={styles.wrapper}>
      {data?.data ? (
        <>
          <div>{data.data.message}</div>
          <button onClick={() => navigate(ROUTE_NAMES.SIGN_IN)}>
            Go To Login
          </button>
        </>
      ) : (
        <>
          <SignUpForm formik={formik} />

          {errors && <div style={{ color: "red" }}>{errors.message}</div>}
        </>
      )}
    </div>
  );
};

export default SignUpContainer;
