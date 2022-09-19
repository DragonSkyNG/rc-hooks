import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const onChangeHandler = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onClickHandler = async () => {
    try {
      console.log(loginInfo);
      const res = await axios.post(
        "http://localhost:3001/auth/login",
        loginInfo,
        { withCredentials: true }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        onChange={onChangeHandler}
        type="text"
        id="username"
        name="username"
      />
      <label htmlFor="password">Password:</label>
      <input
        onChange={onChangeHandler}
        type="password"
        id="password"
        name="password"
      />
      <button onClick={onClickHandler}>Login</button>
    </div>
  );
};

export default Login;
