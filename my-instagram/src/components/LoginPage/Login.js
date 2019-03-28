import React from "react";

const Login = props => {
  return (
    <div>
      <form>
        <input type="email" placeholder="...email" onChange="loginHandler" />
        <input type="password" placeholder="password" />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
