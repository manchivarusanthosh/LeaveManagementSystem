import Footer from '../Footer'
import Header from '../Header'
import { Redirect } from 'react-router'
import Cookies from 'js-cookie'
    
import { useHistory } from "react-router-dom"
import './index.css'
import SideNavBar from '../SideNavBar'

const Home = () =>{
    const history = useHistory()
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken===undefined){
        return <Redirect to="/login"/>
    }

    return(
            <div>
                <SideNavBar />
                <Footer />
            </div>
        )
}

export default Home