import React from "react";

function Login() {
  return (
    <div className='container p-'>
      <div
        className='g-signin2'
        data-onsuccess='onSignIn'
        data-theme='dark'
      ></div>
    </div>
  );
}

export default Login;
