import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Order from '../pages/Order/Order'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Setting from '../pages/Setting/Setting'
import History from '../pages/History/History'
import Profile from '../pages/Profile/Profile'
import NotSupport from '../pages/NotSupport'
import Layout from '../components/Layout/Layout'
import Login from '../pages/Login/Login'
const router = () => {
  return (
    <Routes>
        <Route path='/login'   element = {<Login />}/>

        <Route exact path='/'   element = {<Layout>   <Home />        </Layout>}/>
        <Route path='/menu'     element = {<Layout>   <Menu />        </Layout>}/>
        <Route path='/order'    element = {<Layout>   <Order />       </Layout>}/>
        <Route path='/history'  element = {<Layout>   <History />     </Layout>}/>
        <Route path='/setting'  element = {<Layout>   <Setting />     </Layout>}/>
        <Route path='/profile'  element = {<Layout>   <Profile />     </Layout>}/>
        <Route path='*'         element = {<Layout>   <NotSupport />  </Layout>}/>
    </Routes>
  )
}

export default router