import React, {useState} from "react"
import pcs from '../Images/pcs.png'
import pcsLogo from '../Images/pcs_logo.png'
import { useHistory } from "react-router-dom"
import axios from "axios"
import Cookies from  "js-cookie"
import './index.css'

const Login = () => {

    const history = useHistory()
    const [ user, setUser] = useState({
        email:"",
        password:""
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
      axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            
            if(res.data.message==="User Not Registered"){
              history.push("/login")
            }
            else if(res.data.message==="Password didn't match"){
              history.push("/login")
            }
            else{
              console.log("JWT TOKEN")
              
              console.log(res.data.jwt_token)

              Cookies.set('jwt_token',res.data.jwt_token,{expires:30})
              history.push("/home")
            }
            
        })  }

    return (
      <div className="login-form-container">
      <img
        src={pcsLogo}
        className="login-website-logo-mobile-image"
        alt="website logo"
      />
      <img
        src={pcs}         
        className="login-image"
        alt="website login"
      />
      <div className="form-container">
        <img
          src={pcsLogo}
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
        <div className="input-container">
      <label className="input-label" htmlFor="username">
          PCS Email
        </label>
        <input
          type="text"
          name="email"
          className="username-input-field"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        </div>
        <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          name="password"
          className="password-input-field"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        </div>
        <button  className="login-button" onClick={login}>
            Login
        </button>
        <div>or</div>
        <button  className="login-button" onClick={() => history.push("/register") }>
            Register
        </button>
      </div>
    </div>
    )
}

export default Login