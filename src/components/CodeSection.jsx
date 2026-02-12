import React from 'react';
import { motion } from 'framer-motion';
import './CodeSection.css';

const CodeSection = () => {
    const rules = [
        {
            number: "01.",
            title: "Закон и прозрачность.",
            desc: "Мы всегда действуем в правовом поле, и с документальным подтверждением."
        },
        {
            number: "02.",
            title: "Уважение к правам сторон.",
            desc: "Мы ценим ясность в отношениях с партнерами и оппонентами."
        },
        {
            number: "03.",
            title: "Конфиденциальность.",
            desc: "Защищаем информацию о наших публичных действиях — только по согласованию сторон."
        },
        {
            number: "04.",
            title: "Интерес против плохих практик.",
            desc: "Избегаем недобросовестных приемов и работаем на повышение общей культуры рынка."
        },
        {
            number: "05.",
            title: "Честный статус владения.",
            desc: "Понимаем бенефициаров, структуру собственности и управленческую модель компании."
        },
        {
            number: "06.",
            title: "Ответственность.",
            desc: "Действуем быстро, но взвешенно, отвечая за результат."
        },
        {
            number: "07.",
            title: "Инвестиции со смыслом.",
            desc: "Ищем не только прибыль, но и позитивные изменения в компании."
        },
        {
            number: "08.",
            title: "Переговоры прежде всего.",
            desc: "Приоритет — переговорное решение, медиация и взаимопонимание, а не эскалация конфликта."
        },
        {
            number: "09.",
            title: "Совпадение интересов.",
            desc: "Конструируем ситуацию так, чтобы выгодно было всем участникам."
        },
        {
            number: "10.",
            title: "Публичная ответственность.",
            desc: "Готовы объяснять наши принципы любому стейкхолдеру и найти альтернативу, где мы не правы."
        }
    ];

    return (
        <section id="code" className="code-section">
            <div className="container">
                <motion.div
                    className="code-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">КОДЕКС А1</h2>
                    <h3 className="code-subtitle">10 публичных правил</h3>
                </motion.div>

                <div className="rules-list">
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            className="rule-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{
                                x: 10,
                                backgroundColor: 'rgba(58, 134, 255, 0.03)',
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="rule-number">{rule.number}</div>
                            <div className="rule-title">{rule.title}</div>
                            <div className="rule-desc">{rule.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodeSection;
