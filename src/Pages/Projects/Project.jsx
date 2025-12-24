import React, { useEffect, useState } from 'react'
import './project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { ProjectData } from '../../Data/Project'
import { motion, AnimatePresence } from 'framer-motion'; // استيراد AnimatePresence وmotion
import { Scroll } from '../../Components/Scroll'

const Project = () => {
    const Navigate = useNavigate()
    // متغير الحالة للنوع المحدد
    const [selectedType, setSelectedType] = useState('all');

    // دالة فلترة المشاريع بناءً على النوع
    const filteredProjects = ProjectData.filter(project =>
        selectedType === 'all' || project.type === selectedType
    );

    function handleFilter(e, type) {

        setSelectedType(type)
        e.target.parentElement.parentElement.querySelectorAll("div").forEach(e => {
            e.classList.remove("active");
        });
        e.target.classList.add("active");

    }

    useEffect(() => {
        // إعداد ScrollReveal للتأثيرات
        Scroll()



    }, []);

    return (
        <section className='project' name='projects'>
            <div className=''>
                <div className='main-heading'>
                    <h1>My <span className='main-color'>Project</span></h1>
                </div>

                {/* <div className='filter row justify-content-center'>


                    <div onClick={(e) => handleFilter(e, "all")} className="col-9 col-sm-5 col-md-auto  all active">All</div>




                    <div onClick={(e) => handleFilter(e, "html")} className="col-9 col-sm-5 col-md-auto  HTML_CSS_JS">HTML CSS JS</div>




                    <div onClick={(e) => handleFilter(e, "react")} className="col-9 col-sm-5 col-md-auto  React">React</div>




                    <div onClick={(e) => handleFilter(e, "firebase")} className="col-9 col-sm-5 col-md-auto  firebase">React FireBase</div>


                </div> */}
                <div className=" row mt-5 pt-4 justify-content-center bottom">

                    <AnimatePresence >
                        {filteredProjects.map((item, index) => (
                            <motion.div onClick={e => Navigate(`project/${item.id}`)}
                                className="col-12 col-md-4 col-lg-3 mb-4 "
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <div className="box">
                                    <img src={item.img} alt={item.name} />
                                    <div className="demo">
                                        <Link target='_blank' to={item.link}><FontAwesomeIcon icon={faLink} /></Link>
                                        <h3 className="m-0 text-white">{item.name}</h3>
                                        <button className='btn btn-success m-0'>Show More <FontAwesomeIcon className='m-0 ms-3 ' icon={faArrowRight}/></button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Project
