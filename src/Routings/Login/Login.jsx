import React from 'react'
import './StyleSheet.css';
import './Login.js';
import { Button } from 'react-bootstrap';

export default function Login() {

  const redirectButtonSignUp = () => {
    window.location.href="/Home";
  }

  const redirectButtonLogIn = () => {
	window.location.href="/Home";
  }

  const hai = () => {
	window.location.href="/Restaurant1"
  }


  return (
    <div className='body'>
      <div class="main">  	

		<input type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" placeholder="User name" />
					<input type="email" placeholder="Email"/>
					<input type="password"  placeholder="Password"/>
	  				<Button onClick={redirectButtonSignUp}> SignUp</Button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required/>
					<input type="password" name="pswd" placeholder="Password" required />
					<Button onClick={redirectButtonLogIn}> Login</Button>
				</form>
			</div>
	</div>
    </div>
  )
}
