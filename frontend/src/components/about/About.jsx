import { getImageUrl } from '../../../utils';
import './index.scss';
import React from 'react'

const About = () => {
    return (
        <div className='about-container' id='about'>
            <h2 className='about-title'>About Me</h2>
            <div className='about-contents'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum voluptas corrupti sunt, molestias consequuntur facere alias quidem fugit vel eligendi odio quam vitae? Delectus commodi placeat dolorum odio eius?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptatibus corporis et labore maxime dolorum, aspernatur assumenda laudantium harum nobis omnis, distinctio consequuntur id modi accusamus vitae eum veniam qui?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt, neque error tenetur, quod optio nisi repellat numquam illo quibusdam eius aut soluta voluptate suscipit obcaecati reiciendis fugit delectus corrupti!
                </p>
                <img src={getImageUrl('assets/aboutme.png')} alt="aboutme-image" />
            </div>
        </div>
    )
}

export default About