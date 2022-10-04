import { Routes, Route } from 'react-router-dom'

import { AddDish } from '../pages/AddDish'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { OrderAdm } from '../pages/OrderAdm'
import { OrderList } from '../pages/OrderList'
import { Payment } from '../pages/Payment'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddDish/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/orderadm' element={<OrderAdm/>}/>
            <Route path='/orders' element={<OrderList/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
    )
}