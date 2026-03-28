import React, { useRef, useState } from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faFacebookF, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const formRef = useRef();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    reply_to: formData.email,
                },
                publicKey
            )
            setSubmitStatus('success')
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
            if (formRef.current) formRef.current.reset()
            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            console.error('EmailJS Error:', error)
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus(null), 5000)
        } finally {
            setIsSubmitting(false)
        }
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
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div>
                                            <h4 className='h6 m-0 text-secondary'>Phone</h4>
                                            <p className='m-0 fw-bold'>+970 599 923 041</p>
                                        </div>
                                    </div>

                                    <div className='info-item d-flex align-items-center gap-4 mb-4'>
                                        <div className='info-icon'>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div>
                                            <h4 className='h6 m-0 text-secondary'>Location / Address</h4>
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
                                        <Link target='_blank' to="https://www.linkedin.com/in/mahmood-aqaad-989b25334" className='social-link'>
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
                            <form className='contact-form card p-4 shadow-sm' onSubmit={handleSubmit} ref={formRef}>
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
                                                value={formData.name}
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
                                                value={formData.email}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>Phone Number</label>
                                            <input
                                                type='tel'
                                                name='phone'
                                                className='form-control'
                                                placeholder='+1 234 567 890'
                                                onChange={handleChange}
                                                value={formData.phone}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label className='form-label'>Subject</label>
                                            <input
                                                type='text'
                                                name='subject'
                                                className='form-control'
                                                placeholder='Project Discussion'
                                                required
                                                onChange={handleChange}
                                                value={formData.subject}
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
                                                value={formData.message}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='col-12 mt-4'>
                                        {submitStatus === 'success' && (
                                            <div className="alert alert-success border-0 shadow-sm mb-3">
                                                Message sent successfully! I will get back to you soon.
                                            </div>
                                        )}
                                        {submitStatus === 'error' && (
                                            <div className="alert alert-danger border-0 shadow-sm mb-3">
                                                Oops! Something went wrong. Please try again later.
                                            </div>
                                        )}
                                        <button
                                            type='submit'
                                            className='btn btn-primary w-100'
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>Sending... <span className="spinner-border spinner-border-sm ms-2"></span></>
                                            ) : (
                                                <>Send Message <FontAwesomeIcon icon={faPaperPlane} className='ms-2' /></>
                                            )}
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
