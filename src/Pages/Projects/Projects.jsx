import React from 'react'
import './Projects.css'

function Projects() {

  const projects = [
    {
      title: "Emergency Alert System",
      desc: "A full-stack platform for reporting and responding to emergencies in real-time.",
      tech: "React, Flask, PostgreSQL"
    },
    {
      title: "Automated Donation Platform",
      desc: "A system that allows donors to support charities with recurring and tracked donations.",
      tech: "React, Flask, Redux"
    },
    {
      title: "Child Safety Monitoring App",
      desc: "A monitoring dashboard for guardians to track and protect children online.",
      tech: "React, Flask, AI Integration"
    }
  ]

  return (
    <div className="projects">

      <div className="projects-header">
        <p className="projects-tag">Projects</p>
        <h2>Some of my <span>recent work</span></h2>
        <p className="projects-sub">
          Here are a few projects I’ve worked on recently, combining design, development, and security.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <p className="project-tech">{project.tech}</p>

            <div className="project-buttons">
              <button>Live</button>
              <button className="outline">Code</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects