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
    return (
        <div>
            <Header />
            <h1 className="dashboard-container">Dashboard</h1>
            <Footer />
        </div>
    )
}

export default Dashboard