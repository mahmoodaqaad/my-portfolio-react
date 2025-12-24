import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProjectData } from '../../Data/Project'

const SingleProject = () => {
    const { id } = useParams()
    const [project, setProject] = useState()
    const n = 0
    useEffect(() => {
        window.scrollTo(0, 0)

        function getProject() {
            try {
                ProjectData.map(project => {

                    if (project.id === id) {
                        setProject(project)
                        n++

                    }

                })
                if (n === 0) {
                    window.location.pathname = "/"
                }

            } catch (e) {
                console.log(e);

            }

        }
        getProject()
    }, [])

    return (
        <div className='container'>
            <div className='row py-5 px-3 justify-content-center h-100vh'>

                <div className='col-8'>
                    <img className='img-fluid' src={project?.img} alt="" />

                </div>

                <div className="col-8">
                    <h1 className='main-color mt-2 '>{project?.name}</h1>
                    <p >{project?.contact}</p>
                    <p className='text-gray'>{project?.fullDescription}</p>

                    <div className='d-flex gap-3'>
                        <Link to={project?.link} target='_blank' className='btn btn-main py-1 px-3 rounded-1'>Watch</Link >
                        <Link to="#" className='btn btn-primary  py-2 px-3'>Soruce Code </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SingleProject
