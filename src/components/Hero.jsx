import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const title = "ИНВЕСТИЦИОННАЯ КОМПАНИЯ";
    const subtitle = "СПЕЦИАЛЬНОГО НАЗНАЧЕНИЯ";

    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        ОФИЦИАЛЬНОЕ ПОЗИЦИОНИРОВАНИЕ
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split('').map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                        <br />
                        {subtitle.split('').map((char, index) => (
                            <motion.span key={index + title.length} variants={letterVariants}>
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.a
                        href="#about"
                        className="btn btn-primary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(58, 134, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        УЗНАТЬ БОЛЬШЕ
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
