import React from 'react'
import {Link} from 'react-router-dom'
import plantIMG from '../assets/plant.png'
const Navbar = () => {
    const isLoggedIn = localStorage.getItem('token')
    return (
        <div className='navbar'>
            <nav>
            <div className="left-links">
            {/* Sets icon placeholder to a home link */}
            <Link to='/'>Home</Link>
            {/* Whenever the user is logged in display the logout button, but when the user is logged out display the login button  */}
            {
                isLoggedIn ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>
            }
            {/* When the user is logged in display the plants link, but when the user is not logged in do not display plant */}
            {
                isLoggedIn ? <Link to='/plants'>Plants</Link> : ''
            }
            {/* If logged in the signup button disappears */}
            {
                isLoggedIn ? '' : <Link to='/register'>Sign Up</Link>
            }
            </div>
            {/* These are the right side navbar links */}
            <div className='right-links'>
            {/* Link to the home page */}
            <Link to='/'><img src={plantIMG} alt="plant icon"/></Link>

            </div>
            </nav>
        </div>
    )
}

export default Navbar
