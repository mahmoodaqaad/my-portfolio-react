import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import './Skills.css'
import { Scroll } from '../../Components/Scroll';

const Skills = () => {
    useEffect(() => {
        Scroll()
    }, []);

    const skills = [
        { name: 'HTML', progress: '90%', color: '#E44D26' }, 
        { name: 'CSS', progress: '70%', color: '#2965F1' },
        { name: 'JavaScript', progress: '80%', color: '#F7DF1E' },
        { name: 'React', progress: '90%', color: '#61DAFB' }, 
        { name: 'Next.js', progress: '80%', color: '#000000' },
        { name: 'Bootstrap', progress: '75%', color: '#563D7C' },
        { name: 'TypeScript', progress: '70%', color: '#3178C6' },
        { name: 'Tailwind CSS', progress: '80%', color: '#06B6D4' }, 
        { name: 'Firebase', progress: '85%', color: '#FFCB2B' }, 
    ];

    return (
        <div className='skills py-4 mt-5'>
            <div className='main-heading top'>
                <h1>My <span className='main-color'>Skills</span></h1>
            </div>
            <div className="row">
                {skills.map((skill, index) => (
                    <div key={index} className={`col-12 col-lg-6 mb-5 ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="progress-item">
                            <p>{skill.name}</p>
                            <div className="progress-item-bar">
                                <span data-width={skill.progress} style={{ width: skill.progress, "--color-i": skill.color }}></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
