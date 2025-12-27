import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap,
    FaGitAlt, FaFigma, FaNpm
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase,
    SiMysql, SiExpress, SiRedux,
    SiPrisma,
    SiPostgresql
} from 'react-icons/si';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    const skillsData = {
        'Frontend Frameworks': [
            { name: 'React', icon: <FaReact />, color: '#61DAFB' },
            { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
            // { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        ],
        'Languages': [
            { name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' },
            { name: 'CSS3', icon: <FaCss3Alt />, color: '#2965F1' },
            { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        ],
        'Styling & UI': [
            { name: 'Bootstrap', icon: <FaBootstrap />, color: '#563D7C' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        ],
        'Backend & Database': [
            { name: 'Firebase', icon: <SiFirebase />, color: '#FFCB2B' },
            { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#0061FF' },
            { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
            { name: 'Prisma', icon: <SiPrisma />, color: '#3B5998' },
        ],
        'Tools & Others': [
            { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
            // { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
            { name: 'npm', icon: <FaNpm />, color: '#CB3837' },
        ]
    };

    return (
        <section className='skills-section' id='skills'>
            <div className='container'>
                <div className='main-heading'>
                    <h1>My <span className='text-gradient'>Skills</span></h1>
                </div>

                <motion.div
                    className='skills-container'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <div key={categoryIndex} className='skills-category'>
                            <h3 className='category-title'>{category}</h3>
                            <div className='skills-grid'>
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className='skill-card'
                                        whileHover={{ y: -8, scale: 1.05 }}
                                    >
                                        <div className='skill-icon' style={{ color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        <p className='skill-name'>{skill.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
