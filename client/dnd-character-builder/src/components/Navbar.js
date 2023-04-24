import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    const { logout } = props
    return(
        <div className='navbar'>
            <Link to="/profile">Profile</Link>
            <h1>DnD Character Creator</h1>
            <button onClick={logout} className='navbtn'>Logout</button>
        </div>
    )
}