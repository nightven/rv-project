import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <header>
      <nav>
        <NavLink to="/rv-project/">Home</NavLink>
        <NavLink to="/rv-project/register">Register</NavLink>
        <NavLink to="/rv-project/login">Login</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
}

export default Layout