import Cookies from 'js-cookie'
import { useHistory, Link } from "react-router-dom"
import pcsLogo from '../Images/pcs_logo.png'
import './index.css'

const Header = () => {
    const history = useHistory()

    const logout = () =>{
        Cookies.remove("jwt_token")
        history.replace("/login")
    }
    return (
        <nav className="nav-header">
            <div className="nav-content">
                <div className="nav-bar-mobile-logo-container">
                    <img
                        className="website-logo"
                        src={pcsLogo}
                        alt="website logo"
                    />

                <button type="button" className="nav-mobile-btn" onClick={logout}>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                    alt="nav logout"
                    className="nav-bar-image"
                />
                </button>
            </div>

            <div className="nav-content nav-bar-large-container display-flex">
                <img
                    className="website-logo"
                    src={pcsLogo}
                    alt="website logo"
                />
                <ul className="nav-menu">
                    <Link className="nav-menu-item" to="/home/dashboard">
                        <li >Dashboard</li>
                    </Link>
                    <Link className="nav-menu-item" to='/leaverequest'>
                        <li >Leave Request</li>
                    </Link>

                    <li className="nav-menu-item">Coming soon...</li>
                </ul>
                <button type="button" className="logout-desktop-btn" onClick={logout}>
                    Logout
                </button>
            </div>
            </div>
            <div className="nav-menu-mobile">
            <ul className="nav-menu-list-mobile">
                <li className="nav-menu-item-mobile">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                        alt="nav home"
                        className="nav-bar-image"
                    />
                </li>

                <li className="nav-menu-item-mobile">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                        alt="nav products"
                        className="nav-bar-image"
                    />
                </li>

                <li className="nav-menu-item-mobile">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                        alt="nav cart"
                        className="nav-bar-image"
                    />
                </li>
            </ul>
            </div>
        </nav>    
)
            }

export default Header