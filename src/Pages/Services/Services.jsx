import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ServiceData } from '../../Data/Services';
import './Services.css';

const ServiceCard = memo(({ service, variants }) => (
    <motion.div 
        className="service-card"
        variants={variants}
        whileHover="hover"
    >
        <div className="service-icon-wrapper">
            <div className="service-icon">{service.icon}</div>
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.description}</p>
        <ul className="service-features">
            {service.features.map((feature, index) => (
                <li key={index}>
                    <span className="feature-dot"></span>
                    {feature}
                </li>
            ))}
        </ul>
        <div className="service-card-glow"></div>
    </motion.div>
));

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        y: -12,
        rotateX: 5,
        rotateY: -5,
        scale: 1.03,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const Services = () => {
    return (
        <section className="services-section" id="services" style={{ perspective: "1000px" }}>
            <div className="container">
                <div className="main-heading">
                    <h1>My <span className="text-gradient">Services</span></h1>
                    <p className="section-subtitle">Professional solutions for modern web challenges</p>
                </div>

                <motion.div 
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {ServiceData.map((service) => (
                        <ServiceCard 
                            key={service.id}
                            service={service}
                            variants={cardVariants}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default memo(Services);
