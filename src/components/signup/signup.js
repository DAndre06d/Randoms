import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValid(
      newPassword.length > 7 &&
        newPassword.length < 12 &&
        /[A-Z]/.test(newPassword) &&
        /[!@#$%^&*]/.test(newPassword) &&
        /\d/.test(newPassword)
    );
    setErrorMsg(
      newPassword.length > 7
        ? newPassword.length < 12
          ? /[A-Z]/.test(newPassword)
            ? /[!@#$%^&*]/.test(newPassword)
              ? /\d/.test(newPassword)
                ? ""
                : "Password must contain a number"
              : "Password must contain a special character (!@#$%^&*)"
            : "Password must contain an uppercase letter"
          : "Password must only have 12 characters long"
        : "Password must be at least 8 characters long"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitting sign-up form with email: ${email} and password: ${password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      </label>
      <button type="submit" disabled={!isValid}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
