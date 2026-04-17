import React from 'react'
import CountUp from 'react-countup'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <p className='about-cover'>About me</p>
        <h6>Turning ideas into <span> powerful <br />solutions</span></h6>
        <p>
          I am philip emdokolo, a passionate full-stack developer and cyber security enthusiast,
          i love building fast, responsive websites and secure systems that solve real world problems.
        </p>
        <button>Get in touch</button>
      </div>

      <div className="about-right">
        <div className="container">
          <h3>
            <CountUp end={3} duration={2} />+
          </h3>
          <p>Years of Experience</p>
        </div>

        <div className="container">
          <h3>
            <CountUp end={10} duration={10} />+
          </h3>
          <p>Projects Completed</p>
        </div>

        <div className="container">
          <h3>
            <CountUp end={30} duration={4} />+
          </h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About;