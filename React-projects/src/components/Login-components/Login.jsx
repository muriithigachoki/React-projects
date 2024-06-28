import React, { useState } from "react";
import { login } from "./Utils";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      await login(userCredentials);
      alert("Login successful!");
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  const isButtonDisabled =
    !userCredentials.email || userCredentials.password.length < 6 || isLoading;
  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          type={"email"}
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              email: event.target.value,
            })
          }
        />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input
          id={"password"}
          type={"password"}
          onChange={(event) =>
            setUserCredentials({
              ...userCredentials,
              password: event.target.value,
            })
          }
        />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage"></div>

      <div className="button">
        <button
          disabled={isButtonDisabled}
          onClick={handleLogin}
          className="btn btn-primary"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
