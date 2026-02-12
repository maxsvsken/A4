import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container nav-container">
                <a href="#" className="logo">
                    <div className="logo-circle">A1</div>
                </a>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#about">Миссия</a></li>
                    <li><a href="#stats">Ценности</a></li>
                    <li><a href="#today">Наши Активы</a></li>
                    <li><a href="#code">Кодекс</a></li>
                    <li><a href="#contact">Контакты</a></li>
                    <li><a href="#" className="lang-switch"><Globe size={20} /></a></li>
                </ul>

                <div className={`burger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
