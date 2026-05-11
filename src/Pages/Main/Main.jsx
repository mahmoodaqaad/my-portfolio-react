import React, { Suspense, lazy } from 'react'
import Hero from "../Hero/Hero"
import About from '../About/About'

// Lazy load sections below the fold
const Services = lazy(() => import('../Services/Services'));
const Stats = lazy(() => import('../Stats/Stats'));
const Skills = lazy(() => import('../Skills/Skills'));
const Project = lazy(() => import('../Projects/Project'));
const ContactUs = lazy(() => import('../contactUs/ContactUs'));

const SectionLoader = () => (
    <div className="section-loader" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
        <p>Loading section...</p>
    </div>
);

const Main = () => {
    return (
        <div className='container mt-4'>
            <Hero />
            <About />
            <Suspense fallback={<SectionLoader />}>
                <Project />
                <Skills />
                <Services />
                <Stats />
                <ContactUs />
            </Suspense>
        </div>
    )
}

export default Main

