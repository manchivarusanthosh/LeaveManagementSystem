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
    <Route exact path='/home/dashboard' component={Dashboard}/>
    <Route exact path='/leaverequest' component={LeaveRequest}/>
    <Route component={NotFound} />
  </Switch>
  </BrowserRouter>
)

export default App