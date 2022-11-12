import React from 'react'
import { Routes,Route } from 'react-router-dom'
import History from '../pages/History/History'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'
import Promos from '../pages/Promos/Promos'
import Setting from '../pages/Setting/Setting'
import Wallet from '../pages/Wallet/Wallet'
const router = () => {
  return (
    <Routes>
        <Route exact path='/'   element = {<Home />} />
        <Route path='/menu'     element = {<Menu />} />
        <Route path='/history'  element = {<History />} />
        <Route path='/wallet'   element = {<Wallet />} />
        <Route path='/promos'   element = {<Promos />} />
        <Route path='/setting'  element = {<Setting />} />
    </Routes>
  )
}

export default router