import { useEffect, useState } from "react";

function SignIn({user , setUser}) {
    
    function signIn(email, password) {
        return fetch(`http://localhost:3000/users/${email}`).then(res => res.json()).then(userInServer => {
            if (userInServer.password === password) {
               
               setUser(userInServer)
    
            } else {
                alert("User not found!")
            }
           
        })
    }

  return (
    <div id="login-box">
      <div className="left">
      <h1 className="h1">Sign In</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            signIn(e.target.username.value, e.target.password.value)
            
            e.target.reset()
          }}
        >
          
          <input type="email" name="username" placeholder="Username" required />
          <input
            type="password"
            name="password"
            placeholder="Retype Password"
            required
          />
          <input type="submit" name="signup-submit" value="Sign in" />
        </form>
      </div>
    </div>
  );
}
export default SignIn;
