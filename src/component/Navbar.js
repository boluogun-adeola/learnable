import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo1.png'
import { FiMenu, FiX } from 'react-icons/fi';

import './navbar.css'

const Navbar = () =>{
    const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};
    return(
        <nav className="navbar">
           
           <Link to = "/" className="nav-logo">
                <img src={Logo} alt="Genesys Tech Logo"/>
           </Link>
           <div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
           <ul className={open ?'nav-links active':'nav-links'}>
               <li className="nav-item">
                <Link to = "/" className="nav-link" onClick={closeMenu}>
                    HOME
                </Link>
               </li>
               <li className="nav-item">
                <Link to = "/developer" className="nav-link" onClick={closeMenu}>
                    SOFTWARE DEVELOPERS
                </Link>
               </li>
               <li className="nav-item">
                <Link to = "/designer" className="nav-link" onClick={closeMenu}>
                    PRODUCT DESIGNERS
                </Link>
               </li>
               <li className="nav-item">
                <Link to = "/apply" className="nav-link" onClick={closeMenu}>
                        APPLY
                </Link>
               </li>
               <li className="nav-item">
                <Link to = "/journal" className="nav-link" onClick={closeMenu}>
                        JOURNAL
                </Link>
               </li>
           </ul>

        </nav>
    )
}

export default Navbar;