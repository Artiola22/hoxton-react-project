import { useEffect, useState } from "react"

function SignUp() {
    
    

    function addUser ({firstName, lastName, phoneNumber, email, password, password2}){
        return fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email : email,
                password: password,
                 password2 : password2})
            
        }).then(resp => resp.json())
    }
    return(
        <div id="login-box">
            <div className="left">
                <h1 className="h1">Sign Up</h1>
                <input type="text" name="firstname"  placeholder="First name"/>
                <input type="text" name="lastname"  placeholder="Last name"/>
                <input type="text" name="phoneNumber"  placeholder="Phone Number"/>
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="password2" placeholder="Retype Password" />

                <input type="submit" name="signup-submit" value="Sign me up" 
                />

            </div>
        </div>
    )
}
export default SignUp