import React from 'react'
import Hero from "../Hero/Hero"
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Projects/Project'
import ContactUs from '../contactUs/ContactUs'
const Main = () => {
    return (
        <div className='container mt-4'>
            <Hero />
            <About />
            <Skills />
            <Project />
            <ContactUs />
        </div>
    )
}

export default Main
