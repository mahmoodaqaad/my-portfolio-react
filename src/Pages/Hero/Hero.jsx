import React, { useEffect, useRef } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        // Setup typing effect
        const typed = new Typed(typedElement.current, {
            strings: ['Front-End Developer', 'React Developer', 'Next.js Developer', 'FullStack Developer'],
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 2000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className='hero-section' id='home'>
            <div className='hero-gradient'></div>
            <div className='container'>
                <motion.div
                    className='row flex-wrap justify-content-between align-items-center hero text-center pt-5 pt-lg-0'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className='left info col-12 col-lg-6 text-lg-start'>
                        <motion.div variants={itemVariants}>
                            <span className='greeting'>👋 Hello, I'm</span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className='hero-title'>
                            Mahmood Al-Aqaad
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className='hero-subtitle'>
                            <span ref={typedElement} className="typed-text"></span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className='hero-description'>
                            I craft beautiful, responsive, and user-centric web experiences using modern technologies.
                            Specializing in React, Next.js, and cutting-edge frontend development.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className='mt-4 d-flex align-items-center gap-3 social-links justify-content-center justify-content-lg-start'
                        >
                            <Link target='_blank' to="https://www.facebook.com/profile.php?id=100022618519064" className='social-icon'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                            <Link target='_blank' to="https://www.instagram.com/dev._mahmood/" className='social-icon'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link target='_blank' to="https://wa.me/+970599923041" className='social-icon'>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </Link>
                            <Link target='_blank' to="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%AF-528463291/" className='social-icon'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                            <Link target='_blank' to="https://github.com/mahmoodaqaad" className='social-icon'>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className='mt-4 d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap'>
                            <Link target='_blank' to="https://drive.google.com/file/d/1mm9b3uDuRoCVKqJOsqzxie5b0n8XkriC/view?usp=sharing" className='btn btn-primary'>
                                Download CV
                            </Link>
                            <ScrollLink to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className='btn btn-outline'>
                                Let's Talk
                            </ScrollLink>
                        </motion.div>
                    </div>

                    <motion.div
                        className='right img-box col-12 col-lg-6 mt-5 mt-lg-0'
                        variants={itemVariants}
                    >
                        <div className='profile-image-wrapper'>
                            <img src={require("../../IMG/PEC-2.png")} alt="Mahmood Al-Aqaad" />
                            <div className='image-backdrop'></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
