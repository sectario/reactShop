import React, { useRef} from 'react'
import '../styles/Login.scss'

const Login = () => {
    const form = useRef(null);
    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(data);
    }
    return (
      <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

          <form action="/" className="form" ref={form}>
            <label for="email" className="label">Email address</label>
            <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email"/>

            <label for="password" className="label">Password</label>
            <input type="password" name="password" placeholder="*********" className="input input-password"/>

            <input type="button" value="Log in" className="primary-button login-button" onClick={handleSubmit}/>
            <a href="/">Forgot my password</a>
          </form>

          <button className="secondary-button signup-button" >Sign up</button>
        </div>
      </div>
    );
}

export default Login;