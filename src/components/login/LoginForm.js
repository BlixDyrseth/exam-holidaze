import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_AUTH } from "../../constants/api/api";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../../contex/AuthContex";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email adress")
    .email("Wrong format"),
  password: yup.string().required("Please enter password"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  async function onSubmit({ email, password }) {
    setSubmitting(true);
    setLoginError(null);

    const data = JSON.stringify({ identifier: email, password: password });

    try {
      const response = await axios
        .post(API_AUTH, {
          identifier: email,
          password: password,
        })
        .then((response) => {
          // Handle success.
          alert("You've been sucsessful logged in!");

          //localStorage.setItem("token", response.data.jwt);
          setAuth(response.data);

          reset();
          navigate("/admin");
        });
      // console.log("response", response.data);
    } catch (error) {
      alert("login failed!");
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="form-container">
      <form className="login-form-container" onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <div className="login-form">
            <div className="login-form-inputs">
              <p>Email</p>
              <input
                className="form-input"
                type="text"
                name="email"
                //  onChange={(e) => setEmail(e.target.value)}
                {...register("email")}
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
              <p>Password</p>
              <input
                className="form-input"
                type="password"
                name="password"
                // onChange={(e) => setPassword(e.target.value)}
                {...register("password")}
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>
            <button className="button" type="submit" /*onClick={handle}*/>
              Login
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
