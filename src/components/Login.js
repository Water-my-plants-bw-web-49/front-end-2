import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  // Creating a useState for values with the default value set to an empty string
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
// Sets push to useHistory, this well be used later below
  const { push } = useHistory();
// This onChange captures any change within the element without it we would not be able to register our text within the forms for username and password below
  const onChange = (e) => {
    //Setting the values useState "values?"
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  //Username and password must be more than 0 characters.
  function validateForm() {
    return values.username.length > 0 && values.password.length > 0;
  }
//Essentially means when this is submitted what should it do.
  function handleSubmit(event) {
    // Keeps the page from refreshing.
    event.preventDefault();
    // When submitted post to the login api
    axios
      .post(
        "https://water-my-plants-08.herokuapp.com/api/auth/login",
        values
      )
      // Set a token for the local user, so said user can have proper authentication to login.
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        // Pushes the user to the plant page.
        push("/plants");
        // This reloads the page, because without a reload the login button would stay. Remove and try to login.
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="container">
      {/* Creates a form that when submitted uses the above handleSubmit function */}
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Login</h1>
          <div className='form-group'>
            {/* This is the username portion of the login form */}
            <label htmlFor="username">Username</label>
              <input
              // The type of form is a text form
                type="text"
                id="user-input"
                // This is used form our useState
                name="username"
                value={values.username}
                // Whenever something is typed the onChnage recognizes the change and displays the value of what the user typed.
                onChange={onChange}
              />
              {/* This is the password portion of the login form */}
              <label htmlFor="password">Password</label>
              <input
              // The type of form is a password form, which censors out the text like a password should.
                type="password"
                id="pass-input"
                // This is used form our useState
                name="password"
                value={values.password}
                // Whenever something is typed the onChnage recognizes the change and displays the value of what the user typed.
                onChange={onChange}
              />
          </div>
          {/* This login button is disabled until you type in a character in each field. */}
        <button disabled={!validateForm()} className='login-button'>Login</button>
      </form>

    </div>
  );
}
