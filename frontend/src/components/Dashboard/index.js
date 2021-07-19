import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router'
import SideNavBar from '../SideNavBar'


const Dashboard = () => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken===undefined){
        return <Redirect to="/login"/>
    }
    // Dashboard running
    // Dashboard running again
    return (
        <div>
<<<<<<< HEAD
            <Header />
            <div className="dashboard-container">
                <
            </div>
=======
            <SideNavBar />
            <h1 className="dashboard-container">Dashboard</h1>
>>>>>>> e34169c5fdc33c0c35b8eb9aa38964660162c084
            <Footer />
        </div>
    )
}

export default Dashboard