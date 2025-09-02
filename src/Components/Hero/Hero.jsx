import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm John Oruebi, Frontend Developer Based in Nigeria</span></h1>
            <p>I'm a frontend developer from Nigeria with 10 years of experience in multiple Components like microsoft, telsa and Apple</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero