import { useState } from "react";

function SignIn() {
    const [signin, setSignin] = useState([])
  return (
    <div id="login-box">
      <div className="left">
        <h1 className="h1">Sign In</h1>
        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password2" placeholder="Retype Password" required/>
        <input type="submit" name="signup-submit" value="Sign in" />
      </div>
    </div>
  );
}
export default SignIn;
