import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/products'>Products</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/friends'>Friends</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/posts'>Post</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/about'>About</NavLink>

                {/* <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/posts'>Post</Link>
                <Link to='/about'>About</Link> */}
            </nav>
            <p>Common Header</p>

        </div>
    );
};

export default Header;