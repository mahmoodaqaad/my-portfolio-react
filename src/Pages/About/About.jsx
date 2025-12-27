import React, { useEffect } from 'react'
import './about.css'
import { motion } from 'framer-motion';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const stats = [
        { number: '20+', label: 'Projects Completed' },
        { number: '1+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' }
    ];

    return (
        <section className='about-section' id='about'>
            <div className='container'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className='main-heading'>
                        <h1>About <span className='text-gradient'>Me</span></h1>
                    </div>

                    <div className='about-content'>
                        <div className='row align-items-center g-4'>
                            <motion.div variants={itemVariants} className="col-12 col-lg-4 text-center">
                                <div className="about-image-wrapper">
                                    <img src={require("../../IMG/aproto12-rmback-removebg.png")} alt="Mahmood Al-Aqad" />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="col-12 col-lg-8">
                                <div className="about-text">
                                    <h2 className='about-subtitle'>Passionate Front-End Developer</h2>
                                    <p>
                                        Hello! I'm <strong>Mahmood Al-Aqad</strong>, a dedicated front-end developer with a passion for creating
                                        seamless and engaging web experiences. I specialize in building modern, responsive applications
                                        using cutting-edge technologies like <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>.
                                    </p>
                                    <p>
                                        My journey in web development has equipped me with a strong foundation in both fundamental
                                        technologies (HTML, CSS, JavaScript) and modern frameworks. I take pride in writing clean,
                                        maintainable code and staying current with industry best practices.
                                    </p>
                                    <p>
                                        Beyond coding, I'm committed to continuous learning and growth. I believe in the power of
                                        collaboration and am always excited to work on projects that challenge me to push the
                                        boundaries of what's possible on the web.
                                    </p>

                                    <div className='stats-grid'>
                                        {stats.map((stat, index) => (
                                            <div key={index} className='stat-item'>
                                                <h3 className='stat-number'>{stat.number}</h3>
                                                <p className='stat-label'>{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
