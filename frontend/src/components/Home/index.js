import {Component} from 'react'

import Dashboard from '../Dashboard'
import ContactSection from '../ContactSection'
import HomeSection from '../HomeSection'
import NavBar from '../NavBar'
import Header from "../Header"
import './index.css'
import LeaveRequest from '../LeaveRequest'
import Footer from '../Footer'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'Dashboard',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'Employes',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'Leave Request',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]
class Home extends Component {
  state = {
    activeNavBarItem: navBarItems[0].name,
  }

  renderComponent = () => {
    const {activeNavBarItem} = this.state

    switch (activeNavBarItem) {
      case navBarItems[1].name:
        return <LeaveRequest />
      case navBarItems[2].name:
        return <LeaveRequest />
      case navBarItems[3].name:
        return <ContactSection />
      default:
        return <Dashboard/>
    }
  }

  changeActiveNavBarItem = activeNavBarItem => {
    this.setState({
      activeNavBarItem,
    })
  }

  render() {
    const {activeNavBarItem} = this.state

    return (
    <div className="app-container">
      <div className="head-nav-foot-container">
        <Header/>
        <div className=" portfolio-container">
            <NavBar
            activeNavBarItem={activeNavBarItem}
            changeActiveNavBarItem={this.changeActiveNavBarItem}
            navBarItems={navBarItems}
            />
            <div className="portfolio-body">
                <div className="active-section">{this.renderComponent()}</div>
            </div>
        </div>
        <Footer/>
        
        
    </div>
      </div>
    )
  }
}

export default Home
