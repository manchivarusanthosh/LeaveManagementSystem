import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Cookies from 'js-cookie'

import { useHistory } from "react-router-dom"
import './index.css'

const Home = () =>{
    // const history = useHistory()
    // const jwtToken = Cookies.get("jwt_token")
    // if (jwtToken===undefined){
    //     return <Redirect to="/login"/>
    // }

    return(
            <div>
                <Header />
                <Footer />
            </div>
        )
}

export default Home