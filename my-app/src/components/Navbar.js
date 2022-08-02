import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookReader } from "react-icons/fa";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Searchbar from './Searchbar';
import FAQ from './pages/FAQJ/FAQ';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };


    useEffect(() => {
        showButton();

    }, [])

    window.addEventListener('resize', showButton);



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick=
                            {closeMobileMenu}>
                            <FaBookReader className='navbar-icon' />
                            PrimeEdu
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/main' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Quiz Maths
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/engquiz' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Quiz English
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/ebooks' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    EBooks
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/eduvids' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Educational Videos
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/printables' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Printables
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/chatbot' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Chat Bot
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/FAQ' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    FAQ
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/FormJA' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Make a Suggestion
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/form' className='nav-links' onClick=
                                    {closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-in' className='btn-link' >
                                        <Button buttonStyle='btn--outline'>Sign In</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-in' className='btn-link' onClick=
                                        {closeMobileMenu}>
                                        <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                        >Sign In</Button>
                                    </Link>
                                )}
                            </li>
                            {/* <li>
                                <Searchbar/>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
