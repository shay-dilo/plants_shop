import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import MenuIcon from '@mui/icons-material/Menu';
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import plants from './icon/plants.png'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
// import HomeIcon from '@mui/icons-material/Home';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product" onClick={() => setMenu(!menu)}>Create Product</Link></li>
                <li><Link to="/category" onClick={() => setMenu(!menu)}>Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history" onClick={() => setMenu(!menu)}>History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <img src={plants} alt="Avatar Logo" style={{ width: '40px' }} class="rounded-pill" />

            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="36"  color="white" />
            </div>

            <div className="logo">
                <h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}} to="/">{isAdmin ? 'Admin' : "Shay's Plants Shop"}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/" onClick={() => setMenu(!menu)}>{isAdmin ? 'Home' : 'Home'}</Link></li>
                <li><Link to="/products" onClick={() => setMenu(!menu)}>{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login" onClick={() => setMenu(!menu)}>Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="40"  className="menu" />
                </li>

            </ul>

            {
                isAdmin ? ''
                    : <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt="" width="30" />
                        </Link>
                    </div>
            }

        </header>
    )
}

export default Header
