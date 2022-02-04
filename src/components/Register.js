import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValues = {
  username: "",
  pnumber: "",
  password: "",
};

const initialErrors = {
  username: "",
  pnumber: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Name is required")
    .min(3, "Name has to be at least three characters"),
  pnumber: yup
  .string()
  .trim()
  .required("Phone number is required")
  .min(10, "Enter valid phone number"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password has to be at least four characters"),
});

export default function Register() {
  const [user, setUser] = useState(initialValues);
  const [errors, setErrors] = useState({ initialErrors });
  const [disabled, setDisabled] = useState(false);

  const { push } = useHistory();

  const validation = (name, value) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => setErrors({ ...initialErrors, [name]: "" }))
      .catch((err) => setErrors({ ...initialErrors, [name]: err.errors[0] }));
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    validation(name, value);
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://water-my-plants-08.herokuapp.com/api/auth/register",
        user
      )
      .then((res) => {
        setUser(initialValues);
        push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    validationSchema.isValid(user).then((valid) => setDisabled(!valid));
  }, [user]);

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="register-form">
        <div className="form-group">
          <h1>User Registration</h1>

          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={user.name}
              onChange={onChange}
              id='user-input'
            />
          </div>

          <div className="form-group">
            <label>Phone #: </label>
            <input
              type="text"
              name="pnumber"
              value={user.pnumber}
              onChange={onChange}
              id='pnumber-input'
            />

            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              id='pass-input'
            />
            <br />
          </div>
        </div>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
          <div>{errors.pnumber}</div>
        </div>

        <button disabled={disabled} className='register-button'>Register</button>
      </form>
    </div>
  );
}
