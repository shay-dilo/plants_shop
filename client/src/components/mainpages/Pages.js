import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import { GlobalState } from '../../GlobalState'
import Home from '../Home/Home.js'

import ContactUs from './ContactUs/ContactUs'
import { AboutUs2 } from '../../AboutUs2'
import PaypalPayment from './PaypalPayment/PaypalPayment'
import OrderContinue from './OrderContinue/OrderContinue'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/AboutUs" exact component={AboutUs2} />
            <Route path="/ContactUs" exact component={ContactUs} />
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            
            {/* <ProtectedRoute path="/category" exact component={Categories} />
            <ProtectedRoute path="/create_product" exact component={CreateProduct} />
            <ProtectedRoute path="/edit_product/:id" exact component={CreateProduct} /> */}

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact componexnt={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />
            <Route path="/OrderContinue" exact component={OrderContinue} />
            <Route path="/PaypalPayment" exact component={PaypalPayment} />

            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

const ProtectedRoute = (props) => {
    const state = useContext(GlobalState)
    return state.userAPI.isAdmin
        ? <Route {...props} />
        : <NotFound/>
}

export default Pages
