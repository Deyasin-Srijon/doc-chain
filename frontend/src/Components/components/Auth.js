import React, { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="card">
      <h3>{isLogin ? "Login" : "Sign Up"}</h3>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>{isLogin ? "Login" : "Register"}</button>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
}
