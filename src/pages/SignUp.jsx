import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/Button/Button";
import TitleText from "../components/TitleText/TitleText";
// import "./SignUp.css";

function SignUp() {

  const [userDetails, setUserDetails] = useState({
    given_name: "",
    preferred_name: "",
    family_name: "",
    email: "",
    profile_photo: "",
    password: "",
  });
  const history = useHistory();

  // Setting state from form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value,
    }));
  };

// Posting data to the API
  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    return response.json();
  };

//   Handling the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userDetails.given_name &&
      userDetails.preferred_name &&
      userDetails.family_name &&
      userDetails.email &&
      userDetails.profile_photo &&
      userDetails.password
    ) {
      postData().then((response) => {
        history.push("/loginpage");
      });
    }
  };

  // triggers from enter key pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="signup-form">
      <TitleText title="Join us!" />
      <TextInput
        id="given_name"
        type="text"
        label="Given Name"
        onChange={handleChange}
      />
      <TextInput
        id="preferred_name"
        type="text"
        label="Preferred Name"
        onChange={handleChange}
      />
      <TextInput
        id="family_name"
        type="text"
        label="Family Name"
        onChange={handleChange}
      />
      <TextInput
        id="profile_photo"
        type="url"
        label="Profile Phot URL"
        onChange={handleChange}
      />
      <TextInput
        id="email"
        type="email"
        label="Email Address"
        onChange={handleChange}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button
      value="Submit"
      onClick={handleSubmit}
      />
    </div>
  );
}

export default SignUp;