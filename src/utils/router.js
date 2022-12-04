import React, { useEffect } from 'react'
import { Routes,Route,Navigate,Outlet, useLocation } from 'react-router-dom'

import Order from '../pages/Order/Order'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Setting from '../pages/Setting/Setting'
import History from '../pages/History/History'
import Profile from '../pages/Profile/Profile'
import NotSupport from '../pages/NotSupport'
import Layout from '../components/Layout/Layout'
import Login from '../pages/Login/Login'

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if(path === '/'){
      document.title = 'Home'
    }
    else{
      const title = path.slice(1)
      document.title = title[0].toUpperCase() + title.substring(1);
    }
  }, [location]);

  return (
    <Routes>
        {/* private router */}
        <Route element = {<PrivateRoute />}>
          <Route exact path='/' element ={<Home />}/>
          <Route  path='/menu' element ={<Menu />}  /> 
          <Route  path='/order' element ={<Order />}  /> 
          <Route  path='/history' element ={<History />}  /> 
          <Route  path='/setting' element ={<Setting  />}  /> 
          <Route  path='/profile' element ={<Profile />}  /> 
          <Route  path='*' element ={<NotSupport />}  /> 
        </Route>

        {/* public router */}
        <Route element = {<PublicRoute />} >
          <Route path='/login'   element = {<Login />}/>
        </Route>

    </Routes>
  )
}

const auth = () =>{
  const userId = localStorage.getItem('user_id')
  return userId ? true : false;
}

const PublicRoute = () => {
  // const isLogin = useSelector(state => state.user.information)
  const isLogin = auth();
  return isLogin ? <Navigate to={'/'} />: <Outlet />
}

const PrivateRoute = () => {
  // const isLogin = useSelector(state => state.user.information)
  const isLogin = auth();
  return(
    <>
    {isLogin ? <Layout> <Outlet /></Layout> : <Navigate to={'/login'}/>}
    </>
  )
}

export default Router