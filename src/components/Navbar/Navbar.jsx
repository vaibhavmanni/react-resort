import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Link to='./'>
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className={styles.navLinksContainer}>
                <ul>
                    <li><Link to='./' className={styles.link}>Home</Link></li>
                    <li><Link to='./rooms' className={styles.link}>Rooms</Link></li>
                    <li><Link to='./about-us' className={styles.link}>About Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;