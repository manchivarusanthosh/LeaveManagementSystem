import Header from '../Header'
import Footer from '../Footer'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router'

import './index.css'

const LeaveRequest = () => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken===undefined){
        return <Redirect to="/login"/>
    }
    return (
        <div>
            <Header />
            <h1 className="leaverequest-container">LeaveRequest</h1>
            <Footer />
        </div>
    )
}

export default LeaveRequest