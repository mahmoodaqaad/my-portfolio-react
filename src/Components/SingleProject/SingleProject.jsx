import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ProjectData } from '../../Data/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faExternalLinkAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import './SingleProject.css'

const SingleProject = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const foundProject = ProjectData.find(p => p.id === id)
        if (foundProject) {
            setProject(foundProject)
        } else {
            navigate('/')
        }
    }, [id, navigate])

    if (!project) return null

    return (
        <div className='single-project-page'>
            <div className='container py-5'>
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='back-btn mb-4'
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
                </motion.button>

                <div className='project-hero'>
                    <div className='row align-items-center g-5'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='col-lg-7'
                        >
                            <div className='project-main-img shadow-lg'>
                                <img src={project.img} alt={project.name} className='img-fluid rounded-4' />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className='col-lg-5'
                        >
                            <div className='project-header-info'>
                                <span className='category-badge'>{project.type.toUpperCase()}</span>
                                <h1 className='display-4 fw-bold mt-2'>{project.name}</h1>
                                <p className='lead text-secondary mt-3'>
                                    {project.contact}
                                </p>

                                <div className='d-flex gap-3 mt-4'>
                                    <Link to={project.link} target='_blank' className='btn btn-primary px-4'>
                                        Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} className='ms-2' />
                                    </Link>
                                    <Link to={project.github || '#'} target='_blank' className='btn btn-outline px-4'>
                                        Source Code <FontAwesomeIcon icon={faGithub} className='ms-2' />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className='project-details-content mt-5 pt-5'>
                    <div className='row g-5'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='col-lg-8'
                        >
                            <h2 className='h3 fw-bold mb-4'>Project Overview</h2>
                            <p className='text-secondary fs-5'>
                                {project.fullDescription}
                            </p>

                            <h2 className='h3 fw-bold mt-5 mb-4'>Key Features</h2>
                            <div className='features-list'>
                                {project.features?.map((feature, index) => (
                                    <div key={index} className='feature-item d-flex align-items-center gap-3 mb-3'>
                                        <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />
                                        <span className='text-secondary fs-5'>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className='col-lg-4'
                        >
                            <div className='tech-specs card p-4'>
                                <h3 className='h5 fw-bold mb-4 text-secondary'>Technologies Used</h3>
                                <div className='d-flex flex-wrap gap-2'>
                                    {project.technologies?.map((tech, index) => (
                                        <span key={index} className='tech-pill'>{tech}</span>
                                    ))}
                                </div>

                                <div className='project-meta mt-5'>
                                    <div className='meta-item d-flex justify-content-between py-2 border-bottom border-secondary'>
                                        <span className='fw-bold text-secondary'>Category</span>
                                        <span className='text-primary'>{project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}</span>
                                    </div>
                                    <div className='meta-item d-flex justify-content-between py-2 border-bottom border-secondary'>
                                        <span className='fw-bold text-secondary'>Responsive</span>
                                        <span className='text-primary'>{project.responsive ? 'Yes' : 'No'}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
