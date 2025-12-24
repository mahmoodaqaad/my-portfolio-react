import React, { useEffect, useState } from 'react';
import './Contact.css';
import { Scroll } from '../../Components/Scroll';
import emailjs from '@emailjs/browser';
export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const serviceId = "service_tct3fqk";
    const templateId = "template_lbrccwt";
    const publicKey = "5-9wy64nw-N2xAsnX";
    const templateForm = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(serviceId, templateId, templateForm, publicKey)
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Send ! ');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('not send ,error ❌');
                }
            ).finally(
                () => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                }

            )

    };

    useEffect(() => {
        // إعداد ScrollReveal للتأثيرات
        Scroll();
    }, []);

    return (
        <section name="contact">
            <div className='main-heading top'>
                <h1>Contact <span className='main-color'>Me</span></h1>
            </div>
            <form onSubmit={sendEmail}>
                <div className='row g-4 justify-content-between'>
                    <div className='inputGroup col-12 col-md-6 left'>
                        <input required name='name' value={formData.name} type="text" onChange={handleChange} placeholder='Full Name' />
                    </div>
                    <div className='inputGroup col-12 col-md-6 left'>
                        <input required name='phone' value={formData.phone} type="text" onChange={handleChange} placeholder='Mobile Number' />
                    </div>
                    <div className='inputGroup col-12 bottom'>
                        <input required name='email' value={formData.email} type="email" onChange={handleChange} placeholder='Email' />
                    </div>
                    <div className='inputGroup col-12 bottom'>
                        <textarea onChange={handleChange} placeholder='Your Message' name='message' value={formData.message} />
                    </div>
                    <button type="submit" className='btn btn-main mx-auto px-5 py-2 bottom'>Send Message</button>
                </div>
            </form>
        </section>
    );
}

export default ContactUs;
