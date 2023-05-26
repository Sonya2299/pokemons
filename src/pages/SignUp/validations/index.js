import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("Обязательное поле")
    .min(2, "Минимум 2 символа")
    .max(25, "Не более 25 символов"),
  lastName: Yup.string()
    .required("Обязательное поле")
    .min(2, "Минимум 2 символа")
    .max(25, "Не более 25 символов"),
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Обязательное поле"),
  gender: Yup.string().required("Обязательное поле"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(8, "Минимум 8 символов"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать"),
  phone: Yup.string()
    .required("Обязательное поле")
    .min(5, "Минимум 5 символов")
    .max(10),
});
