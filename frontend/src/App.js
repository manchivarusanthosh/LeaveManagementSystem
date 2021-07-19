import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LeaveRequest from './components/LeaveRequest'

import './App.css'
import Register from './components/RegisterFrom'

const App = () => (
  <BrowserRouter>
  <Switch>
  <Route exact path="/">
    <Redirect to="/home" />
</Route>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/home" component={Home}/>
<<<<<<< HEAD

    <Route component = {NotFound}/>
=======
    <Route exact path='/home/dashboard' component={Dashboard}/>
    <Route exact path='/leaverequest' component={LeaveRequest}/>
    <Route component={NotFound} />
>>>>>>> e34169c5fdc33c0c35b8eb9aa38964660162c084
  </Switch>
  </BrowserRouter>
)

export default App