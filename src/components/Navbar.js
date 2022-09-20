import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' >
        <div>
          <NavLink className='links' to="/" style={{fontSize:"18px",fontWeight:"bold"}}>Wee<span style={{color:
"#5CE1E6"}}>Bank</span></NavLink>
        </div>

        <nav>
            <NavLink className='links' to="/login">Log in </NavLink>
            <NavLink className='links' to="/signup">Create Account</NavLink>
        </nav>
    </div>
  )
}

export default Navbar