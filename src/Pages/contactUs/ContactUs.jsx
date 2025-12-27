import React, { useState } from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram, faFacebookF, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className='contact-section' id='contact'>
            <div className='container'>
                <div className='main-heading'>
                    <h1>Get In <span className='text-gradient'>Touch</span></h1>
                </div>

                <div className='contact-wrapper mt-5'>
                    <div className='row g-5'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='col-lg-5'
                        >
                            <div className='contact-info h-100'>
                                <h2 className='h3 fw-bold mb-4'>Let's discuss your project</h2>
                                <p className='text-secondary mb-5'>
                                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>

                                <div className='info-items'>
                                    <div className='info-item d-flex align-items-center gap-4 mb-4'>
                                        <div className='info-icon'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div>
                                            <h4 className='h6 m-0 text-secondary'>Email Me</h4>
                                            <p className='m-0 fw-bold'>mahmmodaqaad@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className='info-item d-flex align-items-center gap-4 mb-4'>
                                        <div className='info-icon'>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div>
                                            <h4 className='h6 m-0 text-secondary'>Location</h4>
                                            <p className='m-0 fw-bold'>Gaza, Palestine</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='social-connect mt-5'>
                                    <h4 className='h6 text-secondary mb-3'>Connect with me</h4>
                                    <div className='d-flex gap-3'>
                                        <Link target='_blank' to="https://www.facebook.com/profile.php?id=100022618519064" className='social-link'>
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </Link>
                                        <Link target='_blank' to="https://www.instagram.com/dev._mahmood/" className='social-link'>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                        <Link target='_blank' to="https://wa.me/+970599923041" className='social-link'>
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                        </Link>
                                        <Link target='_blank' to="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%AF-528463291/" className='social-link'>
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </Link>
                                        <Link target='_blank' to="https://github.com/mahmoodaqaad" className='social-link'>
                                            <FontAwesomeIcon icon={faGithub} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='col-lg-7'
                        >
                            <form className='contact-form card p-4 shadow-sm' onSubmit={handleSubmit}>
                                <div className='row g-3'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>Your Name</label>
                                            <input
                                                type='text'
                                                name='name'
                                                className='form-control'
                                                placeholder='John Doe'
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>Your Email</label>
                                            <input
                                                type='email'
                                                name='email'
                                                className='form-control'
                                                placeholder='john@example.com'
                                                required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>Message</label>
                                            <textarea
                                                name='message'
                                                className='form-control'
                                                rows='5'
                                                placeholder='Tell me about your project...'
                                                required
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='col-12 mt-4'>
                                        <button type='submit' className='btn btn-primary w-100'>
                                            Send Message <FontAwesomeIcon icon={faPaperPlane} className='ms-2' />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
