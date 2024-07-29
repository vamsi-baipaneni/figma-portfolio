import React from 'react'
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='home-container' id='home'>
      <h1>
        Hi, I'm Tejaswi Yaramada
      </h1>
      <h2>
        Job Ichestara :D
      </h2>
      <a href="#about"><FontAwesomeIcon icon={faCircleChevronDown} bounce/></a>
    </div>
  )
}

export default Home;