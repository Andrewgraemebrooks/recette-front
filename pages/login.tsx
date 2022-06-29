import type { NextPage } from "next";

const Login: NextPage = () => {
  // Example: https://tailwindcomponents.com/component/mobile-login-page
  return (
    <div className="flex flex-col border-solid border-2 min-h-screen">
      <h1>Login</h1>
      <div className="grow flex flex-col justify-center border-solid border-2">
        <div className="border-solid border-2">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="border-solid border-2">
          <label>Password</label>
          <input type="password" />
        </div>
      </div>
      <button>Log in</button>
    </div>
  )
}

export default Login