import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const Conditional = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [value, setValue] = useState();
  return (
    <div>
      Conditional Rendering
      {isLogin ? <Login /> : <Logout />}
      <button onClick={() => setIsLogin(true)}>Login</button>
      {value == "Login" && <Login />}
      <br />
      <button onClick={() => setValue("Login")}>Addvalue</button>
      <button onClick={() => setValue("Logout")}>Logout</button>
    </div>
  );
};

export default Conditional;
