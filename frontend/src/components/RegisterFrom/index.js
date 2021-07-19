import React, {useState} from "react"
import pcs from '../Images/pcs.png'
import { useHistory } from "react-router-dom"
import pcsLogo from '../Images/pcs_logo.png'
import axios from "axios"
import './index.css'

const Register = () => {
    const history = useHistory()
    const [ user, setUser] = useState({
        name :"",
        email:"",
        password:"",
        reEnterPassword:""
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        
        setUser({
            ...user,
            [name]: value
        })
    }

    const register =() => {
        console.log("register Successfully")
        const {name, email , password,reEnterPassword} = user

        if (name && email && password && (password===reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        }else{
            alert("Invalid Input")
        }
        
    }

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
        <input
          type="text"
          name="name"
          className="username-input-field"
          value={user.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        </div>
        <div className="input-container">
        <input
          type="text"
          name="email"
          className="username-input-field"
          value={user.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        </div>
        <div className="input-container">
        <input
          type="password"
          name="password"
          className="password-input-field"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        </div>
        <div className="input-container">
        <input
          type="password"
          name="reEnterPassword"
          className="password-input-field"
          value={user.reEnterPassword}
          onChange={handleChange}
          placeholder="Re-enter Password"
        />
        </div>
        <button  className="login-button" onClick={register}>
            Register
          </button>
          <div>or</div>
          <button  className="login-button" onClick={() => history.push("/login")}>
            Login
        </button>

      </div>
    </div>
    )
}

export default Register