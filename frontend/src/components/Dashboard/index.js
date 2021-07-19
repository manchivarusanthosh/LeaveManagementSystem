import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router'


const Dashboard = () => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken===undefined){
        return <Redirect to="/login"/>
    }
    // Dashboard running
    // Dashboard running again
    return (
        <div>
            <Header />
            <div className="dashboard-container">
                <
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard