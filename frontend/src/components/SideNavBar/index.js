import { useState } from 'react'
import SideNav from 'react-simple-sidenav';
import pcsLogo from '../Images/pcs_logo.png'
import { Link ,useHistory} from 'react-router-dom';
import Cookies from 'js-cookie'
import './index.css'

const SideNavBar = () => {
    const history = useHistory()
    const [showNav, setShowNav] = useState(
        {
            showNav:false
        }
    );

    const logout = () =>{
        Cookies.remove("jwt_token")
        history.replace("/login")
    }

    const navItems = [
        <Link to='/home/dashboard'>
            <p>
                Dashboard
            </p>
        </Link>
        ,
        <p>
          LeaveRequest
        </p>,
        <p>
          Profile
        </p>,
        <p onClick={logout}>Logout</p>
      ];

    return (
        <>
        {/* <MenuIcon onClick={() => setShowNav(true)} />{' '} */}
            <SideNav
                showNav={showNav}
                onHideNav={() => setShowNav(true)}
                title={<div className="dashboard-logo"><img  src={pcsLogo}/></div>}
                items={navItems}
                titleStyle={{ backgroundColor: '#ffffff' }}
                itemStyle={{ listStyleType: "none",backgroundColor: '#fff' }}
                itemHoverStyle={{ backgroundColor: '#0b69ff' }}
            />
    
        </>   
    )

}

export default SideNavBar