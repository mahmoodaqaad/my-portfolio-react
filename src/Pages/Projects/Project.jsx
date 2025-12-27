import React, { useState } from 'react'
import './project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { ProjectData } from '../../Data/Project'
import { motion, AnimatePresence } from 'framer-motion'

const Project = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState('all')
    const [showAll, setShowAll] = useState(false)
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'react', label: 'React' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'html', label: 'HTML/CSS/JS' }
    ]

    const filteredProjects = ProjectData.filter(project =>
        filter === 'all' || project.category === filter
    )

    return (
        <section className='projects-section' id='projects'>
            <div className='container'>
                <div className='main-heading'>
                    <h1>My <span className='text-gradient'>Projects</span></h1>
                </div>

                <div className='filter-container mb-5'>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.label} {" "} ({category.id == "all" ? (ProjectData.length) :
                                ProjectData.filter(project =>
                                    project.category === category.id
                                ).length
                            })
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="row g-4"
                >
                    <AnimatePresence mode='popLayout'>
                        {
                            filteredProjects.slice(0, showAll ? filteredProjects.length - 1 : 9).map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="col-12 col-md-6 col-lg-4"
                                >
                                    <div className="project-card" onClick={() => navigate(`/project/${project.id}`)}>
                                        <div className="project-img-box">
                                            <img src={project.img} alt={project.name} />
                                            <div className="project-overlay">
                                                <div className="overlay-content">
                                                    <span className="view-details">View Details <FontAwesomeIcon icon={faArrowRight} /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-info">
                                            <div className="project-type-tag">{project.type.toUpperCase()}</div>
                                            <h3 className="project-name">{project.name}</h3>
                                            <p className="project-short-desc">{project.contact}</p>
                                            <div className="project-tech-stack">
                                                {project.technologies?.slice(0, 3).map((tech, i) => (
                                                    <span key={i} className="tech-tag">{tech}</span>
                                                ))}
                                                {project.technologies?.length > 3 && <span className="tech-tag">+{project.technologies.length - 3}</span>}
                                            </div>
                                            <div className="project-actions mt-3">
                                                <Link
                                                    to={project.link}
                                                    className="btn-link"
                                                    target="_blank"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))



                        }{

                            !showAll && filteredProjects.length > 9 ? <button className='btn btn-primary w-fit mx-auto px-5 ' onClick={() => { setShowAll(true) }}>show All</button>
                                : ""
                        }


                    </AnimatePresence>
                </motion.div>
            </div>
        </section >
    )
}

export default Project
