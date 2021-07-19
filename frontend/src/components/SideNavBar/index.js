import { useState } from 'react'
import SideNav from 'react-simple-sidenav';
import pcsLogo from '../Images/pcs_logo.png'
import { Link } from 'react-router-dom';
import './index.css'

const SideNavBar = () => {
    const [showNav, setShowNav] = useState(
        {
            showNav:false
        }
    );
    const navItems = [
        <Link to='/home/dashboard'>
            <p target="_blank" href="someLink">
                Dashboard
            </p>
        </Link>
        ,
        <p target="_blank" href="someLink">
          LeaveRequest
        </p>,
        <p target="_blank" href="someLink">
          Profile
        </p>,
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