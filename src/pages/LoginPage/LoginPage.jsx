// import React from "react";
// import LoginForm from "../../components/LoginForm/LoginForm";
// import './LoginPage.css'

// function LoginPage() {  
//     return <LoginForm />;
// }

// export default LoginPage;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import TitleText from "../../components/TitleText/TitleText";
import "./LoginPage.css";

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("id", response.id);
        window.localStorage.setItem("is_owner", response.is_owner);
        if (response.token != null) {
          history.push("/");
        }
      });
    }
  };

  const handleKeyPress = (e) => {
    // triggers if enter key is pressed
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  // Template
  return (
    <div className="login-form">
      <TitleText title="Login" />
      <TextInput
        id="username"
        type="email"
        label="Email"
        onChange={handleChange}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button value="Login" onClick={handleSubmit} />
    </div>
  );
}

export default LogIn;