import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <motion.div
                    className="footer-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="footer-logo">A1</div>
                    <div className="footer-links">
                        <a href="#">Москва</a>
                        <a href="#">Партнеры</a>
                        <a href="#">Вакансии</a>
                        <a href="#">Контакты</a>
                        <a href="#">Кодекс А1</a>
                    </div>
                </motion.div>

                <motion.div
                    className="footer-right"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="footer-cta">СВЯЖИТЕСЬ С НАМИ</h2>
                    <div className="contact-info">
                        <p className="phone">+ 7 495 777 55 22</p>
                        <p className="address">Ул. Трубная 2, Москва</p>
                        <motion.a
                            href="#"
                            className="telegram-icon"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Send size={24} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2024 А1 Investment Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
