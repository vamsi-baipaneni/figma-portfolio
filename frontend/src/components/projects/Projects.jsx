import React from 'react'
import './index.scss';
import projects from '../../../misc/projects.json'
import { getImageUrl } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className="projects-container" id='projects'>
            <h2 className='projects-title'>Featured Projects</h2>
            <div className='projects'>
                {
                    projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={getImageUrl(project.img)} />
                            <div className='project-description'>
                                <div className='project-namestuff'>
                                    <h2>{project.title}</h2>
                                    <span>{project.description}</span>
                                </div>
                                <div className='line-horizontal'></div>
                                <div className='project-skillstuff'>
                                    <div>
                                        {project.skills.map(skill => (
                                            <span>{skill}</span>
                                        ))}
                                    </div>
                                    <div className='project-links'>
                                        <p><FontAwesomeIcon icon={faGithub} /></p>
                                        <a href={project.link}>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} shake />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects