import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ChevronRight, ChevronDown } from 'lucide-react'

const projects = [
  { id: 1, title: 'Enterprise Resource Planning System', description: 'Developed a comprehensive ERP solution for a multinational corporation, streamlining operations across departments.', tech: ['React', 'Node.js', 'PostgreSQL'] },
  { id: 2, title: 'Secure Financial Trading Platform', description: 'Built a high-frequency trading platform with advanced security measures and real-time data processing capabilities.', tech: ['Java', 'Spring Boot', 'Apache Kafka'] },
  { id: 3, title: 'AI-Driven Customer Analytics Tool', description: 'Created a machine learning-powered analytics tool for customer behavior prediction and segmentation.', tech: ['Python', 'TensorFlow', 'AWS'] },
]

const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'SQL', 'AWS', 'Docker', 'Kubernetes']

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient text-text">
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-highlight">Manoj M</h1>
          <div className="space-x-6">
            {['about', 'projects', 'skills'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`${
                  activeSection === section ? 'text-highlight' : ''
                } hover:text-highlight transition-colors hover-underline capitalize`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-12 px-8 max-w-6xl mx-auto space-y-24">
        <section id="about" className="min-h-screen flex flex-col justify-center">
          <div className="glass-card p-8">
            <h2 className="text-4xl font-semibold mb-6 text-highlight">About Me</h2>
            <p className="mb-6 leading-relaxed text-lg">
              As a seasoned full-stack developer with over 8 years of experience, I specialize in architecting and implementing 
              robust, scalable solutions for enterprise-level applications. My expertise spans across modern web technologies, 
              cloud infrastructure, and data analytics, enabling me to deliver comprehensive solutions that drive business growth.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-highlight hover:text-text transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-highlight hover:text-text transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-highlight hover:text-text transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-12 text-center">
            <ChevronDown size={32} className="animate-bounce mx-auto text-highlight" />
          </div>
        </section>

        <section id="projects" className="min-h-screen">
          <h2 className="text-4xl font-semibold mb-8 text-highlight">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-glass text-sm rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="min-h-screen">
          <h2 className="text-4xl font-semibold mb-8 text-highlight">Skills</h2>
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2 text-lg">
                  <ChevronRight size={20} className="text-highlight" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App