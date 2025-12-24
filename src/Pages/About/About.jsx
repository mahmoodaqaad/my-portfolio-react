import React, {  useEffect } from 'react'

import './about.css'
import { Scroll } from '../../Components/Scroll';
const About = () => {

    useEffect(() => {

        Scroll()
    }, []);
    return (
        <div name='about' className='about-section d-flex align-items-center justify-content-center'>
            <div id='#about' className='top about rounded-3 py-5'>
                <div className='row gap-3 align-items-center'>
                    <div className="col-12 col-lg-3 left">
                        <div className="box-about text-center"><img src={require("../../IMG/aproto12-rmback-removebg.png")} alt="" /></div>
                    </div>
                    <div className="right col-12 col-lg-8 mt-3 mt-lg-0 text-center text-lg-start">
                        <h1>About <span className='main-color'>Me</span></h1>
                        <p>
                            Hello! I'm Mahmood, a passionate front-end developer with a strong love for creating seamless and engaging web experiences.
                            I specialize in using technologies like React, HTML, CSS, and JavaScript to build responsive and user-friendly applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
