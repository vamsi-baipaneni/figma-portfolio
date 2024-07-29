import React from 'react'
import './index.scss';
import experiences from '../../../misc/experience.json';

const Experience = () => {
  return (
    <div className='exp-container' id="experience">
        <h2 className='exp-title'>Experience</h2>
        <div className='exp-contents'>
            {
                experiences.map((experience, index)=>(
                    <div className='exp-block' key={index}>
                        <div className='exp-block-part1'>
                            <h2>{experience.title}</h2>
                            <span className='exp-company'>{experience['Company Name']}</span>
                            <div className='line-horizontal'></div>
                            <span className='exp-period'>{experience.period}</span>
                        </div>
                        <div className='line-vertical'></div>
                        <ul className='exp-block-part2'>
                            {
                                experience.pointers.map((points, pindex)=>(
                                    <li key={index+pindex}>{points}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Experience