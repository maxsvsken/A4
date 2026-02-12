import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Legend.css';

const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}%</span>;
};

const Legend = () => {
    return (
        <section id="about" className="legend-section">
            <div className="container">
                <motion.div
                    className="legend-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">ЛЕГЕНДА</h2>
                    <div className="legend-description">
                        <p><strong>A1 — инвестиционная компания специального назначения.</strong><br />
                            Более 30 лет помогает реализовать сложные сделки.<br />
                            Как инвестор и партнер собственного капитала заходит в такие ситуации и активы, где другие не справляются, доводя их до надежного результата. Команда А1 — высококвалифицированные архитекторы устойчивых сделок.</p>
                    </div>
                </motion.div>

                <div className="stats-grid">
                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="stat-number"><AnimatedCounter end={50} /></div>
                        <div className="stat-label">ПРЕДПРИНИМАТЕЛЬСКОЙ<br />ЭНЕРГИИ</div>
                    </motion.div>

                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="stat-number"><AnimatedCounter end={25} /></div>
                        <div className="stat-label">ЮРИДИЧЕСКОЙ<br />СТРОГОСТИ</div>
                    </motion.div>

                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="stat-number"><AnimatedCounter end={25} /></div>
                        <div className="stat-label">СИЛЫ<br />И ВЛИЯТЕЛЬНОСТИ</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Legend;
