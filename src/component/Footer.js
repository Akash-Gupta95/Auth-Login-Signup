import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-light p-3'>
        <h1 className='text-center'>
            All Right Reserved &copy; Techinfoyt
        </h1>
        <p className='text-center mt-3 '>
          <Link to="/about">About</Link>
          <Link to="contact">contact</Link>|
          <Link to="/policy">Privacy policy</Link>
        </p>
    </div>
  )
}

export default Footer