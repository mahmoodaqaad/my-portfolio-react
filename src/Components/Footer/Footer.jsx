import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer py-5 border-top border-secondary'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 text-center text-md-start'>
            <p className='m-0 text-secondary'>
              &copy; {currentYear} <span className='fw-bold text-primary'>Mahmood Al-Aqaad.</span> All rights reserved.
            </p>
          </div>
          <div className='col-md-6 text-center text-md-end mt-3 mt-md-0'>
            <p className='m-0 text-secondary'>
              Built with Mahmood using React & CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
