import styles from "./styles.module.scss";

const SignUpForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
      <h1 style={{ color: "#e59a00" }}> Sign Up</h1>

      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        placeholder="First Name"
      />
      {formik.touched.firstName && formik.errors.firstName && (
        <div style={{ color: "red" }}>{formik.errors.firstName}</div>
      )}

      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder="Last Name"
      />
      {formik.touched.lastName && formik.errors.lastName && (
        <div style={{ color: "red" }}>{formik.errors.lastName}</div>
      )}

      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email && (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      )}

      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Password"
      />
      {formik.touched.password && formik.errors.password && (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      )}

      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        placeholder="Confirm Password"
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
      )}

      <input
        id="gender"
        name="gender"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gender}
        placeholder="Gender"
      />
      {formik.touched.gender && formik.errors.gender && (
        <div style={{ color: "red" }}>{formik.errors.gender}</div>
      )}

      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        placeholder="Phone"
      />
      {formik.touched.phone && formik.errors.phone && (
        <div style={{ color: "red" }}>{formik.errors.phone}</div>
      )}

      <button type="submit" className={styles.btn}>
        Create account
      </button>
    </form>
  );
};
export default SignUpForm;
