import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../const';
const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 py-4  mb-4 border-bottom container">

            <Link to={'/'}>
                <img src={logo} width={130} alt="" />
            </Link>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/login'}>
                    Login
                </Link>
                
            </nav>

        </div>
    );
}

export default Navbar;

