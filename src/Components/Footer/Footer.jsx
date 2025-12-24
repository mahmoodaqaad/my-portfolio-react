import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='footer py-3 px-5 text-center text-sm-start'>
      <div className="row justify-content-between">
        <div className="col-12 col-sm-7 copyright">
          CopyRight &copy; 2024 By <span className="main-color">Mahmood aqaad</span>
        </div>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-center toUp btn btn-main mx-auto mx-sm-0 mt-1">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
    </div >
  )
}

export default Footer
