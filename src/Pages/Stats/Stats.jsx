import React, { memo } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const StatItem = memo(({ number, label, subtext, delay }) => (
    <motion.div 
        className="stat-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ 
            y: -10, 
            rotateX: 5, 
            rotateY: 5,
            transition: { duration: 0.3 }
        }}
    >
        <div className="stat-number-wrapper">
            <h2 className="stat-number">{number}</h2>
        </div>
        <h3 className="stat-label">{label}</h3>
        <p className="stat-subtext">{subtext}</p>
        <div className="stat-card-border"></div>
    </motion.div>
));

const Stats = () => {
    const statsData = [
        {
            number: "2+",
            label: "Years Experience",
            subtext: "Professional development in modern web technologies.",
            delay: 0.1
        },
        {
            number: "30+",
            label: "Frontend Pages",
            subtext: "High-conversion landing pages and responsive layouts.",
            delay: 0.2
        },
        {
            number: "4",
            label: "Full Stack Apps",
            subtext: "End-to-end production-ready applications.",
            delay: 0.3
        },
        {
            number: "100+",
            label: "UI Components",
            subtext: "Reusable, accessible, and highly performant components.",
            delay: 0.4
        },
        {
            number: "10+",
            label: "Dashboard Features",
            subtext: "Complex data-driven systems and admin portals.",
            delay: 0.5
        },
        {
            number: "95+",
            label: "Lighthouse Score",
            subtext: "Obsessed with performance and Core Web Vitals.",
            delay: 0.6
        }
    ];

    return (
        <section className="stats-section" id="stats" style={{ perspective: "1000px" }}>
            <div className="container">
                <div className="stats-header text-center mb-5">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-gradient"
                    >
                        By The Numbers
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="section-subtitle"
                    >
                        Measurable impact and technical excellence
                    </motion.p>
                </div>

                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default memo(Stats);
