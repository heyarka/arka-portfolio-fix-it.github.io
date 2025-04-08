
import { ExternalLink, GitHub } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A modern e-commerce platform with product filtering, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      liveUrl: '#',
      repoUrl: 'https://github.com/heyarka',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A sleek, responsive portfolio website to showcase creative work and professional achievements.',
      technologies: ['HTML/CSS', 'JavaScript', 'GSAP', 'Tailwind CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1055&q=80',
      liveUrl: '#',
      repoUrl: 'https://github.com/heyarka',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A feature-rich task management application with drag-and-drop functionality and team collaboration.',
      technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
      imageUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      liveUrl: '#',
      repoUrl: 'https://github.com/heyarka',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-secondary/30 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all hover:-translate-y-2 duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-background rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
                  >
                    <GitHub size={16} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/heyarka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 hover:border-white text-white rounded-md transition-colors inline-flex items-center"
          >
            <GitHub className="mr-2" size={18} /> See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
