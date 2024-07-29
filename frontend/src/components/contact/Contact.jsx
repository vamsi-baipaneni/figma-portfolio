import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import React from 'react'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
        <h2 className='contact-title'>Contact</h2>
        <span>
            Ayya ayya ayya please ayya okka job ivandi ayya dannam ayya 🙏🙏🧎‍♀️
        </span>
        <span>Send Email <a href="mailto:abc@gmail.com" className='contact-email'><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></span>
        <div className='contact-gap'></div>
        <footer>
            <a href="www.github.com"><FontAwesomeIcon icon={faSquareGithub} beat/></a>
            <a href="www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} beatFade/></a>
        </footer>
        <span>
            Tejaswi Yaramada - 2024
        </span>
    </div>
  )
}

export default Contact
