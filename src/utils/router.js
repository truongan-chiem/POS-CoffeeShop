import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Order from '../pages/Order/Order'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Setting from '../pages/Setting/Setting'
import History from '../pages/History/History'
import NotSupport from '../pages/NotSupport'
const router = () => {
  return (
    <Routes>
        <Route exact path='/'   element = {<Home />}       />
        <Route path='/menu'     element = {<Menu />}       />
        <Route path='/order'    element = {<Order />}      />
        <Route path='/history'  element = {<History />}    />
        <Route path='/setting'  element = {<Setting />}    />
        <Route path='*'         element = {<NotSupport />} />
    </Routes>
  )
}

export default router