import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();

    return (
        <div>
            <NavLink to="/eyesurgeries">
                <div>
                    <img height="65px" width="230px" src={logo} alt="" />
                </div>
            </NavLink>
            <div>
                <nav className="nav-bar">
                    <NavLink to="/eyesurgeries">Eye Surgeries</NavLink>
                    <NavLink to="/blepharoplasty">Blepharoplasty</NavLink>
                    <NavLink to="/retinasurgery">Retina Surgery</NavLink>
                    <NavLink to="/cornealtransplant">Corneal Transplant</NavLink>
                    <NavLink to="/cataractsurgery">Cataract Surgery</NavLink>
                    <NavLink to="/glaucomasurgery">Glaucoma Surgery</NavLink>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <span>{user.displayName}</span>
                    {user?.email && <button onClick={logout}>log out</button>}
                </nav>
            </div>

        </div>
    );
};

export default Header;