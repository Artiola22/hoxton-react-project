import { useEffect, useState } from "react";

function SignUp({user, setUser}) {
 
  // function getUserFromServer(){
  //     return fetch('http://localhost:3000/users')
  //     .then(resp => resp.json())
  //     .then(userFromServer => setUser(userFromServer))
  // }

  function comparePasswords(password, password2) {
    return password === password2
  }
  function addUser(
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    password2
  ) {
    return fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: Number(phoneNumber),
        password: password,
        password2: password2,
        id : email
      }),
    })
      .then((resp) => resp.json())
      
  }

  return (
    <div id="login-box">
      <div className="left">
        <h1 className="h1">Sign Up</h1>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            if(!comparePasswords(event.target.password.value, event.target.password2.value)){
                alert("Passwords dont match!")
                return
            } else {
                addUser(
                    event.target.firstname.value,
                    event.target.lastname.value,
                    event.target.phoneNumber.value,
                    event.target.email.value,
                    event.target.password.value,
                    event.target.password2.value
                  );
                  alert(`Welcome, ${event.target.firstname.value}`) 
                  event.target.reset();
            }
            
            
            
          }}
        >
          <input type="text" name="firstname" placeholder="First name" />
          <input type="text" name="lastname" placeholder="Last name" />
          <input type="text" name="phoneNumber" placeholder="Phone Number" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password2"
            placeholder="Retype Password"
          />

          <input type="submit" name="signup-submit" value="Sign me up" />
        </form>
      </div>
    </div>
  );
}
export default SignUp;
