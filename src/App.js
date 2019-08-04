import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ActivityList from './components/ActivityList';
import SignUp from './components/SignUp';
import ActivityInput from './components/ActivityInput';
import { Breadcrumb } from 'antd';


function App() {

  // const checkAuth = () => {
  //   const token = localStorage.getItem('token');
  //   const refreshToken = localStorage.getItem('refreshToken');
  //   if (!token || !refreshToken) {
  //     return false; 
  //   }
  //   try {
  //     const { exp } = decode(refreshToken)
  //     if (exp < new Date().getTime() / 1000) {
  //       return false
  //     }
  //   } catch (err) {
  //     return false;
  //   }
  //   return true;
  // }

  // const AuthRoute = ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={props => (
  //     checkAuth() ? (
  //       <Component {...props} />
  //     ) : (
  //       <Redirect to={{ pathname: '/login' }} />
  //     )
  //   )} />
  // )

  return ( 
    <div>
      <nav>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/activityinput">Add Activity</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/login">Login</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/register">Register</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/activitylog">Activity Log</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </nav>

      <Route path="/activityinput" component={ActivityInput} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      <Route path="/ActivityList" component={ActivityList} />   
    </div>
  )
}

export default App