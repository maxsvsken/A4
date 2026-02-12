import React from 'react';
import { motion } from 'framer-motion';
import { Plus, X, ArrowRight, Star } from 'lucide-react';
import './TodaySection.css';

const TodaySection = () => {
    const cards = [
        {
            icon: <Plus size={50} />,
            subtitle: "Профиль",
            title: "Для кого мы работаем",
            color: "card-blue"
        },
        {
            icon: <X size={50} />,
            subtitle: "Ситуации",
            title: "В каких ситуациях к нам обращаются",
            color: "card-light-blue"
        },
        {
            icon: <ArrowRight size={50} />,
            subtitle: "Методы",
            title: "Как мы работаем",
            color: "card-grey"
        },
        {
            icon: <Star size={50} />,
            subtitle: "Принципы",
            title: "Поддерживающие тезисы",
            color: "card-green"
        }
    ];

    return (
        <section id="today" className="today-section">
            <div className="container">
                <motion.h2
                    className="section-title mb-large"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    А1 СЕГОДНЯ
                </motion.h2>

                <div className="today-grid">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`today-card ${card.color}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -15,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="card-icon">
                                {card.icon}
                            </div>
                            <div className="card-content">
                                <span className="card-subtitle">{card.subtitle}</span>
                                <h3>{card.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="city-strip"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="strip-overlay"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default TodaySection;
